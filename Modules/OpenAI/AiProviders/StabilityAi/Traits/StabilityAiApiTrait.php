<?php

namespace Modules\OpenAI\AiProviders\StabilityAi\Traits;
use Illuminate\Http\Response;

use InvalidArgumentException;

trait StabilityAiApiTrait
{
    private $baseUrl = 'https://api.stability.ai';
    private $version = 'v1';

    public function aiKey()
    {
        $apiKey = apiKey('stablediffusion');

        if (empty($apiKey)) {
            throw new \Exception(__("There's an issue with the :x API key. Kindly reach out to the administration for assistance.", ['x' => __('Stability AI')]), Response::HTTP_UNAUTHORIZED);
        }

        return $apiKey;
    }

    /**
    * Generate the appropriate URL based on the engine version.
    *
    * @return string The constructed URL for the requested generation service.
    */
    public function url(): string
    {
        $model = $this->processedData['model'];
        $standardModels = moduleConfig('openai.models.standard');
        $advancedModels = moduleConfig('openai.models.advanced');
        $premiumModels = moduleConfig('openai.models.premium');
        $coreModels = moduleConfig('openai.models.core');

        if (in_array($model, $standardModels)) {
            return "{$this->baseUrl}/{$this->version}/generation/{$model}/{$this->processedData['service']}";
        }

        if (in_array($model, $advancedModels)) {
            return "{$this->baseUrl}/v2beta/stable-image/generate/sd3";
        }

        if (in_array($model, $premiumModels)) {
            return "{$this->baseUrl}/v2beta/stable-image/generate/ultra";
        }

        if (in_array($model, $coreModels)) {
            return "{$this->baseUrl}/v2beta/stable-image/generate/core";
        }
        
        throw new InvalidArgumentException("Invalid model: {$model}");
    }

    public function images()
    {
        $postField = $this->getPostField();

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => $this->url(),
            CURLOPT_POST => true,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 60,
            CURLOPT_SSL_VERIFYHOST => config('openAI.ssl_verify_host'),
            CURLOPT_SSL_VERIFYPEER => config('openAI.ssl_verify_peer'),
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            
            CURLOPT_POSTFIELDS => $postField,
            CURLOPT_HTTPHEADER => array(
                "Content-Type: " . $this->contentType(),
                "accept: application/json",
                "Authorization: Bearer " . $this->aiKey()
            ),
        ));
        
        $image = curl_exec($curl);
        $curlStatusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        curl_close($curl);
        return [
            'code' => $curlStatusCode,
            'body' => $image, 
        ];

    }

    protected function buildPrompt(): string
    {
        return sprintf(
            'Generate an image of %s in the style of %s with %s effects.',
            $this->processedData['prompt'],
            $this->processedData['art_style'],
            $this->processedData['light_effect']
        );
    }
    
    /**
     * Return the content type based on the engine version and service.
     *
     * @return string
     */
    protected function contentType(): string
    {
        if (in_array($this->processedData['model'], moduleConfig('openai.models.standard'))) {
            return $this->processedData['service'] === 'text-to-image' ? 'application/json' :  'multipart/form-data';
        }
        
        return 'multipart/form-data';
    }

    /**
     * Prepare and return the post fields based on the model and service type.
     *
     * @return array|string The post fields for the request.
     */
    public function getPostField(): array|string
    {
        $model = $this->processedData['model'];

        if (in_array($model, moduleConfig('openai.models.standard'))) {
            return $this->getStandardPostField();
        }

        if (in_array($model, moduleConfig('openai.models.advanced'))) {
            return $this->getAdvancedPostField();
        }

        if (in_array($model, array_merge(moduleConfig('openai.models.premium'), moduleConfig('openai.models.core')))) {
            return $this->getPremiumOrCorePostField();
        }

        // Return an empty array if no model matches
        return [];
    }

    /**
     * Generate post fields for standard models.
     *
     * @return array|string The post fields as a JSON-encoded string or array.
     */
    private function getStandardPostField(): array|string
    {
        $prompt = $this->buildPrompt();
        $service = $this->processedData['service'];

        $jsonBody = [
            'cfg_scale' => 7,
            'clip_guidance_preset' => 'FAST_BLUE',
            'samples' => (int) $this->processedData['samples'],
            'steps' => 30,
        ];

        if ($service === 'text-to-image') {
            $jsonBody['text_prompts'] = [['text' => $prompt]];
            $jsonBody['height'] = (int) $this->processedData['height'];
            $jsonBody['width'] = (int) $this->processedData['width'];
            return json_encode($jsonBody);
        }

        return array_merge($jsonBody, [
            'text_prompts[0][text]'=> $prompt,
            'text_prompts[0][weight]' => 0.7,
            'init_image_mode' => 'IMAGE_STRENGTH',
            'image_strength' => 0.8,
            'init_image' => $this->processedData['image_file'],
        ]);
    }

    /**
     * Generate post fields for advanced models.
     *
     * @return array The post fields for advanced models.
     */
    private function getAdvancedPostField(): array
    {
        $prompt = $this->buildPrompt();
        $service = $this->processedData['service'];

        $data = [
            'prompt' => $prompt,
            'model' => $this->processedData['model'],
            'mode' => $service,
        ];

        if ($this->processedData['negative_prompt'] !== '')  {
            $data['negative_prompt'] = $this->processedData['negative_prompt'];
        }

        if ($service === 'text-to-image') {
            $data['aspect_ratio'] = $this->processedData['aspect_ratio'];
        } else {
            $data['image'] = $this->processedData['image'];
            $data['strength'] = 0;
        }

        return $data;
    }

    /**
     * Generate post fields for premium or core models.
     *
     * @return array The post fields for premium or core models.
     */
    private function getPremiumOrCorePostField(): array
    {
        $prompt = $this->buildPrompt();
        $model = $this->processedData['model'];

        $data = [
            'prompt' => $prompt,
            'aspect_ratio' => $this->processedData['aspect_ratio'],
        ];

        if ( in_array($model, moduleConfig('openai.models.core')) )  {
            $data['style_preset'] = str_replace(' ', '-', strtolower($this->processedData['art_style']));
        }

        if ($this->processedData['negative_prompt'] !== '')  {
            $data['negative_prompt'] = $this->processedData['negative_prompt'];
        }

        if (!empty($this->processedData['image'])) {
            $data['image'] = $this->processedData['image'];
            $data['strength'] = 0;
        }

        return $data;
    }

    public function makeCurlRequest($url, $method = "POST", $postData = [], $headers = [])
    {
        $curl = curl_init();

        // Set cURL options
        $defaultOptions = [
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_SSL_VERIFYHOST => config('openAI.ssl_verify_host'),
            CURLOPT_SSL_VERIFYPEER => config('openAI.ssl_verify_peer'),
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => $method,
        ];

        if ($method == "POST" && !empty($postData)) {
            $defaultOptions[CURLOPT_POST] = true;
            $defaultOptions[CURLOPT_POSTFIELDS] = $postData;
        }

        $defaultHeaders = [
            "Authorization: Bearer " . $this->aiKey()
        ];

        if ($method == "POST") {
            $defaultHeaders[] = "Content-Type: multipart/form-data";
        } else {
            $defaultHeaders[] = "Accept: application/json";
        }

        $defaultOptions[CURLOPT_HTTPHEADER] = array_merge($defaultHeaders, $headers);

        curl_setopt_array($curl, $defaultOptions);

        // Make API request
        $response = curl_exec($curl);

        $curlStatusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

        // Close cURL session
        curl_close($curl);

        return [
            'code' => $curlStatusCode,
            'body' => json_decode($response, true), 
        ];
    }

}
