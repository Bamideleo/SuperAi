<?php

namespace Modules\OpenAI\Http\Controllers\Customer\v2;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\OpenAI\Services\ContentService;

class TextToVideoController extends Controller
{

    /**
     * Display the template view for the image-to-video feature.
     *
     * @return \Illuminate\View\View The view instance for the image-to-video template.
     */
    public function template()
    {
        $data['aiProviders'] = \AiProviderManager::databaseOptions('texttovideo');
        $userId = (new ContentService())->getCurrentMemberUserId(null, 'session');
        $data['rules'] = \AiProviderManager::rules('texttovideo');
        $data['userId'] = $userId; 
        $data['userSubscription'] = subscription('getUserSubscription', $userId);
        $data['featureLimit'] = subscription('getActiveFeature', $data['userSubscription']?->id ?? 1);
        $data['promptUrl'] = 'api/v2/text-to-video';

        return view('openai::blades.v2.text_to_video.create', $data);
    }
}
