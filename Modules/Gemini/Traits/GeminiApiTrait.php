<?php

namespace Modules\Gemini\Traits;

use GuzzleHttp\Client;

use GuzzleHttp\Exception\RequestException;
use Modules\Anthropic\Responses\LongArticle\StreamResponse;

trait GeminiApiTrait
{
    /**
     * Retrieve the API key for the Gemini AI module.
     *
     * @return string
     */
    public function aiKey(): string
    {
        $key = config("aiKeys.GEMINI.API_KEY");

        if (empty($key)) {
            throw new \Exception(__("There's an issue with the API key. Please contact the administration for assistance."));
        }

        return $key;
    }

    /**
     * Generate content using the specified AI model.
     *
     * @return array|null
     */
    public function chat(string $model)
    {
        $processData = "models/{$model}:generateContent?key=";
        return $this->commonCurl($processData);
    }

    /**
     * Generate content using the specified AI model.
     *
     */
    public function embeddings(string $model)
    {
        $processData = "models/{$model}:embedContent?key=";
        return $this->commonCurl($processData);
    }

    /**
     * Common cURL function for Gemini API calls.
     *
     * @param string $data The URL path after the base URL.
     *
     * @return array|null The JSON response from the API, or null if an error occurs.
     */
    public function commonCurl(string $data) 
    {
        $curl = curl_init();
        // Set cURL options
        curl_setopt_array($curl, array(
            CURLOPT_URL => moduleConfig('gemini.GEMINI.BASE_URL') . $data . $this->aiKey(),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_SSL_VERIFYHOST => config('openAI.ssl_verify_host'),
            CURLOPT_SSL_VERIFYPEER => config('openAI.ssl_verify_peer'),
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => json_encode($this->processedData),
            CURLOPT_HTTPHEADER => array(
                "Content-Type: application/json",
            ),
        ));
        // Make API request
        $response = curl_exec($curl);
        $err = curl_error($curl);
        // Close cURL session
        curl_close($curl);
        $response = !empty($response) ? $response : $err;
        $response = json_decode($response, false);
        return $response;
    }
    
    /**
     * Method to send a chat message using GuzzleHttp\Client to the Anthropic API.
     *
     * @return StreamResponse|null The response from the API wrapped in a StreamResponse object, or null if an error occurred.
     */
    public function chatStream()
    {
        $model = $this->processedData['model'];
        $client = new Client([
            'base_uri' => moduleConfig('gemini.GEMINI.BASE_URL'),
        ]);
        
        try {
            // Send the POST request
            $response = $client->post( 'models/' . $model . ':streamGenerateContent', [
                'query' => [
                    'alt' => 'sse',
                    'key' => $this->aiKey(),
                ],
                'json' => $this->processedData,
                'headers' => [
                    'Content-Type' => 'application/json',
                ],
                'stream' => true,
            ]);

            return new StreamResponse($response);
        
        } catch (RequestException $e) {
            $response = $e->getResponse();
            $errorMessage = $response
                ? json_decode($response->getBody()->getContents(), true)['error']['message'] ?? __('An error occurred')
                : $e->getMessage();
        
            throw new \Exception($errorMessage);
        }
    }

    /**
     * Repeatedly call the 'chat' method a specified number of times and store the responses in an array.
     *
     * @param array $dataOptions Options for AI processing.
     * @return array An array containing the responses from calling the 'chat' method multiple times.
     */
    public function outlineChat(array $dataOptions): array
    {
        $outlineNumber = data_get($dataOptions, 'number_of_outlines', 1);
        $model = data_get($dataOptions, 'model', 'gemini-1.5-pro');
        $response = [];
        for ($i= 0; $i < $outlineNumber; $i++) {
            $response[] = $this->chat($model);
        }

        return $response;
       
    }
    
    /**
     * Generate audio content using the specified AI model.
     *
     * @param string $model The name of the AI model to use for generating audio content.
     * @return stdClass|null The response from the AI model, or null if an error occurs.
     */
    public function audio(string $model)
    {
        return $this->chat($model);
    }
}
