<?php 

namespace Modules\Gemini\Responses\AiDocChat;

use Modules\OpenAI\Contracts\Responses\AiDocChat\AskQuestionResponseContract;
use Exception;

class AskQuestionResponse implements AskQuestionResponseContract
{
    public $content;
    public $response;
    public $expense;
    public $words;

    /**
     * Initializes the response object with the API response.
     *
     * @param mixed $aiResponse The raw API response.
     */
    public function __construct($aiResponse)
    {
        $this->response = $aiResponse;
        $this->content();
        $this->words();
        $this->expense();
    }

    /**
     * Get the content.
     *
     * @return string The content of the response as an string.
     * 
     * @throws Exception If the API response contains an error message.
     */
    public function content(): string
    {
        if (isset($this->response->error)) {
            $this->handleException($this->response->error->message);
        }

        return $this->content = $this->response->candidates[0]->content->parts[0]->text;
    }

    /**
     * Get the expense associated with generating the response.
     *
     * @return int The total expense (input and output tokens) of the response.
     */
    public function expense(): int
    {
        return $this->expense = $this->response->usageMetadata->totalTokenCount;
    }

    /**
     * Get the word count of the response.
     *
     * @return int The number of words in the response.
     */
    public function words(): int
    {
        return $this->word = preference('word_count_method') == 'token'
                ? (int) subscription('tokenToWord', $this->expense)
                : countWords($this->content);
    }

    /**
     * Retrieves the original API response.
     *
     * @return mixed The original API response.
     */
    public function response(): mixed
    {
        return $this->response;
    }

    /**
     * Handles exceptions by throwing a new Exception instance.
     *
     * @param string $message The error message to be included in the exception.
     *
     * @return Exception The thrown exception instance.
     */
    public function handleException(string $message): Exception
    {
        throw new Exception($message);
    }
}