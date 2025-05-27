<?php

namespace Modules\OpenAI\AiProviders\StabilityAi\Resources;

class ImageDataProcessor
{
    private $data = [];

    public function __construct(array $aiOptions = [])
    {
        $this->data = $aiOptions;
    }

    public function rules()
    {
        $aspectRatios = [
            '16:9',
            '1:1',
            '21:9',
            '2:3',
            '3:2',
            '4:5',
            '5:4',
            '9:16',
            '9:21',
        ];

        $artStyle = [
            '3D Model',
            'Analog Film',
            'Anime',
            'Cinematic',
            'Comic Book',
            'Digital Art',
            'Enhance',
            'Fantasy Art',
            'Isometric',
            'Line Art',
            'Low Poly',
            'Modeling Compound',
            'Neon Punk',
            'Origami',
            'Photographic',
            'Pixel Art',
            'Tile Texture',
        ];

        return [
            'variant' => [
                'stable-diffusion-v1-6' => [1, 2, 3],
                'stable-diffusion-xl-1024-v1-0' => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                'sd3-large' => [1],
                'sd3-large-turbo' => [1],
                'sd3-medium' => [1],
                'sd3.5-large' => [1],
                'sd3.5-large-turbo' => [1],
                'sd3.5-medium' => [1],
                'sd-ultra' => [1],
                'sd-core' => [1],
            ],
            'size' => [
                'stable-diffusion-xl-1024-v1-0' => [
                    '1024x1024',
                    '1152x896',
                    '896x1152',
                    '1216x832',
                    '1344x768',
                    '768x1344',
                    '1536x640',
                    '640x1536',
                ],
                'stable-diffusion-v1-6' => [
                    '1024x1024',
                    '1152x896',
                    '896x1152',
                    '1216x832',
                    '1344x768',
                    '768x1344',
                    '1536x640',
                    '640x1536',
                ]
            ],
            'aspect_ratio' => [
                'sd3-large' => $aspectRatios,
                'sd3-large-turbo' => $aspectRatios,
                'sd3-medium' => $aspectRatios,
                'sd3.5-large' => $aspectRatios,
                'sd3.5-large-turbo' => $aspectRatios,
                'sd3.5-medium' => $aspectRatios,
                'sd-ultra' => $aspectRatios,
                'sd-core' => $aspectRatios
            ],
            'art_style' => [
                'stable-diffusion-xl-1024-v1-0' => $artStyle,
                'stable-diffusion-v1-6' => $artStyle,
                'sd3-large' => $artStyle,
                'sd3-large-turbo' => $artStyle,
                'sd3-medium' => $artStyle,
                'sd3.5-large' => $artStyle,
                'sd3.5-large-turbo' => $artStyle,
                'sd3.5-medium' => $artStyle,
                'sd-ultra' => $artStyle,
                'sd-core' => $artStyle,
            ],
            'service' => [
                'text-to-image' => [
                    'prompt' => true,
                    'file' => false,
                    'aspect_ratio' => true,
                    'size' => true,
                    'variant' => true
                ],
                'image-to-image' => [
                    'prompt' => true,
                    'file' => true,
                    'aspect_ratio' => false,
                    'size' => false,
                    'variant' => false
                ],
            ],
            'negative_prompt' => [
                'stable-diffusion-xl-1024-v1-0' => false,
                'stable-diffusion-v1-6' => false,
                'sd3-large' => true,
                'sd3-large-turbo' => false,
                'sd3-medium' => true,
                'sd3.5-large' => true,
                'sd3.5-large-turbo' => true,
                'sd3.5-medium' => true,
                'sd-ultra' => true,
                'sd-core' => true,
            ]
        ];
    }

    public function imageOptions(): array
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
                'value' => 'Stabilityai',
                'visibility' => false
            ],
            [
                'type' => 'dropdown',
                'label' => 'Service',
                'name' => 'service',
                'value' => [
                    'text-to-image',
                    'image-to-image',
                ],
                'default_value' => 'text-to-image',
                'visibility' => true,
                'required' => true
            ],
            [
                'type' => 'dropdown',
                'label' => 'Models',
                'name' => 'model',
                'value' => [
                    'stable-diffusion-xl-1024-v1-0',
                    'stable-diffusion-v1-6',
                    'sd3-large',
                    'sd3-large-turbo',
                    'sd3-medium',
                    'sd3.5-large',
                    'sd3.5-large-turbo',
                    'sd3.5-medium',
                    'sd-ultra',
                    'sd-core'
                ],
                'default_value' => 'stable-diffusion-xl-1024-v1-0',
                'visibility' => true,
                'required' => true
            ],
            [
                'type' => 'dropdown',
                'label' => 'Variant',
                'name' => 'variant',
                'value' => [
                    1, 2, 3
                ],
                'default_value' => 1,
                'visibility' => true,
                "required" => true,
            ],
            [
                'type' => 'dropdown',
                'label' => 'Size',
                'name' => 'size',
                'value' => [
                    '1024x1024',
                    '1152x896',
                    '896x1152',
                    '1216x832',
                    '1344x768',
                    '768x1344',
                    '1536x640',
                    '640x1536',
                ],
                'default_value' => '1024x1024',
                'visibility' => true,
                'required' => true
            ],
            [
                "type" => "dropdown",
                "label" => "Art Style",
                "name" => "art_style",
                "value" => [
                    '3D Model',
                    'Analog Film',
                    'Anime',
                    'Cinematic',
                    'Comic Book',
                    'Digital Art',
                    'Enhance',
                    'Fantasy Art',
                    'Isometric',
                    'Line Art',
                    'Low Poly',
                    'Modeling Compound',
                    'Neon Punk',
                    'Origami',
                    'Photographic',
                    'Pixel Art',
                    'Tile Texture'
                ],
                "default" => "Normal",
                "visibility" => true,
                'required' => true
            ],
            [
                "type" => "dropdown",
                "label" => "Light Effect",
                "name" => "light_effect",
                "value" => [
                    "Normal",
                    "Studio",
                    "Warm",
                    "Cold",
                    "Ambient",
                    "Neon",
                    'Foggy'
                ],
                "default" => "Normal",
                "visibility" => true,
                'required' => true
            ],
            [
                'type' => 'file',
                'label' => 'File',
                'name' => 'file',
                'value' => '',
                'visibility' => true,
                'data-field' => "file"
            ],
            [
                "type" => "dropdown-with-image",
                "label" => "Image Art Style",
                "name" => "image_art_style",
                "value" => [
                    [
                        "label" => "Normal",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\art-style\\normal.jpg",
                    ],
                    [
                        "label" => "3D Model",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\art-style\\3d-animation.png",
                    ],
                    [
                        "label" => "Analog Film",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\art-style\\analog-film.jpg",
                    ],
                    [
                        "label" => "Anime",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\art-style\\anime.png",
                    ],
                    [
                        "label" => "Cinematic",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\art-style\\cinematic.jpg",
                    ],
                    [
                        "label" => "Comic Book",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\art-style\\comic.png", 
                    ],
                    [
                        "label" => "Digital Art",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\art-style\\digital-art.png",
                    ],  
                    [
                        "label" => "Enhance",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\art-style\\enhance.png",
                    ],
                    [
                        "label" => "Fantasy Art",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\art-style\\fantasy.png",
                    ],
                    [
                        "label" => "Isometric",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\art-style\\isometric.jpg",
                    ],
                    [
                        "label" => "Line Art",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\art-style\\line-art.png",
                    ],
                    [
                        "label" => "Low Poly",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\art-style\\low-poly.png",
                    ],
                    [
                        "label" => "Modeling Compound",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\art-style\\modeling-compound.png",
                    ],
                    [
                        "label" => "Neon Punk",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\art-style\\neon-punk.png",
                    ],
                    [
                        "label" => "Origami",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\art-style\\origami.jpg",
                    ],
                    [
                        "label" => "Photographic",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\art-style\\photographic.jpg",
                    ],
                    [
                        "label" => "Pixel Art",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\art-style\\pixel-art.jpg",
                    ],
                    [
                        "label" => "Tile Texture",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\art-style\\tile-texture.jpg",  
                    ],  
                    [
                        "label" => "Water Color",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\art-style\\water-color.png",
                    ]
                ],
                "visibility" => true,
            ],
            [
                'type' => 'dropdown',
                'label' => 'Aspect Ratio',
                'name' => 'aspect_ratio',
                'value' => [
                    '1:1',
                    '16:9',
                    '21:9',
                    '2:3',
                    '3:2',
                    '4:5',
                    '5:4',
                    '9:16',
                    '9:21',
                ],
                'default_value' => '1:1',
                'visibility' => true,
                'required' => true
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

    /**
     * Retrieve the validation rules for the current data processor.
     * 
     * @return array An array of validation rules.
     */
    public function validationRules()
    {
        $validationRules['prompt'] = 'required';
        $validationRules['provider'] = 'required';
        $validationRules['options.service'] = 'required';
        $validationRules['options.model'] = 'required|in:stable-diffusion-xl-1024-v1-0,stable-diffusion-v1-6,sd3-large,sd3-large-turbo,sd3-medium,sd3.5-large,sd3.5-large-turbo,sd3.5-medium,sd-ultra,sd-core';
        $validationRules['file'] = 'nullable|required_if:options.service,image-to-image|file|mimes:jpeg,png,jpg,gif';

        $validationMessage = [
            'provider.required' => __('Provider is required to generate an image.'),
            'options.service.required' => __('Service field is required.'),
            'options.model.required' => __('Model field is required.'),
            'options.model.in' => __('Invalid model. Please select a valid model.'),
            'prompt.required' => __('Prompt field is required.'),
            'file.required_if' => __('The file field is required.'),
            'file.file' => __('The file must be a valid file.'),
            'file.mimes' => __('The file must be a JPEG, PNG, JPG, or GIF.'),
        ];

        return [
            $validationRules,
            $validationMessage,
        ];
    }

    public function imageDataOptions()
    {
        return [
            'model' => data_get($this->data['options'], 'model', 'stable-diffusion-xl-1024-v1-0'),
            "service" => data_get($this->data['options'], 'service', 'text-to-image'),
            "prompt" => $this->data['prompt'],
            "samples" => data_get($this->data['options'], 'variant', 1),
            "height" => (int) isset($this->data['options']['size']) ? explode("x", $this->data['options']['size'])[1] : '1024',
            "width" => (int) isset($this->data['options']['size']) ? explode("x", $this->data['options']['size'])[0] : '1024',
            'art_style' => data_get($this->data['options'],'art_style', '3d-model'),
            'light_effect' => data_get($this->data['options'],'light_effect', 'Normal'),
            "cfg_scale" => 7,
            "steps" => 30,
            "clip_guidance_preset" => 'FAST_BLUE',
            'image_file' => isset($this->data['options']['file']) ? file_get_contents($this->data['options']['file']) : null,
            'aspect_ratio' => data_get($this->data['options'], 'aspect_ratio', '1:1'),
            'image' => $this->prepareFile(),
            'negative_prompt' => data_get($this->data['options'], 'negative_prompt', ''),
        ];
    }

    public function imageData(): array
    {
        return $this->imageDataOptions();
    }

    public function prepareFile()
     {
        $uploadedFile = $this->data['options']['file'] ?? null;

        if (!is_null($uploadedFile)) {
            $originalFileName = $uploadedFile->getClientOriginalName();
            return new \CURLFile($uploadedFile->getRealPath(), $uploadedFile->getMimeType(), $originalFileName);
        }

        return $uploadedFile;
        
     }
}
