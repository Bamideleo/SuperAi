<?php

namespace Modules\FalAi\Resources;

class TextToVideoDataProcessor
{
    private $data = [];

    public function __construct(array $aiOptions = [])
    {
        $this->data = $aiOptions;
    }

    public function validationRules()
    {
        return [];
    }

    public function rules()
    {
        $klingAspectRatio = ['16:9', '9:16', '1:1'];
        $klingDuration = [5, 10];

        $lumaDreamsMachineAspectRatio = ['16:9', '9:16', '4:3', '3:4', '21:9', '9:21'];
        $lumaDreamsMachineDuration = [5, 9];
        $lumaDreamsResolution = ['540p', '720p', '1080p'];

        $hunyuanAspectRatio = ['16:9', '9:16'];
        $hunyuanResolution = ['480p', '580p', '720p'];
        $hunyuanNumberFrames = [129 , 85];

        $haiperDuration = [4, 6];

        $klingCameraControl = ['down_back', 'forward_up', 'right_turn_forward', 'left_turn_forward'];

        return [
            'aspect_ratio' => [
                'kling-video-v1-pro' => $klingAspectRatio,
                'kling-video-v1-standard' => $klingAspectRatio,                
                'kling-video-v1.5-pro' => $klingAspectRatio,
                'kling-video-v1.6-standard' => $klingAspectRatio,
                'luma-dream-machine' => $lumaDreamsMachineAspectRatio,
                'luma-dream-machine-ray-2' => $lumaDreamsMachineAspectRatio,
                'luma-dream-machine-ray-2-flash' => $lumaDreamsMachineAspectRatio,
                'hunyuan-video' => $hunyuanAspectRatio
            ],
            'duration' => [
                'kling-video-v1-pro' => $klingDuration,
                'kling-video-v1-standard' => $klingDuration,                
                'kling-video-v1.5-pro' => $klingDuration,
                'kling-video-v1.6-standard' => $klingDuration,
                'luma-dream-machine' => $lumaDreamsMachineDuration,
                'luma-dream-machine-ray-2' => $lumaDreamsMachineDuration,
                'luma-dream-machine-ray-2-flash' => $lumaDreamsMachineDuration,
                'haiper-video-v2' => $haiperDuration,
                'haiper-video-v2.5-fast' => $haiperDuration
            ],
            'camera_control' => [
                'kling-video-v1-pro' => $klingCameraControl,
                'kling-video-v1-standard' => $klingCameraControl,                
                'kling-video-v1.5-pro' => $klingCameraControl,
                'kling-video-v1.6-standard' => $klingCameraControl
            ],
            'resolution' => [
                'luma-dream-machine' => $lumaDreamsResolution,
                'luma-dream-machine-ray-2' => $lumaDreamsResolution,
                'luma-dream-machine-ray-2-flash' => $lumaDreamsResolution,
                'hunyuan-video' => $hunyuanResolution
            ],
            'num_frames' => [
                'hunyuan-video' => $hunyuanNumberFrames
            ],
            'enable_safety_checker' => [
                'hunyuan-video' => ['On', 'Off']
            ], 
            'pro_mode' => [
                'hunyuan-video' => ['On', 'Off']
            ],
            'negative_prompt' => [
                'mochi-v1' => true,
            ],
            'service' => [
                'text-to-video' => [
                    'prompt' => true,
                ],
            ],
        ];
    }

    public function textToVideoOptions(): array
    {
        return [
            [
                'type' => 'checkbox',
                'label' => 'Provider State',
                'name' => 'status',
                'value' => '',
                'visibility' => true
            ],
            [
                'type' => 'text',
                'label' => 'Provider',
                'name' => 'provider',
                'value' => 'FalAi',
                'visibility' => true
            ],
            [
                'type' => 'dropdown',
                'label' => 'Service',
                'name' => 'service',
                'value' => [
                    'text-to-video',
                ],
                'visibility' => true
            ],
            [
                'type' => 'dropdown',
                'label' => 'Models',
                'name' => 'model',
                'value' => [
                    'kling-video-v1-pro', 
                    'kling-video-v1-standard',
                    'kling-video-v1.5-pro',
                    'kling-video-v1.6-standard',
                    'minimax-video-01',
                    'luma-dream-machine',
                    'luma-dream-machine-ray-2',
                    'luma-dream-machine-ray-2-flash',
                    'haiper-video-v2',
                    'haiper-video-v2.5-fast',
                    'mochi-v1',
                    'hunyuan-video'
                ],
                'visibility' => true,
                'required' => true
            ],
            [
                'type' => 'dropdown',
                'label' => 'Aspect Ratio',
                'name' => 'aspect_ratio',
                'value' => [
                    '16:9', '9:16', '1:1', '4:3', '3:4', '21:9', '9:21'
                ],
                'visibility' => true
            ],
            [
                'type' => 'dropdown',
                'label' => 'Duration',
                'name' => 'duration',
                'value' => [
                    4, 5, 6, 9, 10 
                ],
                'visibility' => true
            ],
            [
                'type' => 'dropdown',
                'label' => 'Camera Control',
                'name' => 'camera_control',
                'value' => [ 
                    'down_back', 'forward_up', 'right_turn_forward', 'left_turn_forward'
                 ],
                'visibility' => true
            ],
            [
                'type' => 'dropdown',
                'label' => 'Resolution',
                'name' => 'resolution',
                'value' => [
                    '480p', '540p', '580p', '720p', '1080p'
                ],
                'visibility' => true
            ],
            [
                'type' => 'dropdown',
                'label' => 'Number Of Frames',
                'name' => 'num_frames',
                'value' => [
                    129, 85
                ],
                'visibility' => true
            ],
            [
                'type' => 'dropdown',
                'label' => 'Pro Mode',
                'name' => 'pro_mode',
                'value' => [
                    'On', 'Off'
                ],
                'visibility' => true
            ],
            [
                'type' => 'dropdown',
                'label' => 'Enable Safety Checker',
                'name' => 'enable_safety_checker',
                'value' => [
                    'On', 'Off'
                ],
                'visibility' => true
            ],
            [
                'type' => 'textarea',
                'label' => 'Negative Prompt',
                'name' => 'negative_prompt',
                'value' => __('Keywords of what you do not wish to see in the output image.'),
                'maxlength' => 10000,
                'tooltip_limit' => 150,
                'placeholder' =>  __('Please provide a brief description, it will be displayed on the customer interface. Note that this will be added to the customer panel.'),
                'visibility' => true,
            ],
        ];
    }

    public function customerValidationRules()
    {
        $validationRules['prompt'] = 'required';
        $validationMessage = [
            'prompt.required' => __('Please enter a prompt to generate an video.'),
        ];

        return [
            $validationRules,
            $validationMessage
        ];
    }

    public function prepareData(): array
    {
        return $this->getFilteredData();
    }

    public function getFilteredData(): array
    {

        $model = data_get($this->data['options'], 'model', 'kling-video-v1-pro');

        $commonKeys = [
            'kling' => ['duration', 'aspect_ratio', 'camera_control'],
            'luma'  => ['duration', 'resolution', 'aspect_ratio'],
            'haiper'  => ['duration'],
            'mochi'  => ['duration'],
            'haiper-video-v2'  => ['duration'],
            'haiper-video-v2.5-fast'  => ['duration'],
            'hunyuan'  => ['pro_mode', 'aspect_ratio', 'resolution', 'num_frames'],
        ];
        
        // Define allowed keys per model
        $allowedKeys = [
            'kling-video-v1-pro' => 'kling',
            'kling-video-v1-standard' => 'kling',
            'kling-video-v1.5-pro' => 'kling',
            'kling-video-v1.6-standard' => 'kling',
            'minimax-video-01' => 'minimax',
            'luma-dream-machine' => 'luma',
            'luma-dream-machine-ray-2' => 'luma',
            'luma-dream-machine-ray-2-flash' => 'luma',
            'haiper-video-v2' => 'haiper',
            'haiper-video-v2.5-fast' => 'haiper',
            'mochi-v1' => 'mochi',
            'hunyuan-video' => 'hunyuan',
        ];
        
        // Define static values per model
        $staticValues = [
            'minimax-video-01' => ['prompt_optimizer' => true],
            'haiper-video-v2' => ['prompt_enhancer' => true],
            'haiper-video-v2.5-fast' => ['prompt_enhancer' => true],
        ];
        
        $keys = $commonKeys[$allowedKeys[$model] ?? ''] ?? [];
        
        $filteredData = [];
        foreach ($keys as $key) {
            $value = data_get($this->data, "options.$key");
        
            // Handle duration format based on model type
            if ($key === 'duration' && isset($allowedKeys[$model])) {
                $value = in_array($allowedKeys[$model], ['haiper', 'kling']) ? $value : "{$value}s";
            }

            if ( $key === 'pro_mode' || $key === 'enable_safety_checker' ) {
                $value = $value === 'On' ? true : false;
            }
        
            $filteredData[$key] = $value;
        }
        
        $filteredData['prompt'] = data_get($this->data, 'prompt');

        return array_merge($filteredData, $staticValues[$model] ?? []);
    }


    /**
     * Finds provider data by searching for a specific key within an array.
     *
     * @param array $data An array of data to search through.
     * @param string $searchKey The key to search for within the data array.
     * @param bool $returnKey Optional. If true, returns the key associated with the found value; 
     *                        otherwise, returns the value itself. Defaults to true.
     * @param array $options Optional. Additional options for future extensions.
     * 
     * @return string|null Returns the key or value associated with the search key, or null if not found.
     */

    public function findProviderData(array $data, string $searchKey, bool $returnKey = true, array $options = []): ?string
    {
        foreach ($data as $key => $values) {
            if (array_key_exists($searchKey, $values)) {
                return $returnKey ? $key : $values[$searchKey];
            }
        }
        return null;
    }
}