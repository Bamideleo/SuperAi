<?php

namespace Modules\DeepSeek\Responses\LongArticle;

use Modules\OpenAI\Contracts\Responses\LongArticle\OutlineResponseContract;
use Exception;

class OutlineResponse implements OutlineResponseContract
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
        if ($this->response[0]['code'] != 200) {
            $this->handleException($this->response[0]['body']['error']['message']);
        }

        $content = [];
        if (isset($this->response) && count($this->response) > 1) {
            
            foreach ($this->response as $value) {
                $content[] = json_decode($value['body']['choices'][0]['message']['content']);
            }
        } else {
            $content[] = json_decode($this->response[0]['body']['choices'][0]['message']['content']) ;
        }

        return $this->content = $content;
    }

    public function words(): int
    {
        if (isset($this->response) && count($this->response) > 1) {
        
            foreach ($this->response as $word) {
                $this->word +=  preference('word_count_method') == 'token'
                    ? (int) subscription('tokenToWord', $this->expense()) : countWords($word['body']['choices'][0]['message']['content']);
            }

        } else {
            $this->word += preference('word_count_method') == 'token'
                ? (int) subscription('tokenToWord', $this->expense()) : countWords($this->response[0]['body']['choices'][0]['message']['content']);
        }

        return $this->word;

    }

    public function expense(): int
    {
        if (isset($this->response) && count($this->response) > 1) {
            foreach ($this->response as $expense) {
                $this->expense += $expense['body']['usage']['total_tokens'];
            }
        } else {
            $this->expense += $this->response[0]['body']['usage']['total_tokens'];
        }

        return $this->expense;
    }

    public function response(): mixed
    {
        if (isset($this->response) && count($this->response) > 1) {
            
            // Initialize the new value with the first result
            $responseValue = $this->response[0];

            // Aggregate results
            foreach ($this->response as $key => $contentResponse) {
                if ($key > 0) {
                    $responseValue['body']['choices'][] = $contentResponse['body']['choices'][0];

                    $responseValue['body']['usage']['prompt_tokens'] += $responseValue['body']['usage']['prompt_tokens'];
                    $responseValue['body']['usage']['completion_tokens'] += $responseValue['body']['usage']['completion_tokens'];
                    $responseValue['body']['usage']['prompt_tokens_details']['cached_tokens'] += $responseValue['body']['usage']['prompt_tokens_details']['cached_tokens'];
                    $responseValue['body']['usage']['prompt_cache_hit_tokens'] += $responseValue['body']['usage']['prompt_cache_hit_tokens'];
                    $responseValue['body']['usage']['prompt_cache_miss_tokens'] += $responseValue['body']['usage']['prompt_cache_miss_tokens'];
                    $responseValue['body']['usage']['total_tokens'] += $contentResponse['body']['usage']['total_tokens'];
                }
            }

            $this->response = $responseValue;
        } else {
            $this->response = $this->response[0]['body'];
        }

        return $this->response;
    }

    public function handleException(string $message): Exception
    {
        throw new \Exception($message);
    }
}