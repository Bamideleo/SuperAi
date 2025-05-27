<?php 

namespace Modules\PlagiarismCheck\Responses\AiDetector;

use Modules\OpenAI\Contracts\Responses\AiDetector\AiDetectorReportResponseContract;
use Exception;

class ReportResponse implements AiDetectorReportResponseContract
{
    public $report;
    public $response;

    /**
     * ReportResponse constructor.
     *
     * @param $aiResponse
     */
    public function __construct($aiResponse) 
    {
        $this->response = $aiResponse;
        $this->report();
    }

    /**
     * Retrieve the detailed report for a given ID.
     *
     * @return array The report data.
     * 
     * @throws \Exception If an error occurred during response generation.
     */
    public function report(): array
    {
        if (isset($this->response['success']) && !($this->response['success'])) {
            $message = isset($this->response['message']) ? $this->response['message'] : __('Something went wrong. Please try again.');
            $this->handleException($message);
        }
        return $this->report = [
            'id' => $this->response['data']['id'],
            'percent' =>  (int) ($this->response['data']['strong_percent'] + $this->response['data']['likely_percent']),
            'report_data' => $this->response['data']['conclusion'],
        ];
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
     * Handle any errors that occurred during the response generation.
     * 
     * @param string $message The error message to be included in the exception.
     * 
     * @throws \Exception If an error occurred during response generation.
     */
    public function handleException(string $message): Exception
    {
        throw new \Exception($message);
    }
}
