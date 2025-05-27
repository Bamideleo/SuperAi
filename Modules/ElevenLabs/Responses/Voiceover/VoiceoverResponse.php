<?php

namespace Modules\ElevenLabs\Responses\Voiceover;

use Modules\OpenAI\Contracts\Responses\Voiceover\VoiceoverResponseContract;
use Exception;

class VoiceoverResponse implements VoiceoverResponseContract
{
    public $content;
    public $response;

    public function __construct($aiResponse)
    {
        $this->response = $aiResponse;
        $this->audio();
        $this->content();
    }

    public function audio(): string
    {
        return $this->response['audioPath'];
    }

    public function content(): mixed
    {
        return $this->response['processData'];
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
