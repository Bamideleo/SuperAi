<?php 

namespace Modules\OpenAI\AiProviders\StabilityAi\Responses;

use Modules\OpenAI\Contracts\Responses\ImageResponseContract;
use Intervention\Image\Facades\Image;
use Exception;

class ImageV3Response implements ImageResponseContract
{
    public $response;
    public $images = [];

    public function __construct($aiResponse) 
    {
        $this->response = $aiResponse;
        $this->process();
    }

    public function process()
    {
        $data = json_decode($this->response['body']);
    
        if ($this->response['code'] == 200) {
            $decodedImage = base64_decode($data->image);
            $this->images[] = Image::make($decodedImage);
        } elseif (in_array($this->response['code'], [400, 401, 403, 404, 429, 500])) {
            $message = $data->errors[0];
            $this->handleException($message);
        } else {
            $message = $data->errors[0] ?? __('Something went wrong, please try again.');
            $this->handleException($message);
        }
        
    }

    public function images(): array
    {
        return $this->images;
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
