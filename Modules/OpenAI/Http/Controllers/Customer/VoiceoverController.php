<?php

namespace Modules\OpenAI\Http\Controllers\Customer;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\OpenAI\Services\ContentService;
use Modules\OpenAI\Entities\Archive;
use Modules\OpenAI\Services\v2\VoiceoverService;
use App\Facades\AiProviderManager;

class VoiceoverController extends Controller
{

    /**
     * Text to Speech Service
     *
     * @var object
     */
    protected $voiceoverService;

    /**
     * Constructor
     *
     * @param VoiceoverService $voiceoverService
     */
    public function __construct(VoiceoverService $voiceoverService)
    {
        $this->voiceoverService = $voiceoverService;
    }

    /**
     * Display a paginated list of voiceovers.
     *
     * @return \Illuminate\Contracts\Support\Renderable The view displaying the list of voiceovers.
     */
    public function index()
    {
        $data['audios'] = (new Archive)->voiceovers('voiceover')->orderBy('id', 'desc')->paginate(preference('row_per_page'));
        return view('openai::blades.voiceover.history', $data);
    }

    /**
     * Display the text-to-speech template with necessary data.
     *
     *
     * @param ContentService $contentService The service used to retrieve content-related data, such as the current user's ID.
     *
     * @return \Illuminate\Contracts\Support\Renderable The view displaying the voiceover template with the prepared data.
     */
    public function template(ContentService $contentService)
    {
        $data['accessToken'] = !empty(auth()->user()) ? auth()->user()->createToken('accessToken')->accessToken : '';
        $data['promtUrl'] = 'api/v2/voiceover';

        $aiProviders = AiProviderManager::databaseOptions('voiceover');
        $data['providers'] = [];
        $data['options'] = [];
        $data['advanceOptions'] = [];
        $data['languages'] = [];
        $data['conversationLimit'] = 1;
        $data['voiceover'] = [];
  
        foreach ($aiProviders as $providerName => $provider) {
            $data['providers'][] = str_replace('voiceover_', '', $providerName); 
        }
       
        $data['model'] = $data['providers'][0] ?? null;
        
        if (!empty($data['model'])) {
            $data['voiceover'] = $aiProviders['voiceover_'. $data['model']];

            foreach ($data['voiceover'] as $item) {
                if (isset($item['name']) && $item['name'] === 'conversation_limit') {
                    $data['conversationLimit'] = $item['value'];
                    break;
                }
            }

        }

        $userId = $contentService->getCurrentMemberUserId(null, 'session');
        $data['userId'] = $userId;
        $data['userSubscription'] = subscription('getUserSubscription');
        $data['featureLimit'] = subscription('getActiveFeature', $data['userSubscription']?->id ?? 1);
        $allVoices = $this->voiceoverService->allVoice($data['model']);
        $data['voices'] = $this->voiceoverService->allVoice($data['model']);

        $data['audios'] = (new Archive)->voiceovers('voiceover')->orderBy('id', 'desc')->take(3)->get();
        
        $data['totalModel'] = count($data['providers']);

        return view('openai::blades.voiceover.index', $data);
    }

    /**
     * Display the specified resource.
     *
     * @param string $value The encrypted value used to retrieve the resource ID.
     *
     * @return \Illuminate\Contracts\Support\Renderable The view displaying the specified resource.
     */
    public function show(string $value)
    {
        $id = techDecrypt($value);
        $data['audio'] = $this->voiceoverService->audioById($id);
        return view('openai::blades.voiceover.view', $data);
    }
 
    /**
     * Delete the specified content.
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse A JSON response containing the status and message of the operation.
     */
    public function delete(Request $request)
    {
        $response = ['status' => 'error', 'message' => __('The data you are looking for is not found')];

        if ($this->voiceoverService->delete($request->id)) {
            $response = ['status' => 'success', 'message' => __('The :x has been successfully deleted.', ['x' => __('Voiceover')])];
        }
        return response()->json($response);
    }

    /**
     * Delete the specified content.
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse A JSON response containing the status and message of the operation.
     */
    public function destroy(Request $request)
    {
        $response = ['status' => 'error', 'message' => __('The data you are looking for is not found')];

        if ($this->voiceoverService->delete($request->id)) {
            $response = ['status' => 'success', 'message' => __('The :x has been successfully deleted.', ['x' => __('Voiceover')])];
        }

        \Session::flash($response['status'], $response['message']);
        return response()->json($response);
    }

    /**
     * Form field by Voiceover
     * @param Request $request
     *
     * @return [type]
     */
    public function getFormFiledByVoiceover(Request $request) {
        $data['provider'] = $request->provider;
        $data['voices'] = $this->voiceoverService->allVoice($request->provider);

        $data['options'] = [];
        $data['advanceOptions'] = [];
        $data['languages'] = [];
        $data['targetFormat'] = [];
        $data['conversationLimit'] = 1;
        $data['voiceover'] = [];

        $aiProviders = AiProviderManager::databaseOptions('voiceover');

        $key = "voiceover_" . request('provider');
        // Check if the key exists and retrieve the values
        if (array_key_exists($key, $aiProviders)) {
            $result = $aiProviders[$key];
            $data['voiceover'] = $result;
           
            foreach ($data['voiceover'] as $item) {
                if (isset($item['name']) && $item['name'] === 'conversation_limit') {
                    $data['conversationLimit'] = $item['value'];
                    break;
                }
            }
        } 

        return view('openai::blades.voiceover.fields', $data);
    }
}
