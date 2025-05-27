<?php

namespace Modules\OpenAI\AiProviders\Google\Resources;

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
                'value' => 'Google',
                'visibility' => true
            ],
            [
                'type' => 'dropdown',
                'label' => __('Languages'),
                'name' => 'language',
                'value' => [
                    'English', 'Bengali', 'French', 'Chinese', 'Arabic', 'Bulgarian', 'Dutch', 'Russian', 'Spanish', 'Portuguese', 'Polish', 'German', 'Sweden'
                ],
                'visibility' => true,
                'note' => '<p>Please note that you can add any language you wish, but a corresponding actor must be available. Without an actor, <br> the language feature may not function properly. Kindly ensure provider support and system availability.</p>
'
            ],
            [
                'type' => 'dropdown',
                'label' => __('Volumes'),
                'name' => 'volume',
                'value' => [
                    '-6.00', '0.00', '6.00'
                ],
                'default_value' => '0.00',
                'visibility' => true,
                'note' => '<p>The value of the levels are as follows:</p>
                    <ul>
                        <li><strong>-6.00</strong> indicates a Low level</li>
                        <li><strong>0.00</strong> represents the Default level</li>
                        <li><strong>6.00</strong> signifies a High level</li>
                    </ul>'
            ],
            [
                'type' => 'dropdown',
                'label' => __('Pitches'),
                'name' => 'pitch',
                'value' => [
                    '-20.00', '0.00', '20.00'
                ],
                'default_value' => '0.00',
                'visibility' => true,
                'note' => '<p>The value of the levels are as follows:</p>
                    <ul>
                        <li><strong>-20.00</strong> indicates a Low level</li>
                        <li><strong>0.00</strong> represents the Default level</li>
                        <li><strong>20.00</strong> signifies a High level</li>
                    </ul>'
            ],
            [
                'type' => 'dropdown',
                'label' => __('Speeds'),
                'name' => 'speed',
                'value' => [
                    '0.25', '0.50', '1.00', '2.00', '4.00'
                ],
                'default_value' => '1.00',
                'visibility' => true,
                'note' => '<p>The value of the levels are as follows:</p>
                    <ul>
                        <li><strong>0.25</strong> indicates Super Slow</li>
                        <li><strong>0.50</strong> represents Slow</li>
                        <li><strong>1.00</strong> signifies Default</li>
                        <li><strong>2.00</strong> represents Fast</li>
                        <li><strong>4.00</strong> represents Super Fast</li>
                    </ul>'
            ],
            [
                'type' => 'dropdown',
                'label' => __('Pauses'),
                'name' => 'pause',
                'value' => [
                    '0s', '1s', '2s', '3s', '4s', "5s"
                ],
                'default_value' => '0s',
                'visibility' => true
            ],
            [
                'type' => 'dropdown',
                'label' => __('Audio Effect'),
                'name' => 'audio_effect',
                'value' => [
                    'wearable-class-device','handset-class-device','headphone-class-device','small-bluetooth-speaker-class-device','medium-bluetooth-speaker-class-device','large-home-entertainment-class-device','large-automotive-class-device','telephony-class-application'
                ],
                'default_value' => 'wearable-class-device',
                'visibility' => true,
                'note' => '<p>The following classifications map device types to their corresponding names:</p>
                    <ul>
                        <li><strong>wearable-class-device</strong> refers to Smart Watch</li>
                        <li><strong>handset-class-device</strong> refers to Smartphone</li>
                        <li><strong>headphone-class-device</strong> refers to Headphone</li>
                        <li><strong>small-bluetooth-speaker-class-device</strong> refers to Bluetooth</li>
                        <li><strong>medium-bluetooth-speaker-class-device</strong> refers to Smart Bluetooth</li>
                        <li><strong>large-home-entertainment-class-device</strong> refers to Smart TV</li>
                        <li><strong>large-automotive-class-device</strong> refers to Car Speaker</li>
                        <li><strong>telephony-class-application</strong> refers to Telephone</li>
                    </ul>
                '
            ],
            [
                'type' => 'dropdown',
                'label' => __('Converted To'),
                'name' => 'target_format',
                'value' => [
                    'MP3', 'WAV', 'OGG'
                ],
                'default_value' => 'MP3',
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
            'input' => [
                "ssml" => "<speak>" . $this->data['prompt'] . "</speak>",
            ],
            'voice' => [
                "languageCode" => $this->data['language'],
                "name" => $this->data['voice_name'],
                "ssmlGender" => $this->data['gender']
            ],
            'audioConfig' => [
                "audioEncoding" => "MP3",
                "speakingRate" => $this->data['speed'],
                "pitch" => $this->data['pitch'],
                "volumeGainDb" => $this->data['volume'],
                "effectsProfileId" => $this->data['audio_effect']
            ],
        ];

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

        if ($n > 0) {
            $originalData['prompt'] = "<break time='" . $originalData['pause'] . "' />";
        }

        $originalData['prompt'] .= filteringBadWords($data['prompt']);

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
            'volume' => $data['volume'],
            'gender' => $data['gender'],
            'pitch' => $data['pitch'],
            'speed' => $data['speed'],
            'pause' => $data['pause'],
            'voice' => $data['voice'],
            'audio_effect' => $data['audio_effect'],
        ];
    }

    /**
     * Process Language Data To Store
     *
     * @param string $language
     *
     * @return [type]
     */

    public function processLanguageData(string $language)
    {
        $textToSpeechService = new VoiceoverService();
        $lang = explode('-', $language);
        return $language == 'yue-HK'
                ? $textToSpeechService->languages('zh')
                : ($lang ? $textToSpeechService->languages($lang[0]) : $language);
    }

    /**
     * prepare file
     * @return [type]
     */
    public function prepareFile($data, $targetFormat)
    {
        (new VoiceoverService)->uploadPath();
 
        $clientExtension = strtolower($targetFormat);
        $fileName = md5(uniqid()) . "." . $clientExtension;
        $destinationFolder = 'public' . DIRECTORY_SEPARATOR . 'uploads'. DIRECTORY_SEPARATOR . 'googleAudios'. DIRECTORY_SEPARATOR . date('Ymd') . DIRECTORY_SEPARATOR;
        
        if (!isExistFile($destinationFolder)) {
            createDirectory($destinationFolder);
        }

        $filePath = $destinationFolder . $fileName;
        $audioData = base64_decode($data);

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
        $validationRules['data']['language'] = 'required';
        $validationRules['data']['volume'] = 'required';
        $validationRules['data']['gender'] = 'required';
        $validationRules['additionalData'][0]['prompt'] = 'required';
        $validationRules['additionalData'][0]['name'] = 'required';

        $validationMessage = [
            'data.language.required' => __('Language is required for generate voiceover.'),
            'additionalData.*.prompt.required' => __('Prompt is required for generate voiceover.'),
            'additionalData.*.name.required' => __('Actor is required for generate voiceover.'),
        ];

        return [
            $validationRules,
            $validationMessage
        ];
    }
}
