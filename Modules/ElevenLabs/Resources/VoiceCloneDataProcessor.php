<?php

namespace Modules\ElevenLabs\Resources;

use Modules\OpenAI\Services\v2\VoiceoverService;

class VoiceCloneDataProcessor
{
    private $data = [];

    public function __construct(array $aiOptions = [])
    {
        $this->data = $aiOptions;
    }

    public function voiceCloneOptions(): array
    {
        return [
            [
                'type' => 'checkbox',
                'label' => __('Provider State'),
                'name' => 'status',
                'value' => '',
                'visibility' => true
            ],
            [
                'type' => 'text',
                'label' => __('Provider'),
                'name' => 'provider',
                'value' => 'ElevensLab',
                'visibility' => true
            ],
            [
                'type' => 'dropdown',
                'label' => __('Remove Background Noise'),
                'name' => 'remove_background_noise',
                'value' => [
                   "True", "False"
                ],
                'visibility' => true
            ],
            [
                'type' => 'textarea',
                'label' => __('Description'),
                'name' => 'description',
                'tooltip_limit' => 150,
                'maxlength' => 500,
                'value' => __('How would you like to describe the voice, for example: "A warm and soothing female voice with an American accent, perfect for storytelling."'),
                'placeholder' =>  __('Please provide a brief description for the placeholder to be displayed on the customer interface. Note that this will be added to the customer panel.'),
                'visibility' => true,
                'required' => true
            ],
        ];
    }

    /**
     * Retrieve the data options for the voice clone feature.
     *
     * @return array The data options for the voice clone feature.
     */
    public function voiceCloneDataOptions(): array
    {
        return [
            'name' => $this->data['name'],
            'files' => $this->prepareFile(),
        ];

    }

    /**
     * Provides the options for creating a new voice clone.
     *
     * @return array The options for creating a new voice clone.
     */
    public function cloneOptions(): array
    {
        return $this->voiceCloneDataOptions();
    }

    /**
     * Prepares a file for upload.
     *
     * If the file is provided in the options, it will be prepared for upload.
     * Otherwise, the function will return null.
     *
     * @return \CURLFile|null The prepared `\CURLFile` instance, ready for use in a cURL request.
     */
    public function prepareFile()
    {
        $uploadedFile = $this->data['file'] ?? null;
        if (!is_null($uploadedFile)) {
            return new \CURLFile($uploadedFile);
        }

        return $uploadedFile;
    
    }

    /**
     * Uploads a file and returns the path of the uploaded file.
     *
     * @param \Illuminate\Http\UploadedFile $data The file to be uploaded.
     *
     * @return string The path of the uploaded file.
     */
    public function uploadFile($data)
    {
        $fileName = md5(uniqid()) . "." . strtolower($data->getClientOriginalExtension());
        $destinationFolder = 'public' . DIRECTORY_SEPARATOR . 'uploads'. DIRECTORY_SEPARATOR . 'googleAudios'. DIRECTORY_SEPARATOR . date('Ymd');
        
        if (!isExistFile($destinationFolder)) {
            createDirectory($destinationFolder);
        }

        $filePath = $destinationFolder . DIRECTORY_SEPARATOR . $fileName;

        objectStorage()->put($filePath, file_get_contents($data->getRealPath()));

        return date('Ymd') . DIRECTORY_SEPARATOR . $fileName;
    }

    /**
     * Retrieve the validation rules for the current data processor.
     * 
     * @return array An array of validation rules.
     */
    public function voiceCloneCustomerValidationRules()
    {
        return [
            [
                'elevenlabs.remove_background_noise' => ['required', 'in:True,False'],
                'elevenlabs.description'=> ['sometimes'],
            ],
            [
                'elevenlabs.remove_background_noise.required' => __('The Remove Background Noise field is required.'),
                'elevenlabs.remove_background_noise.in' => __('The Remove Background Noise field must be one of the following values: True, False'),
            ]
        ];
    }

    /**
     * Retrieve the validation rules for the current data processor.
     * 
     * @return array An empty array, as there are no validation rules for this data processor.
     */
    public function validationRules()
    {
        return [];
    }

    /**
     * Processes the voice clone data.
     * 
     * @return array The processed voice clone data, containing the name.
     */
    public function processVoiceCloneData() 
    {
        return [
            'name' => $this->data['name'],
        ];
    }
}
