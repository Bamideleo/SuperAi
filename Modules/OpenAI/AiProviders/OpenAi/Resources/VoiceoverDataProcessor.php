<?php

namespace Modules\OpenAI\AiProviders\OpenAi\Resources;

use Modules\OpenAI\Services\v2\VoiceoverService;

class VoiceoverDataProcessor
{
    private $data = [];

    public function __construct(array $aiOptions = [])
    {
        $this->data = $aiOptions;
    }

    public function voiceoverOptions(): array
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
                'value' => 'openai',
                'visibility' => true
            ],
            [
                'type' => 'dropdown',
                'label' => __('Models'),
                'name' => 'model',
                'value' => [
                    'tts-1',
                    'tts-1-hd',
                    'gpt-4o-mini-tts'
                ],
                'visibility' => true,
                'note' => '<p>The values for the TTS options are as follows:</p> 
                    <ul> 
                        <li><strong>tts-1</strong> represents TTS </li> 
                        <li><strong>tts-1-hd</strong> denotes TTS HD</li> 
                    </ul>',
                'required' => true
            ],
            [
                'type' => 'dropdown',
                'label' => __('Converted To'),
                'name' => 'target_format',
                'value' => [
                    "MP3", "AAC", "Opus", "FLAC"
                ],
                'visibility' => true,
                'required' => true
            ],
            [
                'type' => 'number',
                'label' => __('Conversation Limit'),
                'name' => 'conversation_limit',
                'min' => 1,
                'max' => 6,
                'value' => 2,
                'visibility' => true,
                'required' => true
            ]
        ];
    }

    public function speechDataOptions(): array
    {
        return [
            "model" => $this->data['model'],
            "input" => $this->data['prompt'],
            "voice" => $this->data['voice_name'],
        ];

    }

    public function validationRules(): array
    {
        return [];
    }

    public function speechOptions(): array
    {
        return $this->speechDataOptions();
    }

    public function prepareVoiceoverData(array $originalData, array $data, int $n)
    {
        $originalData['prompt'] = "";
        $originalData['language'] = $data['language'];
        $originalData['voice_name'] = $data['name'];
        $originalData['gender'] = $data['gender'];
        $originalData['voice'] = $data['voice'];

        $originalData['prompt'] .= filteringBadWords($data['prompt']);

        return $originalData;
    }

    /**
     * process Options Data
     * @param mixed $content
     *
     * @return [type]
     */
    public function processOptionsData($content)
    {
        return [
            'language' => $this->processLanguageData($content['language']),
            'gender' => $content['gender'],
            'speed' => $content['speed'] ?? 1,
            'voice' => $content['voice'],
        ];
    }

    /**
     * Process Language Data To Store
     *
     * @param array $lang
     *
     * @return [type]
     */

    public function processLanguageData(string $language)
    {
        $textToSpeechService = new VoiceoverService();
        $lang = explode('-', $language);
        return $lang ? $textToSpeechService->languages($lang[0]) : $language;
    }

    /**
     * prepare file
     * @return [type]
     */
    public function prepareFile($data, $targetFormat)
    {
        $data = base64_decode($data);
        (new VoiceoverService)->uploadPath();

        $clientExtension = strtolower($targetFormat);
        $fileName = md5(uniqid()) . "." . $clientExtension;
        $destinationFolder = 'public' . DIRECTORY_SEPARATOR . 'uploads'. DIRECTORY_SEPARATOR . 'googleAudios'. DIRECTORY_SEPARATOR . date('Ymd') . DIRECTORY_SEPARATOR;
        
        if (!isExistFile($destinationFolder)) {
            createDirectory($destinationFolder);
        }

        $filePath = $destinationFolder . $fileName;
        $audioData = $data;

        objectStorage()->put($filePath, $audioData);

        return date('Ymd') . DIRECTORY_SEPARATOR . $fileName;
    }

    /**
     * Retrieve the validation rules for the current data processor.
     * 
     * @return array An array of validation rules.
     */
    public function voiceoverValidationRules()
    {

        $validationRules['data']['model'] = 'required';
        $validationRules['additionalData'][0]['name'] = 'required';
        $validationRules['additionalData'][0]['prompt'] = 'required';
        $validationMessage = [
            'data.model.required' => __('Model is required for generate voiceover.'),
            'additionalData.*.name.required' => __('Actor is required for generate voiceover.'),
            'additionalData.*.prompt.required' => __('Prompt is required for generate voiceover.'),
        ];

        return [
            $validationRules,
            $validationMessage
        ];
    }
}
