<?php

namespace Modules\DeepSeek\Traits;

use GuzzleHttp\Client;
use Illuminate\Http\Response;

use Modules\DeepSeek\Responses\StreamResponse;

trait DeepSeekApiTrait
{
    /**
     * The URL for the DeepSeek API messages endpoint.
     */
    private $url = 'https://api.deepseek.com/';

    public function aiKey()
    {
        $apiKey = config('aiKeys.DEEPSEEK.API_KEY');

        if (empty($apiKey)) {
            throw new \Exception(__("There's an issue with the :x API key. Kindly reach out to the administration for assistance.", ['x' => __('DeepSeek')]), Response::HTTP_UNAUTHORIZED);
        }

        return $apiKey;
    }

    /**
     * Method to send a chat message using cURL to the Anthropic API.
     *
     * @return array|null The response from the API in JSON format, or null if an error occurred.
     */
    public function chat()
    {
        $curl = curl_init();

        // Set cURL options
        curl_setopt_array($curl, array(
            CURLOPT_URL => $this->url . 'chat/completions',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 60,
            CURLOPT_CONNECTTIMEOUT => 10, // Limit connection time
            CURLOPT_SSL_VERIFYHOST => config('openAI.ssl_verify_host'),
            CURLOPT_SSL_VERIFYPEER => config('openAI.ssl_verify_peer'),
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => json_encode($this->processedData),
            CURLOPT_HTTPHEADER => array(
                "Content-Type: application/json",
                "Authorization: Bearer " . $this->aiKey()
            ),
        ));

        // Make API request
        $response = curl_exec($curl);
        $err = curl_error($curl);

        $curlStatusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

        // Close cURL session
        curl_close($curl);
        $response = !empty($response) ? $response : $err;

        return [
            'code' => $curlStatusCode,
            'body' => json_decode($response, true), 
        ];
    }

    /**
     * Method to repeatedly call the 'chat' method a specified number of times and store the responses in an array.
     *
     * @param int $outlineNumber The number of times to call the 'chat' method.
     * @return array An array containing the responses from calling the 'chat' method multiple times.
     */
    public function outlineChat(int $outlineNumber): array
    {
        $response = [];
        for ($i= 0; $i < $outlineNumber; $i++) {
            $response[] = $this->chat();
        }

        return $response;
       
    }

    /**
     * Method to send a chat message using GuzzleHttp\Client to the Anthropic API.
     *
     * @return StreamResponse|null The response from the API wrapped in a StreamResponse object, or null if an error occurred.
     */
    public function chatStream()
    {
        $client = new Client();
        try {
            // Send the POST request
            $response = $client->request('POST', $this->url . 'chat/completions' , [
                'json' => $this->processedData,
                'headers' => [
                    'Content-Type' => 'application/json',
                    'Accept' => 'application/json',
                    'Authorization' => 'Bearer ' . $this->aiKey()
                ],
                'stream' => true
            ]);

            return new StreamResponse($response);

        } catch (\GuzzleHttp\Exception\RequestException $e) {
            // If an error occurs during the request, catch the exception and handle it
            if (strpos($e->getMessage(), '401 Unauthorized') !== false) {
                throw new \Exception(__("There's an issue with your API key."));
            }

            $response = $e->getResponse();

            if ($response) {
                $body = $response->getBody()->getContents();
                $errorData = json_decode($body, true);

                if (isset($errorData['error']['message'])) {
                    throw new \Exception($errorData['error']['message']);
                }
                throw new \Exception($errorData['error']);

            } else {
                throw new \Exception($e->getMessage());
            }
        }
    }
}