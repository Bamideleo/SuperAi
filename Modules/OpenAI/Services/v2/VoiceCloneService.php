<?php 

namespace Modules\OpenAI\Services\v2;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Modules\OpenAI\Entities\Voice;
use App\Facades\AiProviderManager;
use Modules\OpenAI\Services\ContentService;
use Modules\OpenAI\Services\v2\ArchiveService;
use Modules\OpenAI\Transformers\Api\v2\VoiceClone\VoiceCloneResource;

class VoiceCloneService
{
    /**
     * @var \App\Facades\AiProviderManager  The AI provider manager instance.
     */
    private $aiProvider;

    /**
     * Method __construct
     *
     * @param $generator [decide which AI provider will be used for generate]
     *
     * @return void
     */
    public function __construct() 
    {
        if(! is_null(request('provider'))) {
            $this->aiProvider = AiProviderManager::isActive(request('provider'), 'voiceclone');
        }
    }

    /**
     * Handle the voiceclone check request by preparing the input data and sending it
     * to the AI provider for voiceclone detection.
     * 
     * @param array $requestData
     * 
     * @return mixed
     *
     * @throws \Exception If the voiceclone check fails or returns an error message.
     */
    public function handleVoiceClone(array $requestData): mixed
    {

        if (! $this->aiProvider) {
            throw new Exception(__('Provider not found.'));
        }

        manageProviderValues(request('provider'), 'model', 'voiceclone');

        try {
            $validationData = $this->aiProvider->getCustomerValidationRules('VoiceCloneDataProcessor');
            $rules = $validationData[0] ?? []; // Default to an empty array if not set
            $messages = $validationData[1] ?? []; // Default to an empty array if not set

            request()->validate($rules, $messages);

            $result = $this->aiProvider->voiceClone($requestData);

            $userId = (new ContentService())->getCurrentMemberUserId('meta', null);
            handleSubscriptionAndCredit(subscription('getUserSubscription', $userId), 'voice-clone', 1, $userId);
            return $this->storeInfo($result);
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }

    }

    /**
     * Store the voiceclone data in the database and return a resource.
     *
     * @param mixed $result The result from the AI provider.
     *
     * @return \Modules\OpenAI\Transformers\Api\v2\VoiceClone\VoiceCloneResource A resource containing the stored data.
     *
     * @throws \Exception If storing the data in the database fails.
     */
    public function storeInfo($result): VoiceCloneResource
    {
        \DB::beginTransaction();
        try {

            $filePath = $this->aiProvider->filePath(request('file'));

            $currentValue = app()->make('all-image');
            $newValue = 'public/uploads/googleAudios/'. str_replace('\\', '/', $filePath);
            if (is_array($currentValue)) {
                $currentValue[] = $newValue;
            } 

            app()->instance('all-image', $currentValue);

            $newVoice = new Voice();
            $newVoice->user_id = auth()->id();
            $newVoice->name = request('name');
            $newVoice->voice_name = $result->content();
            $newVoice->language_code = 'en';
            $newVoice->gender = request('gender');
            $newVoice->file_name = $filePath;
            $newVoice->providers = request('provider');
            $newVoice->status = 'Active';
            $newVoice->type = 'voiceClone';
            $newVoice->save();

            if (request()->has('image')) {
                $newVoice->updateSingleFile('image', ['isUploaded' => false, 'isOriginalNameRequired' => true, 'isSavedInObjectFiles' => true, 'thumbnail' => true]);
            }

            \DB::commit();
            return new VoiceCloneResource($newVoice);
        } catch (Exception $e) {
            \DB::rollBack();
            return $e->getMessage();
        }
    }

    /**
     * Get all the voice clones for the current user.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function getAllVoiceClones(): \Illuminate\Database\Eloquent\Builder
    {
        return Voice::with('metas')->where(['type' => 'voiceClone', 'user_id' => auth()->id()])->latest();
    }

    /**
     * Get a specific voice clone by ID.
     *
     * @param int $id
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getSpecificVoiceClone(int $id) 
    {
        return Voice::with('metas')->where('id', $id)->first();
    }

    /**
     * Update the voice clone data.
     *
     * @param \Illuminate\Http\Request $requestData
     * @param int $id
     * 
     * @return void
     *
     * @throws \Exception If the update fails or if the provider is not found.
     */
    public function update(array $requestData , int $id) 
    {

        if (! $this->aiProvider) {
            throw new Exception(__('Provider not found.'));
        }

        \DB::beginTransaction();
        try {
            $voice = Voice::where('id', $id)->where('user_id', auth()->id())->first();
            $requestData['voice_name'] = $voice->voice_name;

            $this->aiProvider->updateVoice($requestData);

            $voice->update(['name' => $requestData['name'], 'gender' => $requestData['gender']]);

            if (request()->has('file') && !empty(request()->file)) {
                $voice->updateFiles(['isUploaded' => false, 'isSavedInObjectFiles' => true, 'isOriginalNameRequired' => true, 'thumbnail' => true]);
            }


            \DB::commit();
        } catch (Exception $e) {
            \DB::rollBack();
            throw new Exception($e->getMessage());
        }
    }

    public function delete(array $requestData) 
    {
        if (! $this->aiProvider) {
            throw new Exception(__('Provider not found.'));
        }

        \DB::beginTransaction();
        try {
            $voice = Voice::where('id', $requestData['id'])->where('user_id', auth()->id())->first();
            $this->aiProvider->deleteVoice($voice->toArray());

            $voice->delete();

            \DB::commit();
        } catch (Exception $e) {
            \DB::rollBack();
            throw new Exception($e->getMessage());
        }
    }
}
