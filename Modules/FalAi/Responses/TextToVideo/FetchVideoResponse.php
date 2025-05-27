<?php 

namespace Modules\FalAi\Responses\TextToVideo;

use Exception;

use Modules\OpenAI\Contracts\Responses\TextToVideo\FetchVideoResponseContact;

class FetchVideoResponse implements FetchVideoResponseContact
{
    public $response;

    public $url;

    public function __construct($aiResponse) 
    {
        $this->response = $aiResponse;
        $this->process();
    }

    /**
     * Set video id.
     *
     * This method returns the video method to getting id.
     *
     */
    public function process()
    {
        if ($this->response['code'] != 200) {
            $message = is_array($this->response['body']['detail']) ? $this->response['body']['detail'][0]['msg'] : $this->response['body']['detail'];
            $messgae = $message ?? __('Something went wrong, please try again.');
            return $this->handleException($message);
        } 
        
        return $this->url();
    }
        
    public function url(): string
    {
        return $this->url = $this->response['body']['video']['url'];
    }

    /**
     * Retrieves the original API response.
     *
     * This method returns the original API response object received during initialization.
     *
     * @return mixed The original API response.
     */
    public function response(): mixed
    {
        return $this->response['body'];
    }

    /**
     * Handles exceptions by throwing a new Exception instance.
     *
     * This method throws a new Exception instance with the provided error message.
     *
     * @param string $message The error message to be included in the exception.
     *
     * @return Exception The thrown Exception instance.
     */
    public function handleException(string $message): Exception
    {
        throw new \Exception($message);
    }
}