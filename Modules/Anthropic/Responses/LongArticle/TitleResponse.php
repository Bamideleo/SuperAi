<?php 

namespace Modules\Anthropic\Responses\LongArticle;

use Exception;
use Modules\OpenAI\Contracts\Responses\LongArticle\TitleResponseContract;

class TitleResponse implements TitleResponseContract
{
    private $response;

    public function __construct($response)
    {
        $this->response = $response;
        $this->content();
        $this->words();
        $this->expense();
    }
    public function content(): array
    {
        if (isset($this->response->error)) {

            if ($this->response->error->type == 'authentication_error') {
                $this->handleException(__("There's an issue with your API key."));
            }
            
            $this->handleException($this->response->error->message);
        }

        $content = $this->response->content[0]->text;
        
        if (is_string($content)) {
            $content = json_decode($content);
            if (! json_last_error() === JSON_ERROR_NONE) {
                $this->handleException(__('Something went wrong with title generation'));
            }
        }
        return $content;
    }

    public function words(): int
    {
        return  preference('word_count_method') == 'token'
        ? (int) subscription('tokenToWord', $this->expense()) : countWords($this->response->content[0]->text);
    }

    public function expense(): int
    {
        return $this->response->usage->input_tokens + $this->response->usage->output_tokens;
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