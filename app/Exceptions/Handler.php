<?php

namespace App\Exceptions;

use App\Traits\ApiResponse;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\{
    HttpException, MethodNotAllowedHttpException, NotFoundHttpException
};
use Throwable;

class Handler extends ExceptionHandler
{
    use ApiResponse;
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });

        $this->renderable(function (NotFoundHttpException $e, $request) {
            if ($request->is('api/V1/*')) {
                return $this->notFoundResponse([], __('Page Not Found.'));
            }
        });

        $this->renderable(function (MethodNotAllowedHttpException $e, $request) {
            if ($request->is('api/V1/*')) {
                return $this->methodNotAllowedResponse();
            }
        });

        $this->renderable(function (AuthenticationException $exception, $request) {
            if ($request->is('api/V1/*')) {
                return $this->unauthorizedResponse();
            }
        });

        $this->renderable(function (ValidationException $exception, $request) {
            if ($request->is('api/V1/*')) {
                return $this->unprocessableResponse($exception->errors());
            }
        });

        $this->renderable(function (HttpException $exception, $request) {
            if ($request->is('api/V1/*')) {
                return $this->serviceUnavailableResponse();
            }
        });

        $this->renderable(function (\Illuminate\Http\Exceptions\PostTooLargeException $exception, $request ) {
            if (! $request->is('api/V1/*')) {
                \Session::flash('fail', __('Your file is too large.'));

                return redirect()->back();
            }

            return $this->unprocessableResponse();
        });

        $this->renderable(function (\Laravel\Socialite\Two\InvalidStateException $exception, $request) {
            return redirect()->route('frontend.index');
        });

        $this->renderable(function (Throwable $exception, $request) {
            if ($request->wantsJson() && ($request->is('api/v2/*') || $request->is('api/v3/*'))) {

                $response = [
                    'error' => $exception->getMessage(),
                ];
        
                // Handle specific exceptions and their status codes
                $statusCode = 500;
        
                if ($exception instanceof AuthenticationException) {
                    $statusCode = 401;
                } elseif ($exception instanceof ValidationException) {
                    $statusCode = 422;
                } elseif ($exception instanceof NotFoundHttpException) {
                    $statusCode = 404;
                    $response['error'] = __('Page Not Found.');
                } elseif ($exception instanceof HttpException) {
                    $statusCode = 403;
                }
        
                return response()->json($response, $statusCode);
            }
        });
    }
}
