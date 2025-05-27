<?php

namespace Modules\OpenAI\Http\Controllers\Api\v2\User;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\OpenAI\Services\v2\TextToVideoService;
use Modules\OpenAI\Transformers\Api\v2\AiVideo\AiVideoDetailsResource;

class TextToVideoController extends Controller
{
    /**
     * Constructor method.
     *
     * Instantiates the class and sets up the vector service.
     *
     * @param  TextToVideoService $textToVideoService
     * 
     * @return void
     */
    public function __construct(
        protected TextToVideoService $textToVideoService,
    ) {}

    public function generate(Request $request)
    {
        $checkSubscription = checkUserSubscription('video');

        if ($checkSubscription['status'] != 'success') {
            return response()->json(['error' => $checkSubscription['response']], Response::HTTP_FORBIDDEN);
        }
        
        $request = $request->all();

        $cleanedString = preg_replace('/[^A-Za-z0-9\s]/', '', $request['prompt']);
        $request['prompt'] = filteringBadWords($cleanedString);
        $request['parent_id'] = request('parent_id') ?? null;

        request()->merge([...$request['options']]);
        $this->textToVideoService->validation();
        try {
            $info = $this->textToVideoService->store($request);
            $video = $this->textToVideoService->fetchVideo($info['video_id']);
            $data['userSubscription'] = subscription('getUserSubscription',auth()->user()->id);
            $data['featureLimit'] = subscription('getActiveFeature', $data['userSubscription']?->id ?? 1);
            $data['featureLimit']['video']['reduce'] = $info['balanceReduce'];

            return response()->json(['data' => new AiVideoDetailsResource(collect(['video' => $video, 'balance' => $data['featureLimit']['video']]))], Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 
                $e->getCode() ?: Response::HTTP_INTERNAL_SERVER_ERROR
            );
        }
    }
}
