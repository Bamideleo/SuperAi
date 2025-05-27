<?php

namespace Modules\Anthropic\Responses\Code;

use Exception;
use Modules\OpenAI\Contracts\Responses\Code\CodeResponseContract;

class CodeResponse implements CodeResponseContract
{
    /**
     * The parsed content segments extracted from the API response.
     *
     * This property holds the parsed content segments extracted from the API response.
     * It is typically populated by the `content()` method.
     *
     * @var array $content An array containing the parsed content segments.
     */
    public $content;

    /**
     * The original API response received during initialization.
     * 
     * This property stores the original API response received during the initialization
     * of the `CodeResponse` object.
     *
     * @var mixed $response The original API response object.
     */
    public $response;

    /**
     * The total expense (input and output tokens) of the API response.
     *
     * This property represents the total expense (input and output tokens) of the API response,
     * calculated based on the usage information provided in the response.
     *
     * @var int $expense The total expense of the response.
     */
    public $expense;

    /**
     * The word count of the content extracted from the API response.
     *
     * This property holds the word count of the content extracted from the API response.
     * It is typically calculated by the `words()` method.
     *
     * @var int $word The word count of the extracted content.
     */
    public $word;

    public function __construct($response)
    {
        $this->response = $response;
        $this->content();
        $this->words();
        $this->expense();
    }

    /**
     * Parses the content from the API response.
     *
     * This method extracts the content from the API response and splits it based on
     * Markdown code block delimiters. It returns an array containing the content segments.
     *
     * @return array The parsed content segments.
     */
    public function content(): array
    {

        if (isset($this->response->error)) {

            if ($this->response->error->type == 'authentication_error') {
                $this->handleException(__("There's an issue with your API key."));
            }

            $this->handleException($this->response->error->message);
        }

        $content = explode('```', $this->response->content[0]->text);
        return $this->content = $content;
    }

    // NOTE:: Word count will be depend on provider word count method - need refactor after complete
    /**
     * Calculates the word count from the API response content.
     *
     * This method calculates the word count from the text content of the API response.
     * It returns the total number of words found.
     *
     * @return int The word count of the response content.
     */
    public function words(): int
    {
        return $this->word = str_word_count($this->response->content[0]->text);
    }

    /**
     * Calculates the expense (total input and output tokens) of the API response.
     *
     * This method calculates the total expense (input and output tokens) of the API response
     * based on usage information. It returns the total expense value.
     *
     * @return int The total expense (input and output tokens) of the response.
     */
    public function expense(): int
    {
        return $this->expense = $this->response->usage->input_tokens + $this->response->usage->output_tokens;
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
