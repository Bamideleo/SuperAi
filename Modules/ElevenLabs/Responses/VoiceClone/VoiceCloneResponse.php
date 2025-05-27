<?php

namespace Modules\ElevenLabs\Responses\VoiceClone;

use Modules\OpenAI\Contracts\Responses\VoiceClone\VoiceCloneResponseContract;
use Exception;

class VoiceCloneResponse implements VoiceCloneResponseContract
{
    public $content;
    public $response;

    public function __construct($aiResponse)
    {
        $this->response = $aiResponse;
        $this->content();
    }

    public function content(): string
    {
        $response = json_decode($this->response['body'], false);

        if ($this->response['code'] === 200) {
            return $response->voice_id;
        }
        
        // Decode the response for error handling
        $message = $response->detail->message ?? __('An unknown error occurred.');

        if (in_array($this->response['code'], [400, 401, 403, 404, 429, 500])) {
            $this->handleException($message);
        }

        // Handle unexpected cases
        $this->handleException( __('Unexpected error occurred with HTTP code: :x', ['x' => $this->response['code']]));

        return '';
    }


    public function response(): mixed
    {
        return $this->response;
    }

    public function handleException(string $message): Exception
    {
        throw new Exception($message);
    }
}
