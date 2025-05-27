<?php

namespace Modules\DeepSeek\Resources;

class AiChatDataProcessor
{
    private $data = [];

    public function __construct(array $aiOptions = [])
    {
        $this->data = $aiOptions;
    }

    public function aiChatOptions(): array
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
                'type' => 'dropdown',
                'label' => 'Models',
                'name' => 'model',
                'value' => [
                    'deepseek-chat',
                    'deepseek-reasoner'
                ],
                'visibility' => true,
                'required' => true
            ],
            [
                'type' => 'dropdown',
                'label' => 'Tones',
                'name' => 'tone',
                'value' => [
                    'Normal', 'Formal', 'Casual', 'Professional', 'Serious', 'Friendly', 'Playful', 'Authoritative', 'Empathetic', 'Persuasive', 'Optimistic', 'Sarcastic', 'Informative', 'Inspiring', 'Humble', 'Nostalgic', 'Dramatic'
                ],
                'visibility' => true
            ],
            [
                'type' => 'dropdown',
                'label' => 'Languages',
                'name' => 'language',
                'value' => [
                    'English', 'French', 'Arabic', 'Byelorussian', 'Bulgarian', 'Catalan', 'Estonian', 'Dutch'
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

    public function validationRules()
    {
        return [
            'max_tokens' => 'required|integer|min:1|max:4096',
        ];
    }

    public function aiChatDataOptions(): array
    {
        $language = data_get($this->data, 'language', null);
        $tone = data_get($this->data, 'tone', null);

        $details = [];
        if ($language) {
            $details[] = "in {$language}";
        }
        if ($tone) {
            $details[] = "with a {$tone} tone";
        }

        $context = $details ? " (" . implode(" and ", $details) . ")" : '';

        $prompt = "Generate a response based on the following text: `{$this->data['prompt']} {$context}`.";

        return [
            'model' => data_get($this->data, 'model', 'deepseek-chat'), 
            'messages' => $this->prepareMessage($prompt, $this->data['chatReply'], $this->data['chatBot']),
            "temperature" =>  1,
            "max_tokens" => maxToken('aichat_deepseek'),
        ];
    }

    /**
     * Prepare a message array based on the provided ChatBot, prompt, and optional chat.
     *
     * @param  object|array  $chatBot  The ChatBot instance.
     * @param  string  $prompt  The user's prompt.
     * @param  \Modules\OpenAI\Entities\Archive|null  $chat  The optional chat instance (can be null).
     * @return array  The prepared message array.
     */
    public function prepareMessage(string $prompt, object $chatReply = null, object|array $chatBot = null): array
    {
        $message = [];

        if ($chatReply) {
            foreach($chatReply as $reply) {
                $message[] = [
                    'role' => isset($reply->user_id) && $reply->user_id != null ? 'user' : 'assistant',
                    'content' => isset($reply->user_id) && $reply->user_id != null ? $reply->user_reply : $reply->bot_reply,
                ];
            }
        }

        $message[] = ['role' => 'user', 'content' => $prompt];

        return $message;
    }
}