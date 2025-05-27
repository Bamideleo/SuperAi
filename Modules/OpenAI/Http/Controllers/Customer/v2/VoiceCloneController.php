<?php

namespace Modules\OpenAI\Http\Controllers\Customer\v2;

use Illuminate\View\View;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\OpenAI\Entities\Voice;
use Modules\OpenAI\Services\ContentService;
use Modules\OpenAI\Services\v2\VoiceCloneService;
use Modules\OpenAI\Http\Requests\v2\VoiceCloneUpdateRequest;

class VoiceCloneController extends Controller
{

    /**
     * The Voice Clone Service instance.
     *
     */
    private $voiceCloneService;

    public function __construct()
    {
        $this->voiceCloneService = new VoiceCloneService();
    }

    /**
     * Display the index view with the list of long articles.
     *
     * @return View
     */
    public function index(): View
    {
        return view('openai::blades.voice_clone.lists', [
            'audios' => $this->voiceCloneService->getAllVoiceClones()->paginate(preference('row_per_page'))
        ]);
    }

    /**
     * Display a listing of the resource.
     * 
     * @return View
     */
    public function template(): View
    {   
        $data['aiProviders'] = \AiProviderManager::databaseOptions('voiceclone');
        $data['promptUrl'] = 'api/v2/voice-clone/generate';
        $data['userSubscription'] = subscription('getUserSubscription',auth()->user()->id);
        $data['featureLimit'] = subscription('getActiveFeature', $data['userSubscription']?->id ?? 1);
        $data['audios'] =  Voice::with('metas')->where('user_id', auth()->user()->id)->orderBy('id', 'desc')->where('type', 'voiceClone')->paginate(preference('row_per_page'));
        $data['userId'] =  (new ContentService())->getCurrentMemberUserId(null, 'session');
        return view('openai::blades.voice_clone.index', $data);
    }

    /**
     * Edit the specified resource.
     *
     * @param  int  $id
     * @return view
     */
    public function edit($id)
    {
        $id = techDecrypt($id);
        $data['clone'] = $this->voiceCloneService->getSpecificVoiceClone($id);
        return view('openai::blades.voice_clone.edit', $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function update(VoiceCloneUpdateRequest $request, $id)
    {
        $response = ['status' => 'fail', 'message' => __('Invalid Request')];
        try {
            $id = techDecrypt($id);
            $this->voiceCloneService->update($request->except('_token'), $id);
            $response = [
                'status' => 'success',
                'message' => __('The :x has been successfully updated.', ['x' => __('Voice')])
            ];
            return response()->json($response);
        } catch (\Exception $e) {
            return response()->json(['status' => 'fail', 'message' => $e->getMessage()]);
        }
    
    }

    /**
     * Delete the specified voice clone resource.
     *
     * @param \Illuminate\Http\Request $request The request containing the resource data.
     * @return \Illuminate\Http\JsonResponse A JSON response with the status and message of the operation.
     */

    public function destroy(Request $request)
    {
        $response = ['status' => 'error', 'message' => __('Invalid Request')];
        $this->voiceCloneService->delete($request->except('_token'));
        $response = [
            'status' => 'success',
            'message' => __('The :x has been successfully deleted', ['x' => __('Voice')])
        ];
        return response()->json($response);
        
    }
}
