<?php 

namespace Modules\PlagiarismCheck\Responses\Plagiarism;

use Modules\OpenAI\Contracts\Responses\Plagiarism\ReportResponseContract;
use Exception;

class ReportResponse implements ReportResponseContract
{
    public $report;
    public $response;

    public function __construct($aiResponse) 
    {
        $this->response = $aiResponse;
        $this->report();
    }

    public function report(): array
    {
        if (isset($this->response['success']) && !($this->response['success'])) {
            $message = isset($this->response['message']) ? $this->response['message'] : __('Something went wrong. Please try again.');
            $this->handleException($message);
        }
        return $this->report = [
            'id' => $this->response['data']['report']['id'],
            'percent' =>  $this->response['data']['report']['percent'],
            'report_data' => json_encode($this->response['data']['report_data']['sources']),
        ];
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
