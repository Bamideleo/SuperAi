<?php

return [
    'name' => 'OpenAI',

    //Omit Languages for content generate
    'language' => [
        'Bengali' => 'Bengali',
        'Chinese' => 'Chinese',
    ],

    'speech_language' => [
        'Byelorussian' => 'Byelorussian',
        'Bengali' => 'Bengali',
        'Chinese' => 'Chinese',
    ],

    'text_to_speech_language' => [
        'Byelorussian' => 'Byelorussian',
        'Estonian' => 'Estonian'
    ],

    'fixedTemperatureModels' => [
        'o1-mini',
        'o1-preview',
        'o1',
        'o3-mini',
        'o4-mini'
    ],

    "codeLevel" => [
        "Beginner",
    ],

    "codeLanguage" => [
        "PHP",
    ],

    'roleBasedModels' => [
        'gpt-4o-mini' => 'user',
        'gpt-4o' => 'user',
        'gpt-4' => 'user',
        'gpt-3.5-turbo' => 'user',
        'o1-preview' => 'user',
        'o1-mini' => 'user',
        'o1-preview' => 'user',
        'o1' => 'developer',
        'o3-mini' => 'developer',
        'o4-mini' => 'developer',
        'gpt-4.1' => 'developer',
        'gpt-4.1-mini' => 'developer',
        'gpt-4.1-nano' => 'developer',
    ],

    'models' => [
        'standard' => [
            'stable-diffusion-xl-1024-v1-0',
            'stable-diffusion-v1-6',
        ],
        'advanced' => [
            'sd3-large',
            'sd3-large-turbo',
            'sd3-medium',
            'sd3.5-large',
            'sd3.5-large-turbo',
            'sd3.5-medium',
        ],
        'premium' => [
            'sd-ultra',
        ],
        'core' => [
            'sd-core'
        ]
    ],

    // For watch demo 
    'demo_url' => 'https://www.youtube.com/watch?v=qTgPSKKjfVg',

    'voiceover' => apply_filters('modify_voiceover_data', [
        'openai' => [
            'model' => [
                'tts-1' => 'TTS',
                'tts-1-hd' => 'TTS HD'
            ]
        ],
        'google' => [
            'audio_effect' => [
                'wearable-class-device' => 'Smart Watch',
                'handset-class-device' => 'Smartphone', 
                'headphone-class-device' => 'Headphone', 
                'small-bluetooth-speaker-class-device' => 'Bluetooth', 
                'medium-bluetooth-speaker-class-device' => 'Smart Bluetooth', 
                'large-home-entertainment-class-device' => 'Smart TV', 
                'large-automotive-class-device' => 'Car Speaker', 
                'telephony-class-application' => 'Telephone'
            ],
            'speed' => [
                '0.25' => 'Super Slow', 
                '0.50' => 'Slow', 
                '1.00' => 'Default', 
                '2.00' => 'Fast', 
                '4.00' => 'Super Fast'
            ],
            'pitch' => [
                '-20.00' => 'Low', 
                '0.00' => 'Default', 
                '20.00' => 'High'
            ],
            'volume' => [
                '-6.00' => 'Low', 
                '0.00' => 'Default', 
                '6.00' => 'High'
            ],
            'pause' => [
                '0s' => '0s',
                '1s' => '1s',
                '2s' => '2s',
                '3s' => '3s',
                '4s' => '4s',
                '5s' => '5s',
            ]
        ],
    ]),
    'voiceover_providers' => [
        'OpenAi', 'Google'
    ],
    'image_to_video_url' => 'https://api.stability.ai/v2beta/image-to-video',
    'fetch_video_url' => 'https://api.stability.ai/v2beta/image-to-video/result/'
];
