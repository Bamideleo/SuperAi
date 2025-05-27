<?php

namespace Modules\ElevenLabs\Responses\VoiceClone;

use Modules\OpenAI\Contracts\Responses\VoiceClone\VoiceCloneUpdateResponseContract;
use Exception;

class VoiceCloneUpdateResponse implements VoiceCloneUpdateResponseContract
{
    public $content;
    public $response;

    public function __construct($aiResponse)
    {
        $this->response = $aiResponse;
        $this->content();
    }

    public function content(): bool
    {
        if ($this->response['code'] === 200) {
            return true;
        }
        
        if (in_array($this->response['code'], [400, 401, 403, 404, 429, 500])) {
            return false;
        }

        return false;
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
