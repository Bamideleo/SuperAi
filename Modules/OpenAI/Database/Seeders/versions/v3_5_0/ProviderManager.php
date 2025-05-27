<?php

namespace Modules\OpenAI\Database\Seeders\versions\v3_5_0;

use Illuminate\Database\Seeder;

class ProviderManager extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $artStyleData = [
            [
                'type' => 'dropdown',
                'label' => 'Aspect Ratio',
                'name' => 'aspect_ratio',
                'value' => [
                    '16:9',
                    '1:1',
                    '21:9',
                    '2:3',
                    '3:2',
                    '4:5',
                    '5:4',
                    '9:16',
                    '9:21',
                ],
                'default_value' => '1:1',
                'visibility' => true,
                'required' => true
            ],
            [
                'type' => 'textarea',
                'label' => 'Negative Prompt',
                'name' => 'negative_prompt',
                'value' => __('Keywords of what you do not wish to see in the output image.'),
                'maxlength' => 10000,
                'tooltip_limit' => 150,
                'placeholder' =>  __('Please provide a brief description, it will be displayed on the customer interface. Note that this will be added to the customer panel.'),
                'visibility' => true,
            ],
        ];
        
        $imageProvider = \DB::table('preferences')
            ->where('field', 'imagemaker_stabilityai')
            ->value('value');

        if ($imageProvider) {
            $decodedValue = json_decode($imageProvider, true);

            $hasDropdownImage = collect($decodedValue)->contains(fn($item) =>
                isset($item['name']) && in_array($item['name'], ['aspect_ratio'])
            );

            if (!$hasDropdownImage) {
                $imageValue = array_merge($decodedValue, $artStyleData);

                \DB::table('preferences')
                    ->where('field', 'imagemaker_stabilityai')
                    ->update(['value' => json_encode($imageValue)]);
            }
        }

        
    }
}
