<?php

namespace Modules\Anthropic\Resources;


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
        $context = data_get($this->data, 'content', '');

        return filteringBadWords(
            "Respond to the user's query based on the provided context: '{$context}'.
            If the context is sufficient, provide a clear, accurate, and concise answer. If the context lacks sufficient information, reply with: 'I'm sorry, but I don't have this information.'. 
            Avoid generating unrelated content or empty responses. Generate response based on " . (data_get($this->data, 'language', 'English') ) . " language and in " . (data_get($this->data, 'tone',  'Normal')) . " tone.
            Rely solely on the provided context; avoid speculation. Keep the response focused and structured. Include examples only if they enhance clarity."
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
            'model' => $this->data['model'] ?? 'claude-3-sonnet-20240229',
            'messages' => [
                ['role' => 'user', 'content' => $this->data['prompt']],
            ],
            'max_tokens' => maxToken('chatbot_anthropic'),
            'system' => $this->askQuestionPrompt()
        ];
    }
}
