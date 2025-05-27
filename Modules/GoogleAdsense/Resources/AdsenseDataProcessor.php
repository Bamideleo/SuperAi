<?php

namespace Modules\GoogleAdsense\Resources;

class AdsenseDataProcessor
{
    private $data = [];

    /**
     * Class constructor.
     *
     * Initializes the class with the provided AI options.
     *
     * @param array $aiOptions The AI options to initialize the data property.
     */
    public function __construct(array $aiOptions = [])
    {
        $this->data = $aiOptions;
    }

    /**
     * Provides an array of configuration options for Google Adsense.
     *
     * @return array
     */
    public function googleAdsenseOptions(): array
    {
        return [
            [
                'type' => 'checkbox',
                'label' => 'Provider State',
                'name' => 'status',
                'value' => '',
                'visibility' => true
            ],
            [
                'type' => 'text',
                'label' => 'Provider',
                'name' => 'provider',
                'value' => 'googleAdsense',
                'visibility' => true
            ],
        ];
    }

    /**
     * Retrieves the validation rules for the current data processor.
     * 
     * @return array An array of validation rules.
     */

    public function validationRules()
    {
        return [];
    }
}
