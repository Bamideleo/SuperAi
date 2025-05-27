<?php

namespace Modules\OpenAI\AiProviders\Clipdrop\Resources;

class ImageDataProcessor
{
    private $data = [];

    public function __construct(array $aiOptions = [])
    {
        $this->data = $aiOptions;
    }

    public function rules()
    {
        return [
            'service' => [
                'text-to-image' => [
                    'prompt' => true,
                    'file' => false,
                    'size' => true,
                    'art_style' => true,
                    'light_effect' => true
                ],
                'remove-text' => [
                    'prompt' => false,
                    'file' => true,
                    'size' => true,
                    'art_style' => false,
                    'light_effect' => false
                ],
                'remove-background' => [
                    'prompt' => false,
                    'file' => true,
                    'size' => true,
                    'art_style' => false,
                    'light_effect' => false
                ],
                'replace-background' => [
                    'prompt' => true,
                    'file' => true,
                    'size' => true,
                    'art_style' => true,
                    'light_effect' => true
                ],
                'sketch-to-image' => [
                    'prompt' => true,
                    'file' => true,
                    'size' => true,
                    'art_style' => true,
                    'light_effect' => true
                ],
                'reimagine' => [
                    'prompt' => false,
                    'file' => true,
                    'size' => true,
                    'art_style' => false,
                    'light_effect' => false
                ],
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
                'visibility' => false
            ],
            [
                'type' => 'text',
                'label' => 'Provider',
                'name' => 'provider',
                'value' => 'clipdrop',
                'visibility' => false
            ],
            [
                'type' => 'dropdown',
                'label' => 'Variant',
                'name' => 'variant',
                'value' => [
                    1
                ],
                'default_value' => 1,
                'visibility' => true,
                "required" => true,
            ],
            [
                'type' => 'dropdown',
                'label' => 'Service',
                'name' => 'service',
                'value' => [
                    'text-to-image',
                    'remove-text',
                    'remove-background',
                    'replace-background',
                    'sketch-to-image',
                    'reimagine',
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
                ],
                'default_value' => '1024x1024',
                'visibility' => true,
                "required" => true,
            ],
            [
                "type" => "dropdown",
                "label" => "Art Style",
                "name" => "art_style",
                "value" => [
                    'Normal',
                    '3D Model',
                    'Analog Film',
                    'Anime',
                    'Cinematic',
                    'Comic Book',
                    'Digital Art',
                    'Enhance',
                    'Fantacy Art',
                    'Icometric',
                    'Line Art',
                    'Low Poly',
                    'Modeling Compound',
                    'Neon Punk',
                    'Origami',
                    'Photographic',
                    'Pixel Art',
                    'Tile Texture',
                    'Water Color'
                ],
                "default" => "Normal",
                "visibility" => true,
                "required" => true,
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
                "required" => true,
            ],
            [
                'type' => 'file',
                'label' => 'File',
                'name' => 'file',
                'value' => '',
                'visibility' => true,
                'data-field' => 'file'
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
        ];
    }

    /**
     * Retrieve the validation rules for the current data processor.
     * 
     * @return array An array of validation rules.
     */
    public function validationRules()
    {
        $validationRules['provider'] = 'required';
        $validationRules['options.service'] = 'required';
        $validationRules['prompt'] = 'required_if:options.service,' . implode(',', [
            'text-to-image', 'replace-background', 'sketch-to-image'
        ]);
        $validationRules['file'] = 'nullable|required_if:options.service,' . implode(',', [
            'remove-image', 'remove-text', 'remove-background', 'replace-background', 'sketch-to-image', 'reimagine'
        ]) . '|file|mimes:jpeg,png,jpg,gif';

        $validationMessage = [
            'provider.required' => __('Provider is required to generate an image.'),
            'options.service.required' => __('Service field is required.'),
            'file.required_if' => __('The file field is required.'),
            'prompt.required_if' => __('The prompt field is required.'),
        ];

        return [
            $validationRules,
            $validationMessage,
        ];
    }

    public function imageDataOptions()
    {
        return [
            "service" => data_get($this->data['options'], 'service', 'text-to-image'),
            "prompt" => sprintf(
                        'Generate an image of %s in the style of %s with %s effects.',
                        data_get($this->data, 'prompt', ''),
                        data_get($this->data['options'],'art_style', 'Normal'),
                        data_get($this->data['options'],'light_effect', 'Normal'),
                    ),
            "n" => (int) data_get($this->data['options'], 'variant', 1),
            'image_file' => isset($this->data['options']['file']) ? $this->prepareFile() : null
        ];
    }

    public function imageData(): array
    {
        return $this->imageDataOptions();
    }

    public function prepareFile()
     {
        $uploadedFile = $this->data['options']['file'];
        $originalFileName = $uploadedFile->getClientOriginalName();
        return new \CURLFile($uploadedFile->getRealPath(), $uploadedFile->getMimeType(), $originalFileName);
     }
}
