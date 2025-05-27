<?php

namespace Modules\ElevenLabs\Traits;
use Illuminate\Http\Response;

trait ElevenLabsApiTrait
{
    /**
     * Gets the API key from the configuration.
     *
     * @return string The API key stored in the configuration.
     */
    public function aiKey()
    {
        $apiKey = config('aiKeys.ELEVENLABS.API_KEY');

        if (empty($apiKey)) {
            throw new \Exception(__("There's an issue with the :x API key. Kindly reach out to the administration for assistance.", ['x' => __('Elevenlabs')]), Response::HTTP_UNAUTHORIZED);
        }

        return $apiKey;
    }

    /**
     * Sends an API request using cURL.
     *
     * @param string $url The endpoint URL.
     * @param string $method The HTTP method (e.g., POST, GET).
     * @param array|string|null $data The request payload.
     * @param string $contentType The content type of the request.
     * @return array The API response or error details.
     */
    private function sendRequest(string $url, string $method, $data = null, string $contentType): array
    {
        $curl = curl_init();

        // Set cURL options
        curl_setopt_array($curl, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_SSL_VERIFYHOST => config('openAI.ssl_verify_host'),
            CURLOPT_SSL_VERIFYPEER => config('openAI.ssl_verify_peer'),
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => $method,
            CURLOPT_POSTFIELDS =>$data,
            CURLOPT_HTTPHEADER => array(
                "Content-Type: " . $contentType,
                "xi-api-key: " . $this->aiKey(),
            ),
        ));

        // Make API request
        $response = curl_exec($curl);
        // Get message according to the api response code
        $curlStatusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

        $err = curl_error($curl);
        // Close cURL session
        curl_close($curl);
        $response = !empty($response) ? $response : $err;

        return [
            'code' => $curlStatusCode,
            'body' => $response, 
        ];
    }

    /**
     * Creates a new voice clone.
     *
     * @return array The API response or error details.
     */
    public function clone(): array
    {
        $url =  moduleConfig('elevenLabs.BASE_URL') . 'voices/add';
        return $this->sendRequest($url, "POST", $this->processedData, 'multipart/form-data');
    }

    /**
     * Performs a text-to-speech operation using the specified voice ID.
     *
     * @param string $voiceID The voice ID.
     * @return array The API response or error details.
     */
    public function speech(string $voiceID): array
    {
        $url =  moduleConfig('elevenLabs.BASE_URL') . 'text-to-speech/' . $voiceID;
        return $this->sendRequest($url, "POST", json_encode($this->processedData), 'application/json');
    }

    /**
     * Edits an existing voice clone.
     *
     * @param string $voiceID The voice ID.
     * @return array The API response or error details.
     */
    public function editVoice(string $voiceID): array
    {
        $url =  moduleConfig('elevenLabs.BASE_URL') . 'voices/' . $voiceID . '/edit';
        return $this->sendRequest($url, "POST", $this->processedData, 'multipart/form-data');
    }

    /**
     * Deletes a voice clone.
     *
     * @param string $voiceID The voice ID.
     * @return array The API response or error details.
     */
    public function destroyVoice(string $voiceID): array
    {
        $url =  moduleConfig('elevenLabs.BASE_URL') . 'voices/' . $voiceID;
        return $this->sendRequest($url, "DELETE", null, 'application/json');
    }
}
