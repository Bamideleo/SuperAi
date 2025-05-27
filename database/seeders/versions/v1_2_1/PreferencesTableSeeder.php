<?php

namespace Database\seeders\versions\v1_2_1;

use App\Models\Preference;
use Illuminate\Database\Seeder;

class PreferencesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run() {
        $dbPreference = Preference::where('field', 'welcome_email')->first();
        
        if (!$dbPreference) {
            \DB::table('preferences')->insert([
                'category' => 'preference',
                'field' => 'welcome_email',
                'value' => '1',
            ]);
        }
    }
}
