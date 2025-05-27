<?php

namespace Database\seeders\versions\v1_4_0;

use Illuminate\Database\Seeder;
use App\Models\Preference;

class PreferencesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run() {

        $dbPermission = Preference::where([
            'category' => 'openai',
            'field' => 'conversation_limit',
        ])->first();

        if (!$dbPermission) {
            Preference::insert([
                'category' => 'openai',
                'field' => 'conversation_limit',
                'value' => '4',
            ]);
        }

        $dbPermission = Preference::where([
            'category' => 'openai',
            'field' => 'word_count_method',
        ])->first();

        if (!$dbPermission) {
            Preference::insert([
                'category' => 'openai',
                'field' => 'word_count_method',
                'value' => 'token',
            ]);
        }

        $dbPermission = Preference::where([
            'category' => 'openai',
            'field' => 'google_api',
        ])->first();

        if (!$dbPermission) {
            Preference::insert([
                'category' => 'openai',
                'field' => 'google_api',
                'value' => 'AIswdasdsdasdasdsadasdasEr87',
            ]);
        }
    }
}
