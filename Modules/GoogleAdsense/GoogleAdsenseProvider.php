<?php

namespace Modules\GoogleAdsense;

use App\Lib\AiProvider;

use Modules\OpenAI\Contracts\Resources\AdsenseContract;
use Modules\GoogleAdsense\Resources\AdsenseDataProcessor;

class GoogleAdsenseProvider extends AiProvider implements AdsenseContract
{
    /**
     * Holds the processed data after it has been manipulated or transformed.
     * This property is typically used within the context of a class to store
     * data that has been modified or processed in some way.
     *
     * @var array Contains an array of data resulting from processing operations.
     */
    protected $processedData;

    public function description(): array
    {
        return [
            'title' => 'Google Adsense',
            'description' => __('Google AdSense is a program that allows website owners to earn money by displaying ads on their pages. Advertisers pay Google for clicks on their ads, and Google shares a portion of that revenue with website owners.'),
            'image' => 'Modules/GoogleAdsense/Resources/assets/image/google-adsense.jpg',
        ];
    }

    public function adsenseOptions(): array
    {
        return (new AdsenseDataProcessor())->googleAdsenseOptions();
    }

    /**
     * Get the validation rules for a specific processor.
     * 
     * @param string $processor The name of the data processor class.
     * 
     * @return array Validation rules for the processor.
     */
    public function getValidationRules(string $processor): array
    {
        $processorClass = " Modules\\OpenAI\\Contracts\\Resources\\" . $processor;

        if (class_exists($processorClass)) {
            return (new $processorClass())->validationRules();
        }

        return [];
    }
}
