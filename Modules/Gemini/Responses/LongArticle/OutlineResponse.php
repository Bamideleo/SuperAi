<?php

namespace Modules\Gemini\Responses\LongArticle;

use Exception;
use Modules\OpenAI\Contracts\Responses\LongArticle\OutlineResponseContract;

class OutlineResponse implements OutlineResponseContract
{
    public $response;
    public $articleContent;
    public $expense = 0;
    public $word = 0;


    public function __construct($response)
    {
        $this->response = $response;
        $this->content();
        $this->expense();
        $this->words();
    }

    public function content(): array
    {
        if (isset($this->response[0]->error)) {
            $this->handleException($this->response[0]->error->message);
        }
        
        $articleContent = [];

        if (!empty($this->response)) {
            foreach ($this->response as $value) {
                foreach ($value->candidates ?? [] as $candidate) {
                    foreach ($candidate->content->parts ?? [] as $part) {
                        $articleContent[] = json_decode($part->text);
                        $this->word += countWords($part->text);
                    }
                }
            }
        } else {
            $articleContent[] = json_decode($this->response->candidates[0]->content->parts[0]);
        }

        return $this->articleContent = $articleContent;
        
    }

    public function words(): int
    {
        $wordCountMethod = preference('word_count_method');
        return $this->word = $wordCountMethod == 'token' ? $this->expense : $this->word;
    }

    public function expense(): int
    {
        if (isset($this->response) && count($this->response) > 1) {
            foreach ($this->response as $expense) {
                $this->expense += $expense->usageMetadata->totalTokenCount;
            }
        } else {
            $this->expense += $this->response[0]->usageMetadata->totalTokenCount;
        }

        return $this->expense;
    }

    public function response(): mixed
    {
        if (!empty($this->response) && count($this->response) > 1) {
            $responseValue = array_shift($this->response);
        
            foreach ($this->response as $contentResponse) {
                $responseValue->candidates = array_merge($responseValue->candidates, $contentResponse->candidates);
                $responseValue->usageMetadata->totalTokenCount += $contentResponse->usageMetadata->totalTokenCount;
            }

            $this->response = $responseValue;
        } else {
            $this->response = $this->response[0] ?? null;
        }

        return $this->response;
    }

    public function handleException(string $message): Exception
    {
        throw new Exception($message);
    }
}
