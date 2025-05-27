<?php

namespace Modules\PlagiarismCheck\Traits;

trait PlagiarismCheckApiTrait
{
    public function aiKey()
    {
        $key = moduleConfig('plagiarismcheck.PLAGIARISMCHECK.API_KEY');

        if (empty($key)) {
            throw new \Exception(__("There's an issue with the API key. Please contact the administration for assistance."));
        }

        return $key;
    }

    /**
     * Common Curl Request for Plagiarism check and report
     *
     * @param string $url
     * @param array $requestData
     * @return [type]
     */
    public function commonCurl(string $url, array $requestData = null)
    {
        $ch = curl_init(); 

        $options = array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_SSL_VERIFYHOST => config('openAI.ssl_verify_host'),
            CURLOPT_SSL_VERIFYPEER => config('openAI.ssl_verify_peer'),
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_HTTPHEADER => array(
                "X-API-TOKEN:" . $this->aiKey()
            ),
        );
        if (!empty($requestData)) {
            $options[CURLOPT_CUSTOMREQUEST] = "POST";
            if (isset($requestData['file']) && $requestData['file'] ) {
                $options[CURLOPT_POSTFIELDS] = $requestData;
            } else {
                $options[CURLOPT_POSTFIELDS] =  http_build_query($requestData);
            }
        }
        
        curl_setopt_array($ch, $options);

        $response = curl_exec($ch);
        $err = curl_error($ch);
        curl_close($ch);
        $response = !empty($response) ? $response : $err;
        $response = json_decode($response, true);
        return $response;
    }

    public function generate(string $url)
    {
        return $this->commonCurl($url, $this->processedData);
    }

    public function checkStatus(string $url)
    {
        return $this->commonCurl($url);
    }

    public function getReport(string $url)
    {
        return $this->commonCurl($url);
    }
}
