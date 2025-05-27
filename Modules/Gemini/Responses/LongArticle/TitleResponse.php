<?php 

namespace Modules\Gemini\Responses\LongArticle;

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
            $this->handleException($this->response->error->message);
        }
        $content = str_replace(["\n", 'json', '`'], ['','', '"'], $this->response->candidates[0]->content->parts[0]->text);
        $content = trim($content);
        
        // Attempt to decode only if content is not empty
        if ($content !== '') {
            $decodedContent = json_decode($content);
            if (json_last_error() === JSON_ERROR_NONE) {
                $content = $decodedContent;
            } else {
                $this->handleException(__('Something went wrong with title generation'));
            }
        } else {
            $this->handleException(__('No content available for title generation'));
        }
        return $content;
    }

    public function words(): int
    {
        return  preference('word_count_method') == 'token'
        ? (int) subscription('tokenToWord', $this->expense()) : countWords($this->response->candidates[0]->content->parts[0]->text);
    }

    public function expense(): int
    {
        return $this->response->usageMetadata->totalTokenCount;
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
