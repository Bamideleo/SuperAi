<?php

namespace Modules\Gemini\Resources;


class TemplateDataProcessor
{
    /**
     * @var int $token which is used as default.
     *
     * This property holds an integer value used as a token identifier within the class.
     * It is initialized to 1024 by default.
     */
    private $token = 1024;
    /**
     * Prompt
     *
     * @var string
     */
    protected $prompt;

    /**
     * Description: Private property to store data.
     *
     * This property is used to store data within the class. It is intended
     * to be accessed only within the class itself and not from outside.
     *
     * @var array $data An array to store data.
     */
    private $data = [];

    public function __construct(array $aiOptions = [])
    {
        $this->data = $aiOptions;
    }

    /**
     * Returns an array of code options for the provider.
     *
     * @return array An array of code options with the following structure:
     * - type: string - The type of the option (e.g. "checkbox", "dropdown").
     * - label: string - The label of the option.
     * - name: string - The name of the option.
     * - value: mixed - The value of the option. For "dropdown" options, this is an array of values.
     */
    public function templateContentOptions(): array
    {
        return [
            [
                'type' => 'checkbox',
                'label' => 'Provider State',
                'name' => 'status',
                'value' => ''
            ],
            [
                'type' => 'dropdown',
                'label' => 'Language',
                'name' => 'language',
                'value' => $this->languages()
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
                'visibility' => true,
                'required' => true
            ],
            [
                'type' => 'dropdown',
                'label' => 'Tone',
                'name' => 'tone',
                'value' => [
                    'Casual',
                    'Funny',
                    'Bold',
                    'Feminine',
                    'Professional',
                    'Friendly',
                    'Dramatic',
                    'Playful',
                    'Excited',
                    'Sarcastic',
                    'Empathetic'
                ]
            ],
            [
                'type' => 'dropdown',
                'label' => 'Number Of Variant',
                'name' => 'variant',
                'value' => [
                    1,
                    2,
                    3
                ]
            ],
            [
                'type' => 'dropdown',
                'label' => 'Creativity Level',
                'name' => 'creativity_level',
                'value' => [
                    'Optimal',
                    'Low',
                    'Medium',
                    'High'
                ]
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

    /**
     * Retrieve the validation rules for the current data processor.
     * 
     * @return array An array of validation rules.
     */
    public function validationRules()
    {
        return [
            'max_tokens' => 'required|integer|min:1|max:4096',
        ];
    }

    /**
     * Retrieves the list of valid languages for code generation.
     *
     * This method retrieves the list of valid languages for code generation by querying
     * the database for active languages. It filters out any languages specified in the
     * configuration to be omitted. The resulting list contains the names of valid languages.
     *
     * @return array The list of valid languages for code generation.
     */
    public function languages(): array
    {
        $validLanguage = [];
        $languages = \App\Models\Language::where(['status' => 'Active'])->get();
        $omitLanguages = moduleConfig('openai.language');

        foreach ($languages as $language) {
            if (!array_key_exists($language->name, $omitLanguages)) {
                $validLanguage[] = $language->name;
            }
        }
        return $validLanguage;
    }

    /**
     * Generates a code prompt for the OpenAI model.
     *
     * @return array|string The generated code prompt.
     */
    public function templatePrompt(): array|string
    {
        $variant = 'Create' . request('variant') . 'distinct versions as specified.';

        return $this->prompt = ([
            'model' => data_get($this->data, 'model', 'gemini-1.5-pro'),
            "contents" => [
                [
                    "role" => "user",
                    "parts" => [
                        ["text" => 'Generate a response in ' . data_get($this->data, 'language', 'English') . '. Address the prompt: ' . $this->data['prompt'] . ', ensure the tone is ' . data_get($this->data, 'tone', 'Casual') . '.' . $variant]
                    ]
                ],
            ],
            'generationConfig' => [
                "temperature" => data_get($this->data, 'temperature', 1),
                "maxOutputTokens" => maxToken('templatecontent_gemini')
            ]
        ]);

    }

    /**
     * Generates a code prompt for the OpenAI model.
     *
     * @return array|string The generated code prompt.
     */
    public function template(): array|string
    {
       return $this->templatePrompt();
    }

}
