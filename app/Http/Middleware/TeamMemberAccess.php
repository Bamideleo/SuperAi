<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Traits\ApiResponse;

class TeamMemberAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $slug, $returnType = null): Response
    {
        if (customerPanelAccess($slug)) {
            return $next($request);
        }
        if ($returnType == 'api') {

            if ($request->is('api/v2/*')) {
                return response()->json([
                    'error' => __("You don't have permission to access this feature."),
                ], 422);
            }
            return response()->json([
                'response' => [
                    'status' => [
                        'code' => Response::HTTP_UNPROCESSABLE_ENTITY,
                        'message' => __("You don't have permission to access this feature.")
                    ],
                    'records' => []
                ]
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        return redirect()->route('user.dashboard')->withErrors(__("You don't have permission to access this feature."));
    }
}
