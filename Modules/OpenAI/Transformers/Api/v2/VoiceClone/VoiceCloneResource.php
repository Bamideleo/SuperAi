<?php

namespace Modules\OpenAI\Transformers\Api\v2\VoiceClone;

use Illuminate\Http\Resources\Json\JsonResource;

class VoiceCloneResource extends JsonResource
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
            'user_id' => $this->parent_id,
            'name' => $this->name,
            'voice_name' => $this->voice_name,
            'language_code' => $this->language_code,
            'gender' => ucfirst($this->gender),
            'file' =>  $this->googleAudioUrl(),
            'providers' => $this->providers,
            'status' => $this->status,
            'type' => $this->type,
            'created_at' => timeToGo($this->created_at, false, 'ago'),
            'updated_at' => timeToGo($this->updated_at, false, 'ago'),
            'meta' => $this->metas->pluck('value', 'key'),
            'edit_route' => route('user.voiceClone.edit', ['id' => techEncrypt($this->id)])
        ];
    }
}
