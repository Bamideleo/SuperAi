<?php

namespace Modules\OpenAI\Http\Controllers\Api\v2\User;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\OpenAI\Services\v2\VoiceCloneService;
use Modules\OpenAI\Http\Requests\v2\VoiceCloneRequest;

class VoiceCloneController extends Controller
{
    /**
     * @param VoiceCloneService $voiceCloneService
     */

     public function __construct(
        protected VoiceCloneService $voiceCloneService
    ) {}

    /**
     * Generate a plagiarism check.
     *
     * @param Request $request The request containing plagiarism data.
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function generate(VoiceCloneRequest $request)
    {
        $checkSubscription = checkUserSubscription('voice-clone');

        if ($checkSubscription['status'] != 'success') {
            return response()->json(['error' => $checkSubscription['response']], Response::HTTP_FORBIDDEN);
        }
        
        try {
            $request = $request->except('_token', 'dataType');
            $request['options'] = request(request('provider'));

            request()->merge([...$request['options']]);
            $response = $this->voiceCloneService->handleVoiceClone($request);
            return response()->json(['data' => $response], Response::HTTP_CREATED);
        } catch(\Exception $e) {
            return response()->json(['error' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        
    }
}
