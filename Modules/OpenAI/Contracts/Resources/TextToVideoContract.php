<?php

namespace Modules\OpenAI\Contracts\Resources;

interface TextToVideoContract
{
    /**
     * Provide the provider options for Text To Video settings.
     *
     * @return array
     */
    public function textToVideoOptions(): array;
    

    public function textToVideoRules(): array;
    
    /**
     * Generate video details based on provided text.
     *
     * @param array $aiOptions
     */
    public function generateTextToVideo(array $aiOptions): mixed;
}
