<?php

namespace Modules\ElevenLabs\Providers;

use Illuminate\Support\ServiceProvider;
use App\Facades\AiProviderManager;

class ElevenLabsServiceProvider extends ServiceProvider
{
    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        AiProviderManager::add(\Modules\ElevenLabs\ElevenLabsProvider::class, 'elevenlabs');

        \Config::set('aiKeys.ELEVENLABS.API_KEY', env('ELEVENLABS', false));

        add_action('before_provider_api_key_section_retrived', function() {
            echo '<div class="form-group row">
                    <label class="col-sm-3 control-label text-left">' . __(":x API Key", ["x" => __("ElevenLabs")]) . '</label>
                    <div class="col-sm-8">
                        <input type="text"
                            value="' . (config("openAI.is_demo") ? "sk-xxxxxxxxxxxxxxx" : config("aiKeys.ELEVENLABS.API_KEY")) . '"
                            class="form-control inputFieldDesign" name="apiKey[elevenlabs]" id="elevenlabs_key">
                    </div>
                </div>';
        });

        add_filter('modify_voiceover_data', function($data) {
            return array_merge($data, [
                'elevenlabs' => [
                    'model' => [
                        "eleven_multilingual_v2" => "Eleven Multilingual V2",
                        "eleven_turbo_v2_5" => "Eleven Turbo V2_5",
                        "eleven_turbo_v2" => "Eleven Turbo V2",
                        "eleven_multilingual_v1" => "Eleven Multilingual V1",
                        "eleven_monolingual_v1" => "Eleven Monolingual V1" 
                    ],
                    'target_format' => [
                        'mp3_22050_32' => 'MP3 at 22.05kHz, 32 kbps',
                        'mp3_44100_32' => 'MP3 at 44.1kHz, 32 kbps',
                        'mp3_44100_64' => 'MP3 at 44.1kHz, 64 kbps',
                        'mp3_44100_96' => 'MP3 at 44.1kHz, 96 kbps',
                        'mp3_44100_128' => 'MP3 at 44.1kHz, 128 kbps',
                        'mp3_44100_192' => 'MP3 at 44.1kHz, 192 kbps',
                        'pcm_16000' => 'PCM at 16kHz',
                        'pcm_22050' => 'PCM at 22.05kHz',
                        'pcm_24000' => 'PCM at 24kHz',
                        'pcm_44100' => 'PCM at 44.1kHz',
                        'ulaw_8000' => 'uLaw at 8kHz'
                    ],
                ]
            ]);
        });

        add_action('before_elevenlabs_addon_deactivation', function() {
            $voices = [
                '9BWtsMINqrJLrRacOk9x',
                'CwhRBWXzGAHq8TQ4Fs17',
                
                'EXAVITQu4vr4xnSDxMaL',
                'FGY2WhTYpPnrIDTdsKH5',
                
                'IKne3meq5aSn9XLyUdCD',
                'JBFqnCBsd6RMkjVDRZzb',
                
                'N2lVS1w4EtoT3dr4eOWO',
                'TX3LPaxmHKxFdv7VOQHJ',

                'XB0fDUnXU5powFXDhCwa',
                'Xb7hH8MSUJpSbSDYk0k2',
                
                'XrExE9yKIg1WjnnlVkGX',
                'bIHbv24MWmeRgasZH58o',

                'cgSgspJ2msm6clMCkdW9',
                'cjVigY5qzO86Huf0OWal',
                
                'iP95p4xoKVk53GoZ742B',
                'nPczCjzI2devNBz1zQrb',

                'onwK4e9ZLuTAKqWW03F9',
                'pFZP5JQG7iQjIQuC4Bku',
                
                'pqHfZKP75CvOlQylNhV4',
            ];
            \Modules\OpenAI\Entities\Voice::whereIn('voice_name', $voices)->delete();
        });
    }
}
