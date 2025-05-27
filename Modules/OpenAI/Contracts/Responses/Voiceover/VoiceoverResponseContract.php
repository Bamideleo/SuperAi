<?php

namespace Modules\OpenAI\Contracts\Responses\Voiceover;


interface VoiceoverResponseContract
{
    /**
     * Get the generated audio's path.
     *
     * @return string audio's path.
     */
    public function audio(): string;

    /**
     * Get the process content.
     *
     * @return string.
     */
    public function content(): mixed;

    /**
     * Get the response content.
     *
     * @return mixed The content of the response.
     */
    public function response(): mixed;

    /**
     * Handle any errors that occurred during the response generation.
     *
     * @throws \Exception If an error occurred during response generation.
     */
    public function handleException(string $message): \Exception;
}