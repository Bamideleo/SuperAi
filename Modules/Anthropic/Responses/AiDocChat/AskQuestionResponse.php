<?php

namespace Modules\Anthropic\Responses\AiDocChat;

use Modules\OpenAI\Contracts\Responses\AiDocChat\AskQuestionResponseContract;
use Exception;

class AskQuestionResponse implements AskQuestionResponseContract
{
    public $content;
    public $response;
    public $expense;
    public $words;

    public function __construct($aiResponse)
    {
        $this->response = $aiResponse;
        $this->content();
        $this->words();
        $this->expense();
    }

    public function content(): string
    {
        if (isset($this->response->error)) {
            $this->handleException($this->response->error->message);
        }

        return $this->content = $this->response->content[0]->text;
    }

    public function expense(): int
    {
         return $this->expense = $this->response->usage->input_tokens + $this->response->usage->output_tokens;
    }

    public function words(): int
    {
        return $this->words = countWords($this->response->content[0]->text);
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