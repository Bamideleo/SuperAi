<?php

return [
    'name' => 'FalAi',
    'BASE_URL' => 'https://queue.fal.run/fal-ai/',
    'FALAI' => [
        'API_KEY' => env('FALAI', false)
    ],
    'providers' => [
        'kling-video' => [
            'kling-video-v1-pro' => 'kling-video/v1/pro/text-to-video', 
            'kling-video-v1-standard' => 'kling-video/v1/standard/text-to-video',
            'kling-video-v1.5-pro' => 'kling-video/v1.5/pro/text-to-video',
            'kling-video-v1.6-standard' => 'kling-video/v1.6/standard/text-to-video',
        ],
        'minimax' => [
            'minimax-video-01' => 'minimax/video-01',
        ],
        'luma-dream-machine' => [
            'luma-dream-machine' => 'luma-dream-machine',
            'luma-dream-machine-ray-2' => 'luma-dream-machine/ray-2',
            'luma-dream-machine-ray-2-flash' => 'luma-dream-machine/ray-2/flash',
        ],
        'haiper-video' => [
            'haiper-video-v2' => 'haiper-video/v2',
            'haiper-video-v2.5-fast' => 'haiper-video/v2.5/fast',
        ],
        'mochi-v1' => [
            'mochi-v1' => 'mochi-v1',
        ],
        'hunyuan-video' => [
            'hunyuan-video' => 'hunyuan-video',
        ]
    ]
];
