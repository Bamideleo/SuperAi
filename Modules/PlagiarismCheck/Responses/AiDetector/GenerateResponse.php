<?php 

namespace Modules\PlagiarismCheck\Responses\AiDetector;

use Modules\OpenAI\Contracts\Responses\AiDetector\AiDetectorGenerateResponseContract;
use Exception;

class GenerateResponse implements AiDetectorGenerateResponseContract
{
    public $content;
    public $response;
    public $expense;
    public $word;

    /**
     * Constructor.
     *
     * @param mixed $aiResponse The response from the AI engine.
     */
    public function __construct($aiResponse) 
    {
        $this->response = $aiResponse;
        $this->content();
        $this->words();
        $this->expense();
    }

    /**
     * Get the generated response.
     *
     * @return array The generated response.
     *
     * @throws \Exception If an error occurred during response generation.
     */
    public function content(): array
    {
        if (!isset($this->response['success'])) {
            $this->handleException($this->response['message']);
        }

        if (isset($this->response['success']) && !($this->response['success'])) {
            $this->handleException($this->response['message']);
        }
        return $this->content = [
            'id' => $this->response['data']['id'],
            'status' => $this->response['data']['status']
        ];
    }

    /**
     * Get the word count.
     *
     * This method returns the total number of words in the generated content.
     *
     * @return int The word count.
     */
    public function words(): int
    {
        return $this->word = str_word_count($this->response['data']['content']);

    }

    /**
     * Calculates the expense (total input and output tokens) of the API response.
     *
     * This method calculates the total expense (input and output tokens) of the API response
     * based on word count. It returns the total expense value.
     *
     * @return int The total expense (input and output tokens) of the response.
     */
    public function expense(): int
    {
        return $this->expense = ($this->word < 250) ? 1 : ceil($this->word / 250);
    }

    /**
     * Retrieves the original API response.
     *
     * This method returns the original API response object received during initialization.
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
     * This method throws a new Exception instance with the provided error message.
     *
     * @param string $message The error message to be included in the exception.
     *
     * @return Exception The thrown Exception instance.
     */
    public function handleException(string $message): Exception
    {
        throw new \Exception($message);
    }
}
