<?php 

namespace Modules\Gemini\Responses\VisionChat;

use Modules\OpenAI\Contracts\Responses\VisionChat\VisionChatResponseContract;
use Exception;

class ChatResponse implements VisionChatResponseContract
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

    public function content(): string
    {
        if (isset($this->response->error)) {
            $this->handleException($this->response->error->message);
        }
        return $this->content = $this->response->candidates[0]->content->parts[0]->text;
    }

    public function words(): int
    {
        return $this->word = preference('word_count_method') == 'token'
                ? (int) subscription('tokenToWord', $this->expense)
                : countWords($this->content);
    }

    public function expense(): int
    {
        return $this->expense = $this->response->usageMetadata->totalTokenCount;
    }

    public function response(): mixed
    {
        return $this->response = $this->response;
    }

    public function handleException(string $message): Exception
    {
        throw new \Exception($message);
    }
}