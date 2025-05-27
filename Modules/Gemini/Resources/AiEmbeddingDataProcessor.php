<?php

namespace Modules\Gemini\Resources;

class AiEmbeddingDataProcessor
{
    private $data = [];

    /**
     * Constructor for the AiEmbeddingDataProcessor class.
     * Initializes the data property with the provided AI options.
     *
     * @param array $aiOptions The AI options to initialize the data property.
     */
    public function __construct(array $aiOptions = [])
    {
        $this->data = $aiOptions;
    }

    /**
     * Returns an array of options for AI Embedding.
     *
     * @return array The array of AI Embedding options.
     */
    public function aiEmbeddingOptions(): array
    {
        return [
            [
                'type' => 'checkbox',
                'label' => 'Provider State',
                'name' => 'status',
                'value' => '',
            ],
            [
                'type' => 'text',
                'label' => 'Provider',
                'name' => 'provider',
                'value' => 'Gemini'
            ],
            [
                'type' => 'dropdown',
                'label' => 'Models',
                'name' => 'model',
                'value' => [
                    'text-embedding-004'
                ],
                'visibility' => true,
                'required' => true
            ],
        ];
    }

    /**
     * Returns an array of AI Embedding data options.
     *
     * @return array The array of AI Embedding data options.
     */
    public  function aiEmbeddingDataOptions(): array
    {
        return [
            'model' => 'models/' . data_get($this->data, 'model', 'text-embedding-004'),
            "content" => [
                "parts" => [
                  [
                    "text" => $this->data['text']
                  ]
                ]
            ]
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
}
