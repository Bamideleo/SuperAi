<?php

namespace Modules\OpenAI\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\CheckValidFile;
use App\Rules\CheckMediaFile;

class VoiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:191',
            'status' => 'required|in:Active,Inactive',
            'image'  => ['nullable', new CheckValidFile(getFileExtensions(3))],
            'file_id'  => ['nullable', 'array', new CheckMediaFile(getFileExtensions(3))],
        ];
    }
}
