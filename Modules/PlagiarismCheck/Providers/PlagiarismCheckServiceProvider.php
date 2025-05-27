<?php

namespace Modules\PlagiarismCheck\Providers;

use Illuminate\Support\ServiceProvider;
use App\Facades\AiProviderManager;

class PlagiarismCheckServiceProvider extends ServiceProvider
{
    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        AiProviderManager::add(\Modules\PlagiarismCheck\PlagiarismCheckProvider::class, 'plagiarismCheck');

        add_action('before_provider_api_key_section_retrived', function() {
            echo '<div class="form-group row">
                    <label class="col-sm-3 control-label text-left">' . __("Plagiarism Check API Key") . '</label>
                    <div class="col-sm-8">
                        <input type="text"
                            value="' . (config("openAI.is_demo") ? "sk-xxxxxxxxxxxxxxx" : moduleConfig("plagiarismcheck.PLAGIARISMCHECK.API_KEY")) . '"
                            class="form-control inputFieldDesign" name="apiKey[plagiarismcheck]" id="plagiarismcheck_key">
                    </div>
                </div>';
        });
    }
}
