<?php

namespace Modules\FalAi\Providers;

use Illuminate\Support\ServiceProvider;
use AiProviderManager;

class FalAiServiceProvider extends ServiceProvider
{
    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        AiProviderManager::add(\Modules\FalAi\FalAiProvider::class, 'falai');

        \Config::set('aiKeys.FALAI.API_KEY', env('FALAI', false));

        add_action('before_provider_api_key_section_retrived', function() {
            echo '<div class="form-group row">
                    <label class="col-sm-3 control-label text-left">' . __(":x API Key", ["x" => __("FALAI")]) . '</label>
                    <div class="col-sm-8">
                        <input type="text"
                            value="' . (config("openAI.is_demo") ? "sk-xxxxxxxxxxxxxxx" : config("aiKeys.FALAI.API_KEY")) . '"
                            class="form-control inputFieldDesign" name="apiKey[falai]" id="falai_key">
                    </div>
                </div>';
        });
    }
}
