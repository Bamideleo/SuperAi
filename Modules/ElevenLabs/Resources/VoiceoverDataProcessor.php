<?php

namespace Modules\ElevenLabs\Resources;

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
                'value' => 'ElevensLab',
                'visibility' => true
            ],
            [
                'type' => 'dropdown',
                'label' => __('Models'),
                'name' => 'model',
                'value' => [
                   "eleven_multilingual_v2", "eleven_turbo_v2_5", "eleven_turbo_v2", "eleven_multilingual_v1", "eleven_monolingual_v1"
                ],
                'visibility' => true,
                'note' => '<p>The available voice models are as follows:</p> 
                <ul> 
                    <li><strong>eleven_multilingual_v2</strong> refers to Eleven Multilingual V2</li> 
                    <li><strong>eleven_turbo_v2_5</strong> represents Eleven Turbo V2_5</li> 
                    <li><strong>eleven_turbo_v2</strong> indicates Eleven Turbo V2</li> 
                    <li><strong>eleven_multilingual_v1</strong> denotes Eleven Multilingual V1</li> 
                    <li><strong>eleven_monolingual_v1</strong> signifies Eleven Monolingual V1</li> 
                </ul>'
            ],
            [
                'type' => 'dropdown',
                'label' => __('Converted To'),
                'name' => 'target_format',
                'value' => [
                    'mp3_22050_32', 'mp3_44100_32', 'mp3_44100_64', 'mp3_44100_96', 'mp3_44100_128', 'mp3_44100_192', 'pcm_16000', 'pcm_22050', 'pcm_24000', 'pcm_44100', 'ulaw_8000'
                ],
                'default_value' => 'mp3_44100_128',
                'visibility' => true,
                'note' => '<p>The available audio formats are as follows:</p> 
                <ul> 
                    <li><strong>mp3_22050_32</strong> refers to MP3 at 22.05kHz, 32 kbps</li> 
                    <li><strong>mp3_44100_32</strong> represents MP3 at 44.1kHz, 32 kbps</li> 
                    <li><strong>mp3_44100_64</strong> indicates MP3 at 44.1kHz, 64 kbps</li> 
                    <li><strong>mp3_44100_96</strong> denotes MP3 at 44.1kHz, 96 kbps</li> 
                    <li><strong>mp3_44100_128</strong> signifies MP3 at 44.1kHz, 128 kbps</li> 
                    <li><strong>mp3_44100_192</strong> represents MP3 at 44.1kHz, 192 kbps</li> 
                    <li><strong>pcm_16000</strong> refers to PCM at 16kHz</li> 
                    <li><strong>pcm_22050</strong> indicates PCM at 22.05kHz</li> 
                    <li><strong>pcm_24000</strong> denotes PCM at 24kHz</li> 
                    <li><strong>pcm_44100</strong> signifies PCM at 44.1kHz</li> 
                    <li><strong>ulaw_8000</strong> refers to uLaw at 8kHz</li> 
                </ul>'
            ],
            [
                'type' => 'dropdown',
                'label' => __('Stability'),
                'name' => 'stability',
                'value' => [
                    '0.0', '0.2', '0.4', '0.6', '0.8', '1.0'
                ],
                'default_value' => '0.0',
                'tooltip' => __('Increasing stability will make the voice more consistent between re-generations, but it can also make it sounds a bit monotone. On longer text fragments we recommend lowering this value.'),
                'visibility' => true
            ],
            [
                'type' => 'dropdown',
                'label' => __('Similarity Boost'),
                'name' => 'similarity_boost',
                'value' => [
                    '0.0', '0.2', '0.4', '0.6', '0.8', '1.0'
                ],
                'default_value' => '0.0',
                'tooltip' => __('High enhancement improves voice clarity and enhances speaker similarity. However, setting it too high may introduce artifacts. Adjust this setting to achieve the best results.'),
                'visibility' => true
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
            ],
        ];
    }

    public function speechDataOptions(): array
    {
        return [
            'text' => $this->data['prompt'],
            'model_id' => $this->data['model'],
            'voice_settings' => [
                'stability' => $this->data['stability'],
                'similarity_boost' => $this->data['similarity_boost']
            ],
            'target_format' => $this->data['target_format']
        ];

    }

    public function speechOptions(): array
    {
        return $this->speechDataOptions();
    }

    public function prepareVoiceoverData(array $originalData, array $data, int $n)
    {
        $originalData['prompt'] = "";

        $originalData['prompt'] .= "'" . filteringBadWords($data['prompt']);
        $originalData['voice_name'] = $data['name'];
        $originalData['gender'] = $data['gender'];
        $originalData['voice'] = $data['voice'];
        $originalData['language'] = $data['language'];
        
        return $originalData;
    }

    /**
     * Process options data
     *
     * @param array $content
     * @return array
     */
    public function processOptionsData(array $data): array
    {
        return [
            'language' => $this->processLanguageData($data['language']),
            'stability' => $data['stability'],
            'similarity_boost' => $data['similarity_boost'],
            'gender' => $data['gender'],
            'voice' => $data['voice'],
        ];
    }

    /**
     * prepare file
     * @return [type]
     */
    public function prepareFile($data, $targetFormat)
    {
        $extension = $this->format($targetFormat);
        (new VoiceoverService)->uploadPath();
 
        $clientExtension = strtolower($extension);
        $fileName = md5(uniqid()) . "." . $clientExtension;
        $destinationFolder = 'public' . DIRECTORY_SEPARATOR . 'uploads'. DIRECTORY_SEPARATOR . 'googleAudios'. DIRECTORY_SEPARATOR . date('Ymd') . DIRECTORY_SEPARATOR;
        
        if (!isExistFile($destinationFolder)) {
            createDirectory($destinationFolder);
        }

        $filePath = $destinationFolder . $fileName;

        objectStorage()->put($filePath, $data);

        return date('Ymd') . DIRECTORY_SEPARATOR . $fileName;
    }

    /**
     * Retrieve the validation rules for the current data processor.
     * 
     * @return array An array of validation rules.
     */
    public function voiceoverValidationRules()
    {
       return [];
    }

    public function validationRules()
    {
        return [];
    }

    public function format($targetFormat)
    {
        $parts = explode('_', $targetFormat);
        return $parts[0] ?? 'mp3';
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
}
