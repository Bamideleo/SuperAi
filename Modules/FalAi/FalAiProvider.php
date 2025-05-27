<?php

namespace Modules\FalAi;

use App\Lib\AiProvider;
use Modules\FalAi\Traits\FalAiApiTrait;

use Modules\OpenAI\Contracts\Resources\TextToVideoContract;

use Modules\FalAi\Resources\TextToVideoDataProcessor;
use Modules\OpenAI\Contracts\Responses\TextToVideo\TextToVideoResponseContract;
use Modules\OpenAI\Contracts\Responses\TextToVideo\FetchVideoResponseContact;
use Modules\FalAi\Responses\TextToVideo\TextToVideoResponse;
use Modules\FalAi\Responses\TextToVideo\FetchVideoResponse;

class FalAiProvider extends AiProvider implements TextToVideoContract
{
    use FalAiApiTrait;

    /**
     * Holds the processed data after it has been manipulated or transformed.
     * This property is typically used within the context of a class to store
     * data that has been modified or processed in some way.
     *
     * @var array Contains an array of data resulting from processing operations.
     */
    protected $processedData;

    protected $model;

    public function description(): array
    {
        return [
            'title' => 'FalAi',
            'description' => __('Fal.ai is an AI platform that helps users generate images, text, and speech. It offers fast model inference, fine-tuning, and APIs, making AI integration easy for developers, creators, and businesses.'),
            'image' => 'Modules/FalAi/Resources/assets/image/falai.png',
        ];
    }

    /**
     * Get the validation rules for a specific processor.
     * 
     * @param string $processor The name of the data processor class.
     * 
     * @return array Validation rules for the processor.
     */
    public function getValidationRules(string $processor): array
    {
        $processorClass = "Modules\\FalAi\\Resources\\" . $processor;

        if (class_exists($processorClass)) {
            return (new $processorClass())->validationRules();
        }

        return [];
    }

    /**
     * Get the validation rules for a specific processor.
     * 
     * @param string $processor The name of the data processor class.
     * 
     * @return array Validation rules for the processor.
     */
    public function getCustomerValidationRules(string $processor): array
    {
        $processorClass = "Modules\\FalAi\\Resources\\" . $processor;

        if (class_exists($processorClass)) {
            return (new $processorClass())->customerValidationRules();
        }

        return [];
    }

    public function textToVideoOptions(): array 
    {
        return (new TextToVideoDataProcessor)->textToVideoOptions();
    }

    public function generateTextToVideo(array $aiOptions): TextToVideoResponseContract
    {
        $this->processedData = (new TextToVideoDataProcessor($aiOptions))->prepareData();
        $this->model = data_get($aiOptions['options'], 'model', 'kling-video-v1-pro');
        $provider = (new TextToVideoDataProcessor())->findProviderData(moduleConfig('falai.providers'), $this->model, false);
        $response = new TextToVideoResponse($this->makeCurlRequest(moduleConfig('falai.BASE_URL') . $provider, "POST", $this->processedData));
        return new TextToVideoResponse($this->checkTextToVideoStatus($response->video['request_id']));
    }

    /**
     * Check the status of a text-to-video request.
     * 
     * Make a GET request to the API to retrieve the status of the request.
     * If the status is "IN_QUEUE" or "IN_PROGRESS", make the request again after a short delay.
     * When the status is no longer "IN_QUEUE" or "IN_PROGRESS", return the response.
     * 
     * @param string $id The ID of the text-to-video request.
     * 
     * @return mixed The response of the API request, which will contain the status of the request.
     */
    public function checkTextToVideoStatus(string $id): mixed 
    {
        $baseUrl = moduleConfig('falai.BASE_URL');
        $provider = (new TextToVideoDataProcessor())->findProviderData(moduleConfig('falai.providers'), $this->model);
        $statusUrl = "{$baseUrl}{$provider}/requests/{$id}/status";
        $result = $this->makeCurlRequest($statusUrl, "GET");

        while (isset($result['body']['status']) && ( $result['body']['status'] == 'IN_QUEUE' || $result['body']['status'] == 'IN_PROGRESS')) {
           $result = $this->makeCurlRequest($statusUrl, "GET");
        }

        return $result;
    }

    /**
     * Retrieves the video of a text-to-video request.
     * 
     * Makes a GET request to the API to retrieve the video of the request.
     * The response will contain the video URL.
     * 
     * @param string $id The ID of the text-to-video request.
     * 
     * @return FetchVideoResponseContact The response of the API request, which will contain the video URL.
     */
    public function getTextToVideo(string $id): FetchVideoResponseContact
    {
        $baseUrl = moduleConfig('falai.BASE_URL');
        $provider = (new TextToVideoDataProcessor())->findProviderData(moduleConfig('falai.providers'), $this->model);
        $statusUrl = "{$baseUrl}{$provider}/requests/{$id}";

        return new FetchVideoResponse($this->makeCurlRequest($statusUrl, "GET"));
    }

    public function textToVideoRules(): array
    {
        return (new TextToVideoDataProcessor)->rules();
    }
}
