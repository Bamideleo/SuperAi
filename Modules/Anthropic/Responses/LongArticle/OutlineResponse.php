<?php

namespace Modules\Anthropic\Responses\LongArticle;

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
        $this->words();
        $this->expense();
    }

    public function content(): array
    {
        if (isset($this->response[0]->error)) {

            if ($this->response[0]->error->type == 'authentication_error') {
                $this->handleException(__("There's an issue with your API key."));
            }

            $this->handleException($this->response[0]->error->message);
        }

        $articleContent = [];

        if (isset($this->response) && count($this->response) > 1) {
            
            foreach ($this->response as $value) {
                $articleContent[] = json_decode($value->content[0]->text);
            }
        } else {
            $articleContent[] = json_decode($this->response[0]->content[0]->text) ;
        }

        return $this->articleContent =  $articleContent;
    }

    public function words(): int
    {
        if (isset($this->response) && count($this->response) > 1) {
            
            foreach ($this->response as $word) {
                $this->word +=  preference('word_count_method') == 'token'
                    ? (int) subscription('tokenToWord', $this->expense()) : countWords($word->content[0]->text);
            }

        } else {
            $this->word += preference('word_count_method') == 'token'
                ? (int) subscription('tokenToWord', $this->expense()) : countWords($this->response[0]->content[0]->tex);
        }

        return $this->word;
    }

    public function expense(): int
    {
        if (isset($this->response) && count($this->response) > 1) {
            foreach ($this->response as $expense) {
                $this->expense += $expense->usage->input_tokens + $expense->usage->output_tokens;
            }
        } else {
            $this->expense += $this->response[0]->usage->input_tokens + $this->response[0]->usage->output_tokens;
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
                    $responseValue->content[] = $contentResponse->content[0];
                    $responseValue->usage->input_tokens += $contentResponse->usage->input_tokens;
                    $responseValue->usage->output_tokens += $contentResponse->usage->output_tokens;
                }
            }

            $this->response = $responseValue;
        } else {
            $this->response = $this->response[0];
        }

        return $this->response;
    }

    public function handleException(string $message): Exception
    {
        throw new Exception($message);
    }
}