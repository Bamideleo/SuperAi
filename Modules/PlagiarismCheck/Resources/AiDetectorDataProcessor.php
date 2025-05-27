<?php

namespace Modules\PlagiarismCheck\Resources;
use App\Rules\CheckPreferenceFile;

class AiDetectorDataProcessor
{
    public function aiDetectorOptions(): array
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
            [
                'type' => 'dropdown',
                'label' => 'Supported File Types',
                'name' => 'file_format',
                'value' => [ 'doc', 'docx', 'pdf', 'txt', 'odt', 'rtf'],
                'visibility' => false
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
     * Customer validation rules for the current data processor.
     * 
     * @return array An array of validation rules.
     */
    public function customerValidation() 
    {
        $databaseValues = \AiProviderManager::databaseOptions('aidetector');
        $validationRules['provider'] = 'required';

        $validationRules['text'] = [
            'required_without:file',
            function ($attribute, $value, $fail) {
                if (request()->has('file')) {
                    $fail(__('You can provide either a description or a file, but not both.'));
                }
            },
        ];

        // Define the allowed mime types from your logic or database
        $defaultMimes = ['doc', 'docx', 'pdf', 'txt', 'odt', 'rtf'];
        $userSelectedMimes = $this->getSpecificValue($databaseValues, 'file_format');

        // Get the intersection of allowed mime types and user-provided mime types
        $allowedMimes = array_intersect($defaultMimes, $userSelectedMimes);

        if (empty($allowedMimes)) {
            $allowedMimes = $defaultMimes; // Fallback to default if intersection is empty
        }

        $validationRules['file'] = [
            'required_without:text',
            'mimes:' . implode(',', $allowedMimes),
            new CheckPreferenceFile('ai_detector'),
            function ($attribute, $value, $fail) {
                if (request()->has('text')) {
                    $fail(__('You can provide either a description or a file, but not both.'));
                }
            },
            
        ];

        $validationMessage = [
            'text.required_without' => __('You must provide either a description or a file.'),
            'file.required_without' => __('You must provide either a description or a file.'),
        ];

        return [
            $validationRules,
            $validationMessage
        ];
    }

    /**
     * Curl Request for Plagiarism check
     *
     * @param array $requestData
     * @return [type]
     */
    public function aiDetectorCheck(array $requestData)
    {
        $postData = [];
    
        if (isset($requestData['file']) && !empty($requestData['file'])) {
            $uploadedFile = request()->file('file');
            $postData['file'] = new \CURLFile(
                $uploadedFile->getRealPath(), // Use getRealPath() to get the absolute path
                $uploadedFile->getClientMimeType(), // Get the MIME type
                $uploadedFile->getClientOriginalName() // Get the original file name
            );
        
        } else {
            $postData['text'] =  filteringBadWords($requestData['text']);
        }

        return $postData;
    }

    /**
     * Retrieves specific values from the given array based on the desired name.
     * 
     * @param array $databaseValues 
     * @param string $desiredName 
     *
     * @return array 
     */
    private function getSpecificValue(array $databaseValues, string $desiredName) {
        $desiredValues = [];

        foreach ($databaseValues['aidetector_plagiarismcheck'] as $item) {
            if (isset($item['name']) && $item['name'] === $desiredName && isset($item['value'])) {
                $desiredValues[] = $item['value'];
            }
        }

        return array_merge(...$desiredValues);
    }
}
