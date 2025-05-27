<?php

namespace Modules\Gemini\Resources;

use Str;

class LongArticleDataProcessor
{
    private $data = [];

    private $defaultModel = "gemini-1.5-pro";

    public function __construct(array $aiOptions = [])
    {
        $this->data = $aiOptions;
    }

    public function longarticleOptions(): array
    {
        return [
            [
                'type' => 'checkbox',
                'label' => 'Provider State',
                'name' => 'status',
                'value' => '',
            ],
            [
                'type' => 'text',
                'label' => 'Provider',
                'name' => 'provider',
                'value' => 'Gemini'
            ],
            [
                'type' => 'dropdown',
                'label' => 'Models',
                'name' => 'model',
                'value' => [
                    'gemini-2.0-flash',
                    'gemini-2.0-flash-lite',
                    'gemini-1.5-pro',
                    'gemini-1.5-flash'
                ],
                'required' => true
            ],
            [
                'type' => 'dropdown',
                'label' => 'Tones',
                'name' => 'tone',
                'value' => [
                    'Normal', 'Formal', 'Casual', 'Professional', 'Serious', 'Friendly', 'Playful', 'Authoritative', 'Empathetic', 'Persuasive', 'Optimistic', 'Sarcastic', 'Informative', 'Inspiring', 'Humble', 'Nostalgic', 'Dramatic'
                ]
            ],
            [
                'type' => 'dropdown',
                'label' => 'Languages',
                'name' => 'language',
                'value' => [
                    'English', 'French', 'Arabic', 'Byelorussian', 'Bulgarian', 'Catalan', 'Estonian', 'Dutch'
                ]
            ],
            [
                'type' => 'dropdown',
                'label' => 'Frequency Penalty',
                'name' => 'frequency_penalty',
                'value' => [
                    0, 0.5, 1, 1.5, 2  
                ],
                'default_value' => 0
            ],
            [
                'type' => 'dropdown',
                'label' => 'Presence Penalty',
                'name' => 'presence_penalty',
                'value' => [
                    0, 0.5, 1, 1.5, 2  
                ],
                'default_value' => 0
            ],
            [
                'type' => 'dropdown',
                'label' => 'Temperature',
                'name' => 'temperature',
                'value' => [
                    0, 0.5, 1, 1.5, 2  
                ],
                'default_value' => 1,
            ],
            [
                'type' => 'dropdown',
                'label' => 'Top P',
                'name' => 'top_p',
                'value' => [
                    0, 0.25, 0.50, 0.75, 1
                ],
                'default_value' => 1
            ],
            [
                'type' => 'number',
                'label' => 'Max Tokens',
                'name' => 'max_tokens',
                'min' => 1,
                'max' => 4096,
                'value' => 2048,
                'visibility' => true,
                'required' => true
            ],
        ];
    }

    public function validationRules()
    {
        return [
            'max_tokens' => 'required|integer|min:1|max:4096',
        ];
    }

    public function titlePrompt(): string
    {
        return filteringBadWords("Generate " . ($this->data['number_of_title'] == '1' ? 'only one' :  $this->data['number_of_title']) ." seo friendly ". Str::plural('title', $this->data['number_of_title']) ." in " . ($this->data['options']['language'] ?? 'English'). " language based on this topic & keywords in " . ($this->data['options']['tone'] ?? 'Normal') . " tone. Topic: " . $this->data['topic'] . ", Keywords: " . $this->data['keywords'] . ". ". ($this->data['number_of_title'] == '1' ? "The title" : "Each titles") ." must be an array element, give the output as an array. No addtional text before and after array [] brackets.");
    }

    public function titleDataOptions(): array
    {
        return [
            'model' => data_get($this->data['options'], 'model', $this->defaultModel),

            "contents" => [
                [
                    "role" => "user",
                    "parts" => [
                        ["text" => $this->titlePrompt()]
                    ]
                ],
            ],
            'generationConfig' => [
                "temperature" => data_get($this->data['options'], 'temperature', 1),
                "maxOutputTokens" => maxToken('longarticle_gemini'),
                "topP" => data_get($this->data['options'], 'top_p', 1),
                "presencePenalty" => data_get($this->data['options'], 'presence_penalty', 1),
                "frequencyPenalty" => data_get($this->data['options'], 'frequency_penalty', 1),
            ]
        ];
    }

    public function titleOptions(): array
    {
        return $this->titleDataOptions();
    }

    public function outlinePrompt(): string
    {
        return filteringBadWords("Generate section headings only to write a blog in " . ($this->data['options']['language'] ?? 'English') . " language in " . ($this->data['options']['tone'] ?? 'Normal') . " tone based on this title & keywords. Title: " . $this->data['title'] . ", Keywords: " . $this->data['keywords'] . ". Each section headings must be an array element, give the output as an array. No addtional text before and after array [] brackets. Please do not prefix array elements with numbers and enclose array elements in double quotes.");

    }

    public function outlineDataOptions(): array
    {
        return [
            'model' => data_get($this->data['options'], 'model', $this->defaultModel),
            "contents" => [
                [
                    "role" => "user",
                    "parts" => [
                        ["text" => $this->outlinePrompt()]
                    ]
                ],
            ],
            'generationConfig' => [
                "temperature" => data_get($this->data['options'], 'temperature', 1),
                "maxOutputTokens" => maxToken('longarticle_gemini'),
                "topP" => data_get($this->data['options'], 'top_p', 1),
                "presencePenalty" => data_get($this->data['options'], 'presence_penalty', 1),
                "frequencyPenalty" => data_get($this->data['options'], 'frequency_penalty', 1),
            ]
        ];
    }

    public function outlineOptions(): array
    {
        return $this->outlineDataOptions();
    }
    
    public function articlePrompt(): string
    {
        return filteringBadWords("This is the title: " . $this->data['title'] . ". These are the keywords: " . $this->data['keywords'] . ". This is the Heading list: " . $this->data['outlines'] . ". Expand each Heading section to generate article in " . ($this->data['options']['language'] ?? 'English') . " language in ". ($this->data['options']['tone'] ?? 'Normal') ." tone. Do not add other Headings or write more than the specific Headings in Heading list. Give the Heading output in bold font.");

    }

    public function articleDataOptions(): array
    {
        return [
            'model' => data_get($this->data['options'], 'model', $this->defaultModel),
            "contents" => [
                [
                    "role" => "user",
                    "parts" => [
                        ["text" => $this->articlePrompt()]
                    ]
                ],
            ],
            'generationConfig' => [
                "temperature" => data_get($this->data['options'], 'temperature', 1),
                "maxOutputTokens" => maxToken('longarticle_gemini'),
                "topP" => data_get($this->data['options'], 'top_p', 1),
                "presencePenalty" => data_get($this->data['options'], 'presence_penalty', 1),
                "frequencyPenalty" => data_get($this->data['options'], 'frequency_penalty', 1),
            ]
        ];
    }

    public function articleOptions(): array
    {
        return $this->articleDataOptions();
    }

}
