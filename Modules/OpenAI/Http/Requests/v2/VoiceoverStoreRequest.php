<?php

namespace Modules\OpenAI\Http\Requests\v2;

use Illuminate\Foundation\Http\FormRequest;

class VoiceoverStoreRequest extends FormRequest
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
            'data.additionalData.*.prompt' => 'required|string',
            'data.additionalData.*.name' => 'required|string',
        ];
    }

    /**
     * Custom validation messages
     */
    public function messages(): array
    {
        return [
            'data.additionalData.*.prompt.required' => __('The text field is required.'),
            'data.additionalData.*.name.required' => __('The Voice actor is required. Kindly reach out to the administration for further assistance.'),
        ];
    }

}
