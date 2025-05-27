<?php

namespace Modules\Gemini\Resources;


class CodeDataProcessor
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
     * @return array
     */
    public function codeOptions(): array
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
                'value' => [
                    'PHP',
                    'Java',
                    'Rubby',
                    'Python',
                    'C#',
                    'Go',
                    'Kotlin',
                    'HTML',
                    'Javascript',
                    'TypeScript',
                    'SQL',
                    'NoSQL'
                ],
                'required' => true
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
                'label' => 'Code Level',
                'name' => 'code_level',
                'value' => [
                    'Noob',
                    'Moderate',
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
     * Generates a code generation prompt based on stored data.
     *
     * This method constructs a code generation prompt based on the stored data
     * within the class. It combines the prompt with the specified programming
     * language and code level, if available, or uses default values if not provided.
     *
     * @return string A string representing the code generation prompt.
     */
    public function articlePrompt(): string
    {
        return  "Generate code about". $this->data['prompt'] .
        "In " . data_get($this->data, 'language', 'PHP')
        ."and the code level is " . data_get($this->data, 'codeLevel', 'Noob');
    }

    /**
     * Generates a code prompt for the OpenAI model.
     *
     * @return array The generated code prompt.
     */
    public function codePrompt(): array
    {
       return [
            'model' => data_get($this->data, 'model', 'gemini-1.5-pro'),
            "contents" => [
                [
                    "role" => "user",
                    "parts" => [
                        ["text" => $this->articlePrompt()]
                    ]
                ],
            ],
            'generationConfig' => [
                "temperature" => data_get($this->data, 'temperature', 1),
                "maxOutputTokens" => maxToken('code_gemini')
            ]
        ];
    }

    /**
     * Generates a code prompt for the OpenAI model.
     *
     * @return array The generated code prompt.
     */
    public function code(): array
    {
       return $this->codePrompt();
    }

}
