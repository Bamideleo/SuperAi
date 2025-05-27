<?php

namespace Modules\OpenAI\Services\ActorImport;

use InvalidArgumentException;

class VoiceoverActorProviderFactory
{
    public static function make(string | null $provider)
    {
        $providers = ProviderDiscovery::getProviders();

        $providerClass = array_column($providers, 'class', 'display_name')[$provider] ?? null;

        if (!$providerClass || empty($provider)) {
            throw new InvalidArgumentException(__("Unsupported provider"));
        }

        return new $providerClass();
       
    }
}

