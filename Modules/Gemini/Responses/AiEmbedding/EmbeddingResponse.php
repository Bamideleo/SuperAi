<?php 

namespace Modules\Gemini\Responses\AiEmbedding;

use Exception;
use Modules\OpenAI\Contracts\Responses\AiEmbedding\AiEmbeddingResponseContract;
class EmbeddingResponse implements AiEmbeddingResponseContract
{
    public $content;
    public $response;
    public $expense;
    public $options;

    /**
     * Initializes the response object with the API response.
     *
     * @param mixed $aiResponse The raw API response.
     * @param array $options    An array of options containing the content to be processed.
     */
    public function __construct($aiResponse, $options = [])
    {
        $this->options = $options;
        $this->response = $aiResponse;
        $this->content();
        $this->expense();
    }

    /**
     * Get the content of the resource.
     *
     * @return array The content of the resource.
     */
    public function content(): array
    {
        if (isset($this->response->error)) {
            $this->handleException($this->response->error->message);
        }
        return $this->content = $this->response->embedding->values;
    }

    /**
     * Calculates the expense (total input and output tokens) of the API response.
     * 
     * @return int The total expense (input and output tokens) of the response.
     */
    public function expense(): int
    {
        $word = str_word_count($this->options['content']['parts'][0]['text']);
        return $this->expense = ceil($word / 0.75); // Note: Will be dynamic
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
