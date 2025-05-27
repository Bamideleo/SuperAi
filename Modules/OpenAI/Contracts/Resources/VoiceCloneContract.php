<?php

namespace Modules\OpenAI\Contracts\Resources;

use Modules\OpenAI\Contracts\Responses\VoiceClone\VoiceCloneResponseContract;

interface VoiceCloneContract
{
    /**
     * Provide the provider options for Vision Chat settings.
     *
     * @return array
     */
    public function voiceCloneOptions(): array;

    public function voiceClone(array $aiOptions): VoiceCloneResponseContract;
}
