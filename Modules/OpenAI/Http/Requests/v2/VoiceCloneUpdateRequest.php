<?php

namespace Modules\OpenAI\Http\Requests\v2;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\CheckValidFile;

class VoiceCloneUpdateRequest extends FormRequest
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
            'name' => ['required', 'min:3'],
            'gender' => ['required', 'in:Male,Female'],
            'file' => ['nullable', new CheckValidFile(getFileExtensions(3))],
        ];
    }

    /**
     * Custom validation messages
     */
    public function messages()
    {
        return [
            'name.min' => __('The name must be at least :x characters long.', ['x' => 3]),
            'gender.in' => __('Gender must be Male or Female.'),
            'file.required' => __('File is required!'),
        ];
    }
}
