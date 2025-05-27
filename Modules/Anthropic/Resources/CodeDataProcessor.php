<?php

namespace Modules\Anthropic\Resources;


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
     * @return array An array of code options with the following structure:
     * - type: string - The type of the option (e.g. "checkbox", "dropdown").
     * - label: string - The label of the option.
     * - name: string - The name of the option.
     * - value: mixed - The value of the option. For "dropdown" options, this is an array of values.
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
                ]
            ],
            [
                'type' => 'dropdown',
                'label' => 'Models',
                'name' => 'model',
                'value' => [
                    'claude-3-7-sonnet-latest',
                    'claude-3-5-haiku-latest',
                    'claude-3-5-sonnet-latest',
                    'claude-3-opus-20240229',
                    'claude-3-sonnet-20240229',
                    'claude-3-haiku-20240307',
                    'claude-2.1',
                    'claude-2.0',
                    'claude-instant-1.2'
                ],
                'visibility' => true
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
            [
                "type" => "dropdown-with-image",
                "label" => "Code Language",
                "name" => "code_language",
                "value" => [
                    [
                        "label" => "PHP",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\code\\php.png",
                    ],
                    [
                        "label" => "Java",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\code\\java.png",
                    ],
                    [
                        "label" => "Rubby",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\code\\rubby.jpg",
                    ],
                    [
                        "label" => "Python",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\code\\python.png",
                    ],
                    [
                        "label" => "C#",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\code\\c-sharp.png",
                    ],
                    [
                        "label" => "Go",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\code\\go-lang.png", 
                    ],
                    [
                        "label" => "Kotlin",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\code\\kotlin.png",
                    ],  
                    [
                        "label" => "HTML",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\code\\html-5.png",
                    ],
                    [
                        "label" => "Javascript",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\code\\js.png",
                    ],
                    [
                        "label" => "TypeScript",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\code\\typescript.png",
                    ],
                    [
                        "label" => "SQL",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\code\\mysql.png",
                    ],
                    [
                        "label" => "NoSQL",
                        "url" => "Modules\\OpenAI\\Resources\\assets\\image\\code\\no-sql.png",
                    ],
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
        return [];
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
        return "You are an expert coding assistant. Generate high-quality, well-structured code in " . data_get($this->data, 'language', moduleConfig('openAI.codeLanguage')) . " at a " . data_get($this->data, 'codeLevel', moduleConfig('openAI.codeLevel')) . " level";
    }

    /**
     * Generates a code prompt for the OpenAI model.
     *
     * @return array The generated code prompt.
     */
    public function codePrompt(): array
    {
       return [
            'model' => data_get($this->data, 'model', 'claude-3-sonnet-20240229'),
            'messages' => [
                [
                    'role' => 'user',
                    'content' => $this->data['prompt']
                ]
            ],
            'temperature' => (int) data_get($this->data, 'model', 1),
            'max_tokens' => maxToken('code_anthropic'),
            'system' => $this->articlePrompt()
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
