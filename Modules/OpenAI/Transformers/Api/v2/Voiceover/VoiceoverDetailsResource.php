<?php

namespace Modules\OpenAI\Transformers\Api\v2\Voiceover;

use Illuminate\Http\Resources\Json\JsonResource;

class VoiceoverDetailsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'provider' => ucfirst($this->provider),
            'type' => $this->type,
            'view_route' => route('user.voiceoverView', ['id' => techEncrypt($this->id)]),
            'audio_url' => $this->processData($this->file_name),
            'prompt' => trimWords($this->title, 80) ,
            'slug' => $this->slug,
            'created_at' => timeToGo($this->created_at, false, 'ago'),
            'meta' => $this->metas->pluck('value', 'key'),
        ];
    }

    /**
     * Process the file name to generate a new audio URL and update the 'all-image' binding.
     *
     * @param  string  $fileName The name of the file to process.
     * @return string The generated audio URL.
     */
    private function processData(string $fileName): string
    {
        $currentValue = app()->make('all-image') ?? [];

        $newValue = 'public/uploads/googleAudios/' . str_replace('\\', '/', $fileName);

        if (is_array($currentValue)) {
            $currentValue[] = $newValue;
        }

        app()->instance('all-image', $currentValue);

        return objectStorage()->url($newValue);
    }
}
