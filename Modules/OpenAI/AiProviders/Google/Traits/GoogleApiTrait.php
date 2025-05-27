<?php

namespace Modules\OpenAI\AiProviders\Google\Traits;
use Illuminate\Http\Response;
trait GoogleApiTrait
{
    /**
     * Get the Google API key
     *
     * @throws \Exception
     * @return string
     */
    public function aiKey()
    {

        $apiKey = apiKey('google');

        if (empty($apiKey)) {
            throw new \Exception(__("There's an issue with the :x API key. Kindly reach out to the administration for assistance.", ['x' => __('Google')]), Response::HTTP_UNAUTHORIZED);
        }

        return $apiKey;
    }
 
    /**
     * Perform a POST request to the Google Text-to-Speech API.
     *
     * @return array The response from the API.
     */

    public function speech()
    {
        $curl = curl_init();

        // Set cURL options
        curl_setopt_array($curl, array(
            CURLOPT_URL => config('openAI.textToSpeechUrl') . "?key=" . $this->aiKey(),
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
        $response = json_decode($response, true);
        return $response;
    }
}