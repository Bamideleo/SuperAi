<?php

namespace Modules\OpenAI\Contracts\Resources;
use Modules\OpenAI\Contracts\Responses\Voiceover\VoiceoverResponseContract;


interface VoiceoverContract
{
    /**
     * Provide the provider options for voiceover settings.
     *
     * @return array
     */
    public function voiceoverOptions(): array;

    /**
     * Generate speech for the voiceover based on the given AI options.
     *
     * @param array $aiOptions The options for generating titles.
     */
    public function generateSpeech(array $aiOptions): VoiceoverResponseContract;
}
