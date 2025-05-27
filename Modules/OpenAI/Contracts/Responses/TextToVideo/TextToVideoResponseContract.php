<?php

namespace Modules\OpenAI\Contracts\Responses\TextToVideo;

interface TextToVideoResponseContract
{
    /**
     * Retrieves video-related data or performs a video-related action.
     *
     * @return mixed The result of the video operation.
     */
    public function video(): mixed;
    
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
