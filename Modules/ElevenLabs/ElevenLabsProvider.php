<?php

namespace Modules\ElevenLabs;

use App\Lib\AiProvider;
use Modules\ElevenLabs\Traits\ElevenLabsApiTrait;
use Modules\ElevenLabs\Resources\VoiceCloneDataProcessor;
use Modules\OpenAI\Contracts\Resources\VoiceCloneContract;
use Modules\ElevenLabs\Responses\VoiceClone\VoiceCloneResponse;
use Modules\ElevenLabs\Responses\VoiceClone\VoiceCloneUpdateResponse;
use Modules\OpenAI\Contracts\Responses\VoiceClone\VoiceCloneResponseContract;

use Modules\ElevenLabs\Resources\VoiceoverDataProcessor;
use Modules\OpenAI\Contracts\Resources\VoiceoverContract;
use Modules\ElevenLabs\Responses\Voiceover\VoiceoverResponse;
use Modules\OpenAI\Contracts\Responses\Voiceover\VoiceoverResponseContract;

class ElevenLabsProvider extends AiProvider implements VoiceoverContract, VoiceCloneContract
{
    use ElevenLabsApiTrait;

    /**
     * Holds the processed data after it has been manipulated or transformed.
     * This property is typically used within the context of a class to store
     * data that has been modified or processed in some way.
     *
     * @var array Contains an array of data resulting from processing operations.
     */
    protected $processedData;


    /**
     * Get the description of the AI provider.
     * 
     * This method returns an array that contains the title, description, and
     * image of the AI provider.
     * 
     * @return array The description of the AI provider.
     */
    public function description(): array
    {
        return [
            'title' => 'ElevenLabs',
            'description' => 'ElevenLabs is a cutting-edge voiceover platform renowned for its hyper-realistic AI voices. It boasts an extensive library of voices, including those resembling celebrities, and empowers users to customize the tone, style, and even emotions of the generated speech. This level of control makes elevenlabs a powerful tool for various applications, from creating engaging audio books and podcasts to developing interactive voice assistants and more.',
            'image' => 'Modules/ElevenLabs/Resources/assets/image/elevenlabs.jpg',
        ];
    }
    /**
     * Provides the options for the voiceover feature.
     *
     * The voiceover feature uses the voice cloning service from ElevenLabs. This
     * method returns the options that can be used to configure the voiceover
     * feature.
     *
     * @return array The options for the voiceover feature.
     */

    public function voiceCloneOptions(): array
    {
        return (new VoiceCloneDataProcessor)->voiceCloneOptions();
    }

    /**
     * Creates a new voice clone using the provided AI options.
     *
     * This method processes the provided AI options to generate data required
     * for cloning a voice. It then initiates the cloning process and returns
     * the response containing details of the created voice clone.
     *
     * @param array $aiOptions The AI options used for voice cloning.
     *
     * @return VoiceCloneResponseContract The response containing the voice clone details.
     */

    public function voiceClone(array $aiOptions): VoiceCloneResponseContract
    {
        $this->processedData = (new VoiceCloneDataProcessor($aiOptions))->voiceCloneDataOptions();
        return new VoiceCloneResponse($this->clone());
    }

    /**
     * Uploads a file using the VoiceCloneDataProcessor.
     *
     * This method takes a file and utilizes the VoiceCloneDataProcessor to handle 
     * the file upload process, returning the path of the uploaded file.
     *
     * @param \Illuminate\Http\UploadedFile $file The file to be uploaded.
     * 
     * @return string The path where the uploaded file is stored.
     */

    public function filePath ($file) 
    {
        return (new VoiceCloneDataProcessor())->uploadFile($file);
    }

    /**
     * Provides the options for the voiceover feature.
     *
     * @return array The options for the voiceover feature.
     */
    public function voiceoverOptions(): array
    {
        return (new VoiceoverDataProcessor)->voiceoverOptions();
    }

    /**
     * Generates speech audio based on the provided AI options.
     *
     * @param array $aiOptions The options for generating speech, including data 
     *                         and additional configurations.
     *
     * @return VoiceoverResponseContract The response containing the path to the 
     *                                   generated audio file and processed data.
     *
     * @throws \Exception If an error occurs during speech generation.
     */

    public function generateSpeech(array $aiOptions): VoiceoverResponseContract
    {
        $speechData = $aiOptions;
        unset($speechData['data']['additionalData']);

        $audio = "";
        $processData = [];
        foreach ($aiOptions['data']['additionalData'] as $key => $data) {

            $processData = (new VoiceoverDataProcessor)->prepareVoiceoverData($speechData['data'], $data, $key);
            $this->processedData = (new VoiceoverDataProcessor($processData))->speechOptions();

            $result = $this->speech($data['name']);

            if ($result['code'] != 200) {
                $res = json_decode($result['body'], true);
                throw new \Exception($res['detail']['message']);
            }

            $audio .= $result['body'];
        }

        $audioPath = (new VoiceoverDataProcessor())->prepareFile($audio, $speechData['data']['target_format']);
        return new VoiceoverResponse([
            'audioPath' => $audioPath,
            'processData' => $processData
        ]);
    }

    /**
     * Processes the options data using the VoiceoverDataProcessor.
     *
     * This method delegates the processing of the provided content array
     * to the VoiceoverDataProcessor's processOptionsData method.
     *
     * @param array $content The options data to be processed.
     * @return array The processed options data.
     */
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
        $processorClass = "Modules\\ElevenLabs\\Resources\\" . $processor;

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
    public function getCustomerValidationRules(string $processor): array
    {
        $processorClass = "Modules\\ElevenLabs\\Resources\\" . $processor;

        if (class_exists($processorClass)) {
            return (new $processorClass())->voiceCloneCustomerValidationRules();
        }

        return [];
    }

    /**
     * Get the validation rules for a specific voiceover processor.
     * 
     * @param string $processor The name of the data processor class.
     * 
     * @return array Validation rules for the processor.
     */
    public function voiceoverValidationRules(string $processor): array
    {
        $processorClass = "Modules\\ElevenLabs\\Resources\\" . $processor;

        if (class_exists($processorClass)) {
            return (new $processorClass())->voiceoverValidationRules();
        }

        return [];
    }

    /**
     * Updates an existing voice clone.
     *
     * @param array $aiOptions The voice clone options.
     *
     * @return VoiceCloneUpdateResponse The API response or error details.
     */
    public function updateVoice(array $aiOptions)
    {
        $this->processedData = (new VoiceCloneDataProcessor($aiOptions))->processVoiceCloneData();
        return new VoiceCloneUpdateResponse($this->editVoice($aiOptions['voice_name']));
    }

    /**
     * Deletes an existing voice clone.
     *
     * @param array $aiOptions The voice clone options containing the voice name.
     *
     * @return VoiceCloneUpdateResponse The API response or error details.
     */
    public function deleteVoice(array $aiOptions)
    {
        return new VoiceCloneUpdateResponse($this->destroyVoice($aiOptions['voice_name']));
    }
}
