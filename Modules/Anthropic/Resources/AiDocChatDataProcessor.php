<?php

namespace Modules\Anthropic\Resources;

use Str;

class AiDocChatDataProcessor
{
    private $data = [];
    private $token = 1024;

    public function __construct(array $aiOptions = [])
    {
        $this->data = $aiOptions;
    }

    /**
     * Returns an array of options for the AI Doc Chat.
     *
     * @return array The array of options for the AI Doc Chat.
     */
    public function aiDocChatOptions(): array
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
                'type' => 'dropdown',
                'label' => 'Temperature',
                'name' => 'temperature',
                'value' => [
                    0, 0.25, 0.50, 0.75, 1
                ],
                'default_value' => 1,
                'visibility' => true
            ],
            [
                'type' => 'number',
                'label' => 'Max Tokens',
                'name' => 'max_tokens',
                'min' => 1,
                'max' => 4096,
                'value' => 4096,
                'visibility' => true
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
     * Returns a prompt for asking a question, filtering out bad words and incorporating the provided context.
     *
     * @return string The prompt for asking a question.
     */
    public function askQuestionPrompt(): string
    {   
        $context = data_get($this->data, 'context', '');
        $language = data_get($this->data, 'language', null);
        $tone = data_get($this->data, 'tone', null);
        $commonText = 'Generate response based on';
        $string = ' ';
        if ($language && $tone) {
            $string .= "{$commonText} {$language} language and in {$tone} tone.";
        } elseif ($language) {
            $string .= "{$commonText} {$language} language.";
        } elseif ($tone) {
            $string .= "{$commonText} {$tone} tone.";
        }

        $prompt = " Based on the provided context, respond to the user's query within the scope of `{$context}`. If the context doesn't contain enough information to answer, respond with 'I’m sorry, but I don't have this information.' and avoid generating unrelated content. `{$string}`";

        return filteringBadWords($prompt);
    }

    /**
     * Returns an array of options for asking a question, including the model, messages, and maximum tokens.
     *
     * @return array The array of options for asking a question.
     */
    public function askQuestionDataOptions(): array
    {
        return [
            'model' => data_get($this->data, 'chat_model', 'claude-3-sonnet-20240229'),
            'messages' => [
                ['role' => 'user', 'content' => $this->data['prompt']],
            ],
            'max_tokens' => maxToken('aidocchat_anthropic'),
            'system' => $this->askQuestionPrompt()
        ];
    }

    /**
     * Returns an array of options for asking a question, including the model, messages, and maximum tokens.
     *
     * @return array The array of options for asking a question.
     */
    public function askQuestionOptions(): array
    {
        return $this->askQuestionDataOptions();
    }
}