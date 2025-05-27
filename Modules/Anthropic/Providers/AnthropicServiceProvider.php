<?php

namespace Modules\Anthropic\Providers;

use Illuminate\Support\ServiceProvider;
use App\Facades\AiProviderManager;

class AnthropicServiceProvider extends ServiceProvider
{

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        AiProviderManager::add(\Modules\Anthropic\AnthropicProvider::class, 'anthropic');

        \Config::set('aiKeys.ANTHROPIC.API_KEY', env('ANTHROPIC', false));
    }
}
