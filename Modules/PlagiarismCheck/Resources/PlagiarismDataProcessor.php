<?php

namespace Modules\PlagiarismCheck\Resources;

class PlagiarismDataProcessor
{
    public function plagiarismOptions(): array
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
                'value' => 'plagiarismcheck',
                'visibility' => true
            ],
        ];
    }

    /**
     * Curl Request for Plagiarism check
     *
     * @param array $requestData
     * @return [type]
     */
    public function plagiarismCheck(array $requestData)
    {
        return [
            'language' => 'en',
            'text' => filteringBadWords($requestData['text'])
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
