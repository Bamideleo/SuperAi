<?php

namespace Modules\Anthropic\Responses\AiChat;

use Modules\OpenAI\Contracts\Responses\AiChat\AiChatResponseContract;
use Exception;

class AiChatResponse implements AiChatResponseContract
{
    public $content;
    public $response;
    public $expense;
    public $word;

    public function __construct($aiResponse)
    {
        $this->response = $aiResponse;
        $this->content();
        $this->expense();
        $this->words();
    }

    public function content(): string
    {
        if (isset($this->response->error)) {
            $this->handleException($this->response->error->message);
        }

        $this->content = $this->response->content[0]->text;

        return $this->content;
    }

    public function words(): int
    {
        return $this->word = preference('word_count_method') == 'token'
                ? (int) subscription('tokenToWord', $this->expense)
                : countWords($this->response->content[0]->text);

    }

    public function expense(): int
    {
        return $this->expense = $this->response->usage->input_tokens + $this->response->usage->output_tokens;
    }

    public function response(): mixed
    {
        return $this->response;
    }

    public function handleException(string $message): Exception
    {
        throw new Exception($message);
    }
}