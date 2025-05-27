<?php

namespace Modules\Gemini\Resources;

use App\Models\Language;

class SpeechToTextDataProcessor
{
    private $data = [];

    /**
     * Class constructor.
     *
     * Initializes the class with the provided AI options.
     *
     * @param array $aiOptions
     */
    public function __construct(array $aiOptions = [])
    {
        $this->data = $aiOptions;
    }

    public function speechToTextOptions(): array
    {
        return [
            [
                'type' => 'checkbox',
                'label' => 'Provider State',
                'name' => 'status',
                'value' => '',
                'visibility' => true
            ],
            [
                'type' => 'text',
                'label' => 'Provider',
                'name' => 'provider',
                'value' => 'Gemini',
                'visibility' => true
            ],
            [
                'type' => 'dropdown',
                'label' => 'Models',
                'name' => 'model',
                'value' => [
                    'gemini-2.0-flash',
                    'gemini-2.0-flash-lite',
                    'gemini-1.5-pro',
                    'gemini-1.5-flash',
                ],
                'visibility' => true
            ],
            [
                'type' => 'dropdown',
                'label' => 'Word Filters',
                'name' => 'word_filter',
                'value' => [
                    'Active', 'Inactive'
                ],
                'visibility' => true
            ],
            [
                'type' => 'dropdown',
                'label' => 'Languages',
                'name' => 'language',
                'value' => $this->languages(),
                'visibility' => true
            ],
            [
                'type' => 'dropdown',
                'label' => 'Temperature',
                'name' => 'temperature',
                'value' => [
                    0, 0.2, 0.5, 0.8, 1
                ],
                'default_value' => 0,
                'tooltip' => __('The temperature ranges from 0 to 1. Higher values, such as 0.8, make the output more random, while lower values, like 0.2, produce more focused and deterministic results. If the temperature is set to 0, the model will automatically adjust it using log probability until specific thresholds are reached.'),
                'visibility' => true
            ],
        ];
    }

    /**
     * Retrieve the validation rules for the current data processor.
     * 
     * @return array An array of validation rules.
     */
    public function validationRules()
    {
        return [];
    }

    /**
     * Retrieves the list of valid languages for speech generation.
     *
     * @return array 
     */
    public function languages(): array
    {
        return Language::where(['status' => 'Active'])->pluck('name')->toArray();
    }

    /**
     * Prepares the options for audio data processing.
     *
     * @return array
     */
    public function audioDataOptions(): array
    {
        $file = $this->data['file'];
        return [
            'duration' => $this->data['duration'],
            'model' => data_get($this->data, 'model', 'gemini-1.5-flash'),
            "contents" => [
                "parts" => [
                    [
                        'text' => "Please describe this audio file in " . $this->data['language'] . ' language.'
                    ],
                    [
                        'inline_data' => [
                            'mime_type' => $file->getMimeType(),
                            'data' => base64_encode(file_get_contents($file->getRealPath())),
                        ]
                    ]
                ]
            ],
            'generationConfig' => [
                "temperature" => data_get($this->data, 'temperature', 1),
            ]
        ];
    }
}
