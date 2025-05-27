<?php

namespace Modules\DeepSeek\Providers;

use Illuminate\Support\ServiceProvider;
use App\Facades\AiProviderManager;

class DeepSeekServiceProvider extends ServiceProvider
{
    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        AiProviderManager::add(\Modules\DeepSeek\DeepSeekProvider::class, 'deepseek');

        \Config::set('aiKeys.DEEPSEEK.API_KEY', env('DEEPSEEK', false));

        add_action('before_provider_api_key_section_retrived', function() {
            echo '<div class="form-group row">
                    <label class="col-sm-3 control-label text-left">' . __(":x API Key", ["x" => __("DeepSeek")]) . '</label>
                    <div class="col-sm-8">
                        <input type="text"
                            value="' . (config("openAI.is_demo") ? "sk-xxxxxxxxxxxxxxx" : config("aiKeys.DEEPSEEK.API_KEY")) . '"
                            class="form-control inputFieldDesign" name="apiKey[deepseek]" id="deepseek_key">
                    </div>
                </div>';
        });
    }
}
