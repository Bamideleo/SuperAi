<?php

/**
 * @package TextToVideoService
 * @author TechVillage <support@techvill.org>
 * @contributor Md. Khayeruzzaman <[shakib.techvill@gmail.com]>
 * @created 25-02-2025
 */
namespace Modules\OpenAI\Services\v2;

use Illuminate\Http\Response;
use Modules\OpenAI\Entities\Archive;
use Exception, Str, DB, AiProviderManager;
use Modules\OpenAI\Services\ContentService;



class TextToVideoService
{
    private $aiProvider;

    private $response;

    /**
     * Method __construct
     *
     * @return void
     */
    public function __construct() 
    {
        if(! is_null(request('provider'))) {
            $this->aiProvider = AiProviderManager::isActive(request('provider'), 'texttovideo');
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

        manageProviderValues(request('provider'), 'model', 'texttovideo');

        $validation = $this->aiProvider->getCustomerValidationRules('TextToVideoDataProcessor');
        $rules = $validation[0] ?? []; // Default to an empty array if not set
        $messages = $validation[1] ?? []; // Default to an empty array if not set
        return request()->validate($rules, $messages);
    }
    
    /**
     * Create a new chat conversation.
     *
     * @param  array  $requestData  The data for the chat conversation.
     * @throws \Exception
     */
    public function store(array $requestData)
    {
        if (! $this->aiProvider) {
            throw new Exception(__(':x provider is not available for the :y. Please contact the administration for further assistance.', ['x' => request('provider'), 'y' => __('Text To Video')]));
        }

        $prompt = $requestData['prompt'];
        $responseData = $this->aiProvider->generateTextToVideo($requestData);
        $fileId = $responseData->video['request_id'];
        $this->response = $this->aiProvider->getTextToVideo($fileId);
        $video = file_get_contents($this->response->url);
        $filename = date('Ymd') . DIRECTORY_SEPARATOR .md5(uniqid()) . ".mp4";
    
        objectStorage()->put($this->uploadPath() . DIRECTORY_SEPARATOR . $filename, $video);

        DB::beginTransaction();
        try {

            $userId = (new ContentService())->getCurrentMemberUserId('meta', null);
            $response = [
                'balanceReduce' => 'onetime',
            ];
            $subscription = subscription('getUserSubscription', $userId);

            if (!subscription('isAdminSubscribed') || auth()->user()?->hasCredit('video')) {
                $increment = subscription('usageIncrement', $subscription?->id, 'video', 1, $userId);
                if ($increment && $userId != auth()->user()?->id) {
                    (new TeamMemberService())->updateTeamMeta('video', 1);
                }
                $response['balanceReduce'] = app('user_balance_reduce');
            }

            $archive = $this->storeInArchive();
            $video = new Archive();
            $video->type = 'text_to_video_chat';
            $video->parent_id = $archive->id;
            $video->file_name = $prompt;
            $video->original_name = $prompt;
            $video->file_id = $fileId;
            $video->save();

            // Store Generated Video
            $video =  new Archive();
            $video->parent_id = $archive->id;
            $video->user_id = auth()->id();
            $video->unique_identifier = (string) Str::uuid();
            $video->type = 'text_to_video';
            $video->provider = request('provider');
            $video->status = 'Completed';

            $video->generation_options =  $requestData['options'];
            $video->title = $prompt;
            $video->file_name = $filename;
            $video->video_creator_id = auth()->id();
            $video->slug = $this->slug($prompt);
            $video->save();

            DB::commit();
            return array_merge($response, ['video_id' => $video->id]);
        } catch (Exception $e) {
            DB::rollBack();
            throw new Exception($e->getMessage());
        };
    }

    /**
     * Creates a new video record.
     *
     * @return Archive The newly created chat instance.
     */
    protected function storeInArchive()
    {
        $video =  new Archive();
        $video->user_id = auth()->id();
        $video->unique_identifier = (string) Str::uuid();
        $video->raw_response = json_encode($this->response);
        $video->type = 'text_to_video_chat';
        $video->provider = request('provider');
        $video->status = 'Completed';
        $video->save();
        return $video;
    }

    /**
     * Generate a URL-friendly slug based on the given prompt.
     *
     * @param string $prompt The input prompt for generating the slug.
     * @return string The generated slug.
     * @throws \Exception If there's an issue with database querying.
     */
    public function slug($prompt): string
    {
        sleep(1);

        $slug = strlen($prompt) > 120 ? cleanedUrl(substr($prompt, 0, 120)) : cleanedUrl($prompt);

        $slugExist = Archive::query()
            ->select('archives.id')
            ->where('archives.type', 'text_to_video')
            ->join('archives_meta', function ($join) use ($slug) {
                $join->on('archives.id', '=', 'archives_meta.owner_id')
                    ->where('archives_meta.key', 'slug')
                    ->where('archives_meta.value', $slug);
            })
            ->exists();

        return $slugExist ? $slug . time() : $slug;
    }

    /**
     * Fetches a video record by its ID.
     *
     * @param mixed $id The identifier of the video to retrieve.
     * @return Archive|null The video record with its associated user, children, and metadata, or null if not found.
     */
    public function fetchVideo($id)
    {
       return Archive::with('user', 'childs', 'metas')->where('id', $id)->where('type', 'text_to_video')->first();
    }

    /**
     * Creates and returns the upload path for storing videos.
     * 
     * @return string The path to the upload directory for AI-generated videos.
     */
    public function uploadPath()
	{
		return createDirectory(join(DIRECTORY_SEPARATOR, ['public', 'uploads','aiVideos']));
	}

}
