<?php 

namespace Modules\DeepSeek\Responses\LongArticle;

use Modules\OpenAI\Contracts\Responses\LongArticle\TitleResponseContract;
use Exception;

class TitleResponse implements TitleResponseContract
{
    public $content;
    public $response;
    public $expense;
    public $word;

    public function __construct($aiResponse) 
    {
        $this->response = $aiResponse;
        $this->content();
        $this->words();
        $this->expense();
    }

    public function content(): array
    {
        if (in_array($this->response['code'], [400, 401, 402, 403, 404, 429, 500])) {
            $this->handleException($this->response['body']['error']['message']);
        }

        $content = $this->response['body']['choices'][0]['message']['content'];

        if (is_string($content)) {
            $content = json_decode($content);

            if (is_null($content)) {
                $this->handleException(__('Something went wrong with title generation. Please try again.'));
            }

            if (! json_last_error() === JSON_ERROR_NONE) {
                $this->handleException(__('Something went wrong with title generation'));
            } 
        }

        return $this->content = $content;
    }

    public function words(): int
    {
        return $this->word = preference('word_count_method') == 'token' 
                ? (int) subscription('tokenToWord', $this->response['body']['usage']['total_tokens']) 
                : countWords($this->response['body']['choices'][0]['message']['content']);

    }

    public function expense(): int
    {
        return $this->expense = $this->response['body']['usage']['total_tokens'];
    }

    public function response(): mixed
    {
        return $this->response['body'];
    }

    public function handleException(string $message): Exception
    {
        throw new \Exception($message);
    }
}