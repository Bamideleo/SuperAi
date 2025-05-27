<?php

namespace Database\Seeders\versions\v1_2_1;

use App\Models\Language;
use Illuminate\Database\Seeder;

class LanguagesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {

       $data = [
            [
                'name' => 'Polish',
                'short_name' => 'pl',
                'flag' => NULL,
                'status' => 'Active',
                'is_default' => 0,
                'direction' => 'ltr',
            ],
            [
                'name' => 'German',
                'short_name' => 'de',
                'flag' => NULL,
                'status' => 'Active',
                'is_default' => 0,
                'direction' => 'ltr',
            ], 
        ];
        
        foreach ($data as $language) {
            $dbLanguage = Language::where(['short_name' => $language['short_name']])->first();
            
            if (!$dbLanguage) {
                Language::insert($language);
            }
        }


    }
}
