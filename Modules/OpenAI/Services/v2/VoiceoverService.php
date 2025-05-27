<?php

/**
 * @package ImageService
 * @author TechVillage <support@techvill.org>
 * @contributor Md. Khayeruzzaman <[shakib.techvill@gmail.com]>
 * @created 04-08-2024
 */

namespace Modules\OpenAI\Services\v2;

use Modules\OpenAI\Entities\{
    Voice,
    Archive
};

use App\Models\{
    User,
    Language,
    Team,
    TeamMemberMeta
};


use App\Facades\AiProviderManager;
use Symfony\Component\HttpFoundation\Response;
use Modules\OpenAI\Services\ContentService;
use Exception;

class VoiceoverService
{

    private $aiProvider;

    private $data;

    /**
     * Constructor method.
     * 
     * @return void
     */
    public function __construct()
    {
        if(! is_null(request('provider'))) {
            $this->aiProvider = AiProviderManager::isActive(request('provider'), 'voiceover');
        }
    }

     /**
     * Validate the request data with the validation rules from the AI provider.
     * 
     * @return array The validated request data.
     */
    public function validation()
    {
        if (! $this->aiProvider) {
            throw new Exception(__('Provider not found.'));
        }

        $validation = $this->aiProvider->voiceoverValidationRules('VoiceoverDataProcessor');
        $rules = $validation[0] ?? []; // Default to an empty array if not set
        $messages = $validation[1] ?? []; // Default to an empty array if not set
        
        return request()->validate($rules, $messages);
    }

    /**
     * Handle Speech generate 
     *
     * @param array $requestData
     * @return mixed
     */
    public function handleSpeechGenerate(array $requestData)
    {
        if (! $this->aiProvider) {
            throw new Exception(__(':x provider is not available for the :y. Please contact the administration for further assistance.', ['x' => ucfirst(request('provider')), 'y' => __('Voiceover')]));
        }
        app('Modules\OpenAI\Http\Requests\v2\VoiceoverStoreRequest')->safe();

        try {

            $prompt = "";
            foreach ($requestData['data']['additionalData'] as $key => $data) {

                if (!$this->checkActiveActor($data)) {
                    throw new Exception (__(':x, the voice actor, is not currently active', ['x' => $data['voice']]));
                }
    
                if ($key > 0) { 
                    $prompt .= " ";
                }
    
                $prompt .= filteringBadWords($data['prompt']);
            }

            $generatedContent = $this->aiProvider->generateSpeech($requestData);
            $audioPath = $generatedContent->audio();
    
            $audioFile = new AudioProcessor($audioPath);

            // Check if $audioFile is an instance of AudioFile
            if (!($audioFile instanceof AudioProcessor)) {
                throw new Exception(__('Invalid audio file type.'), Response::HTTP_UNPROCESSABLE_ENTITY);
            }

            // Check if the audio file is valid
            if (!$audioFile->isValid()) {
                throw new Exception(__('Invalid audio file format.'), Response::HTTP_UNPROCESSABLE_ENTITY);
            }
    
            $content = $generatedContent->content();
            $generateOptions = $this->aiProvider->processOptionsData($content);

            preg_match_all("/./u", $prompt, $matches);
            $totalCharacters = count($matches[0]);

            $this->data = [
                'title' => $prompt,
                'file_name' => $audioPath,
                'total_characters' => $totalCharacters,
                'generation_options' => $generateOptions
            ];

            return $this->storeInfo();
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    /**
     * Core Model
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public static function model()
    {
        return Archive::with(['metas', 'voiceoverCreator'])->whereType('voiceover_chat_reply');
    }

    /**
     * Find Audio by id
     *
    * @param string $id
    * @return \Illuminate\Database\Eloquent\Model
    */
    public function audioById($id)
    {
        return self::model()->whereId($id)->firstOrFail();
    }

    /**
     * delete auddio using id
     *
     * @param int $id
     * @return bool
     */
    public function delete($id)
    {
        $data = $this->audioById($id);

        if (!empty($data)) {
            $this->unlinkFile($data->file_name);
            $metaKeys = array_keys($data->toArray()['meta_data']);
            $data->unsetMeta($metaKeys);
            $data->save();
            return $data->delete();
        }

        return false;
    }

    /**
     * Unlink Audio
     * @param mixed $name
     * 
     * @return [type]
     */
    protected function unlinkFile($name)
    {
        if (isExistFile($this->audioPath($name))) {
            objectStorage()->delete($this->audioPath($name));
        }
        return true;
    }

    /**
     * Audio's path
     * @param mixed $name
     * 
     * @return [type]
     */
    public static function audioPath($name)
    {
        return 'public' . DIRECTORY_SEPARATOR .'uploads' . DIRECTORY_SEPARATOR . 'googleAudios'. DIRECTORY_SEPARATOR . $name;
    }

    /**
     * Users Data
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public static function users()
    {
        return User::get();
    }

    /**
     * Language Data
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public static function languages($shortName = null)
    {
        if ($shortName) {
            return Language::where('short_name', $shortName)->value('name');
        }
        return Language::where(['status' => 'Active'])->get();
    }

    /**
     * Update
     * @param array $data
     * @param int $id
     * @return array|boolean
     */
    public function updateVoice($data = [], $id = null)
    {
        $result = Voice::where('id', $id);
        if ($result->exists()) {
            if ($result->update($data)) {
                if (request()->file_id) {
                    $result->first()->updateFiles(['isUploaded' => false, 'isOriginalNameRequired' => true, 'thumbnail' => true]);
                    return true;
                } else {
                    return $result->first()->deleteFromMediaManager();
                }
            }
        }

        return false;
    }

    /**
     * Process Language Data
     * 
     * @param array $lang
     * 
     * @return [type]
     */

    public function processLanguage($languages = [])
    {
        $newLang = [];
        foreach ($languages as $language) {
            $shortName = Language::where('name', $language)->value('short_name');
            $newLang[$shortName] = $language;
        }
        
        return $newLang;
    }


    /**
     * Get All Voices
     * @return [type]
     */
    public function allVoice($provider = '')
    {
        $voices = Voice::where('status', 'Active')
            ->where(function ($query) use ($provider) {
                $query->whereNull('type')
                    ->orWhere('user_id', auth()->id());
            })
            ->when($provider, function ($query) use ($provider) {
                $query->where('providers', $provider);
            })
            ->get();

        return $voices;
    }

    /**
     * Check Active Actor
     * @param array $data
     * 
     * @return [type]
     */
    public function checkActiveActor($data)
    {
        if (Voice::where('voice_name', $data['name'])->where('status', 'Active')->exists()) {
            return true;
        }

        return false;
    }

    /**

     * Team member meta insert or update
     * @param array $words
     *
     * @return bool|array
     */
    public function storeTeamMeta($minutes)
    {
        $memberData = Team::getMember(auth()->user()->id);
        if (!empty($memberData)) {
            $usage = TeamMemberMeta::getMemberMeta($memberData->id, 'character_used');
            if (!empty($usage)) {
                return $usage && $usage->increment('value', $minutes);
            }
        }
        return false;
    }


    /**
     * Create upload path
     * @return [type]
     */
    public function uploadPath()
	{
		return createDirectory(join(DIRECTORY_SEPARATOR, ['public', 'uploads','googleAudios']));
	}

    /**
     * Slug Creator
     *
     * @param string $name
     * @return string
     */
    public function createSlug($name)
    {
        if ( !empty($name) ) {
            $slug = strlen($name) > 120 ? cleanedUrl(substr($name, 0, 120)) : cleanedUrl($name);

            $slugExist = Archive::where('type', 'image_variant')->whereHas('metas', function($q) use ($slug) {
                    $q->where('key', 'slug')->where('value', $slug);
            })->exists();
    
            return $slugExist ? $slug . '-' . time() : $slug;
        }

        return $name;
    }

    /**
     * Store data and create records in database
     *
     * @param  mixed $result
     * @return mixed
     */
    public function storeInfo(): mixed
    {
        \DB::beginTransaction();
        try {
            if (empty(request('parent_id'))) {
                $chat = $this->createNewChat();
                $this->createUserReply($chat->id);
                
                $botReply = $this->createBotReply($chat->id);
                
            } else {
                $this->createUserReply(request('parent_id'));
                $botReply = $this->createBotReply(request('parent_id'));
            }
            \DB::commit();
            return $botReply;
        } catch (Exception $e) {
            \DB::rollBack();
            return $e->getMessage();
        }
    }

    /**
     * Creates a new chat record.
     *
     * @return Archive The newly created chat instance.
     */
    protected function createNewChat()
    {

        $chat = ArchiveService::create([
            'title' => $this->data['title'],
            'unique_identifier' => \Str::uuid(),
            'user_id' => auth()->id(),
            'provider' => request('provider'),
            'type' => 'voiceover_chat',
        ]);
        return $chat;
    }
    /**
     * Creates a user reply record for the specified parent chat.
     *
     * @param  int  $parentId  The ID of the parent chat.
     *
     * @return Archive The newly created user reply instance.
     */
    protected function createUserReply($parentId)
    {
        $userReply = ArchiveService::create([
            'parent_id' => $parentId,
            'user_id' => auth()->id(),
            'type' => 'voiceover_chat_reply',
            'user_reply' => $this->data['title'],
            'generation_options' => $this->data['generation_options'],
        ]);
        return $userReply;
    }
    /**
     * Creates a bot reply record for the specified parent chat.
     *
     * @param  mixed  $result  The result object containing bot response data.
     * @param  int  $parentId  The ID of the parent chat.
     *
     * @return Archive The newly created bot reply instance.
     */
    protected function createBotReply($parentId)
    {
        $balanceReduce = 'onetime';

        if (!subscription('isAdminSubscribed') || auth()->user()->hasCredit('character')) {
            $balanceReduce = 'subscription';
        }

        $botReply = ArchiveService::create([
            'parent_id' => $parentId,
            'voiceover_creator_id' => auth()->id(),
            'title' => $this->data['title'],
            'provider' => request('provider'),
            'type' => 'voiceover_chat_reply',
            'slug' => $this->createSlug($this->data['title']),
            'total_characters' => $this->data['total_characters'],
            'file_name' => $this->data['file_name'],
            'generation_options' => $this->data['generation_options'],
            'balanceReduce' => $balanceReduce,
        ]);

        $userId = (new ContentService())->getCurrentMemberUserId('meta', null);
        handleSubscriptionAndCredit(subscription('getUserSubscription', $userId), 'character', $botReply->total_characters, $userId);
        return $botReply;
    }
}
