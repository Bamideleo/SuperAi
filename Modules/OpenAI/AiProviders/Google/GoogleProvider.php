<?php

namespace Modules\OpenAI\AiProviders\Google;

use Modules\OpenAI\AiProviders\Google\Resources\VoiceoverDataProcessor;
use Modules\OpenAI\AiProviders\Google\Traits\GoogleApiTrait;
use Modules\OpenAI\Contracts\Resources\VoiceoverContract;
use Modules\OpenAI\AiProviders\Google\Responses\Voiceover\VoiceoverResponse;
use Modules\OpenAI\Contracts\Responses\Voiceover\VoiceoverResponseContract;

use App\Lib\AiProvider;

class GoogleProvider extends AiProvider implements VoiceoverContract
{
    use GoogleApiTrait;

    /**
     * Holds the processed data after it has been manipulated or transformed.
     * This property is typically used within the context of a class to store
     * data that has been modified or processed in some way.
     *
     * @var array Contains an array of data resulting from processing operations.
     */
    protected $processedData;

    public function description(): array
    {
        return [
            'title' => 'Google',
            'description' => 'OpenAI pioneers AI breakthroughs in chat, image, voice, and text processing. With cutting-edge models, we excel in natural language understanding, image recognition, and voice synthesis, shaping the future of AI.',
            'image' => 'Modules/OpenAI/Resources/assets/image/google.png',
        ];
    }

    public function voiceoverOptions(): array
    {
        return (new VoiceoverDataProcessor)->voiceoverOptions();
    }

    public function generateSpeech(array $aiOptions): VoiceoverResponseContract
    {
        $speechData = $aiOptions;
        unset($speechData['data']['additionalData']);

        $audio = "";
        $processData = [];
        foreach ($aiOptions['data']['additionalData'] as $key => $data) {

            $processData = (new VoiceoverDataProcessor)->prepareVoiceoverData($speechData['data'], $data, $key);

            $this->processedData = (new VoiceoverDataProcessor($processData))->speechOptions();
            $result = $this->speech();

            if (isset($result['error'])) {
                throw new \Exception($result['error']['message']);
            }

            $audio .= $result['audioContent'];
        }

        $audioPath = (new VoiceoverDataProcessor())->prepareFile($audio, $speechData['data']['target_format']);
        return new VoiceoverResponse([
            'audioPath' => $audioPath,
            'processData' => $processData
        ]);
    }

    public function processOptionsData(array $content)
    {
        return (new VoiceoverDataProcessor())->processOptionsData($content);
    }

    /**
     * Get the validation rules for a specific processor.
     * 
     * @param string $processor The name of the data processor class.
     * 
     * @return array Validation rules for the processor.
     */
    public function getValidationRules(string $processor): array
    {
        $processorClass = "Modules\\OpenAI\\AiProviders\\OpenAi\\Resources" . $processor;

        if (class_exists($processorClass)) {
            return (new $processorClass())->validationRules();
        }

        return [];
    }

        /**
     * Get the validation rules for a specific processor.
     * 
     * @param string $processor The name of the data processor class.
     * 
     * @return array Validation rules for the processor.
     */
    public function voiceoverValidationRules(string $processor): array
    {
        $processorClass = "Modules\\OpenAI\\AiProviders\\Google\\Resources\\" . $processor;

        if (class_exists($processorClass)) {
            return (new $processorClass())->voiceoverValidationRules();
        }

        return [];
    }
}
