<?php 

namespace Modules\PlagiarismCheck\Responses\Plagiarism;

use Modules\OpenAI\Contracts\Responses\Plagiarism\GenerateResponseContract;
use Exception;

class GenerateResponse implements GenerateResponseContract
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
        if (!isset($this->response['success'])) {
            $this->handleException($this->response['message']);
        }

        if (isset($this->response['success']) && !($this->response['success'])) {
            $this->handleException($this->response['message']);
        }
        return $this->content = [
            'id' => $this->response['data']['text']['id'],
            'state' => $this->response['data']['text']['state']
        ];
    }

    public function words(): int
    {
        return $this->word = $this->response['data']['text']['words'];

    }

    public function expense(): int
    {
        return $this->expense = $this->response['data']['charged'] == 0 ? $this->response['data']['bonus_charged'] : $this->response['data']['charged'];
    }

    public function response(): mixed
    {
        return $this->response;
    }

    public function handleException(string $message): Exception
    {
        throw new \Exception($message);
    }
}
