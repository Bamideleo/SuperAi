<?php 

namespace Modules\DeepSeek\Responses\AiDocChat;

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
        if ($this->response['code'] != 200) {
            $this->handleException($this->response['body']['error']['message']);
        }

        $this->content = $this->response['body']['choices'][0]['message']['content'];
        return $this->content;
    }

    public function expense(): int
    {
         return $this->expense = $this->response['body']['usage']['total_tokens'];
    }

    public function words(): int
    {
        return $this->words = preference('word_count_method') == 'token'
            ? (int) subscription('tokenToWord', $this->response['body']['usage']['total_tokens'])
            : countWords($this->response['body']['choices'][0]['message']['content']);
    }

    public function response(): mixed
    {
        return $this->response['body'];
    }

    public function handleException(string $message): Exception
    {
        throw new Exception($message);
    }
}