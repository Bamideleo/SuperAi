<?php

namespace Modules\OpenAI\Services\ActorImport;

use Illuminate\Support\Facades\File;
use ReflectionClass;
use Modules\OpenAI\Contracts\Resources\VoiceoverActorImportContract;

class ProviderDiscovery
{
    public static function getProviders(): array
    {
        $providers = [];
        $addons = \Modules\Addons\Entities\Addon::all();
        $addons = array_filter($addons, function ($addon) {
            return $addon->get('voiceover') && $addon->isEnabled();
        });

        $baseNamespace = 'Modules'; // Base namespace for modules
        foreach ($addons as $module) {  
            $moduleName = $module->getName();
            $namespace = "{$baseNamespace}\\{$moduleName}\\Services\\ActorImport";
            $directory = $module->getPath() . '/Services/ActorImport';


            if (is_dir($directory)) {
                $files = File::allFiles($directory);

                foreach ($files as $file) {
                    $class = $namespace . '\\' . $file->getFilenameWithoutExtension();

                    if (class_exists($class)) {
                        $reflection = new ReflectionClass($class);

                        // Check if the class implements the VoiceProviderInterface
                        if ($reflection->implementsInterface(VoiceoverActorImportContract::class) && !$reflection->isAbstract()) {
                            $providers[] = [
                                'class' => $class,
                                'name' =>  $reflection->getShortName(), // Example: 'OpenAIProvider'
                                'display_name' => self::formatProviderName($reflection->getShortName()), // Example: 'OpenAI'
                            ];
                        }
                    }
                }
            }
        }

        return $providers;
    }

    private static function formatProviderName(string $className): string
    {
        // Strip 'Provider' suffix and format nicely (e.g., 'OpenAIProvider' -> 'OpenAI')
        return str_replace('Provider', '', $className);
    }
}
