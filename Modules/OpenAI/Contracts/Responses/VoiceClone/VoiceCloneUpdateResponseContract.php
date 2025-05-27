<?php

namespace Modules\OpenAI\Contracts\Responses\VoiceClone;

interface VoiceCloneUpdateResponseContract
{
    /**
     * Get the generated content.
     * 
     */
    public function content(): bool;

    /**
     * Get the response content.
     *
     * @return mixed The content of the response.
     */
    public function response(): mixed;

    /**
     * Handle any errors that occurred during the response generation.
     *
     * @throws ResponseGenerationException If an error occurred during response generation.
     */
    public function handleException(string $message): \Exception;
}
