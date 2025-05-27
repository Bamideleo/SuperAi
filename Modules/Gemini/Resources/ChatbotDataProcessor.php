<?php

namespace Modules\Gemini\Resources;


class ChatbotDataProcessor
{
    private $data = [];

    private $token = 1024;

    public function __construct(array $aiOptions = [])
    {
        $this->data = $aiOptions;
    }

    public function chatbotOptions(): array
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
                'value' => 'Anthropic',
                'visibility' => true
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
     * Returns a prompt for asking a question, filtering out bad words.
     *
     * @return string The prompt for asking a question with bad words filtered out.
     */
    public function askQuestionPrompt(): string
    {
        return filteringBadWords(
            "Respond to the user's query based on the provided context: '{$this->data['content']}'. 
            If the context lacks sufficient information, reply with: 'I'm sorry, but I don't have this information.'. 
            Avoid generating unrelated content or empty responses. Generate response based on " . (data_get($this->data, 'language', 'English') ) . " language and in " . (data_get($this->data, 'tone',  'Normal')) . " tone."
        );
    }
    /**
     * Returns an array of options for asking a question.
     *
     * @return array
     */
    public function askQuestionDataOptions(): array
    {
        return [
            'model' => data_get($this->data, 'chat_model','gemini-1.5-pro'),
            'contents' => [
                [
                    'role' => 'model', 
                    'parts' => [
                       'text' => $this->askQuestionPrompt()
                    ],
                ],
                [
                    'role' => 'user', 
                    'parts' => [
                       'text' => $this->data['prompt']
                    ],
                ],
            ],
            'generationConfig' => [
                "temperature" => data_get($this->data, 'temperature', 1),
                "maxOutputTokens" => maxToken('chatbot_gemini')
            ]

        ];
    }
}
