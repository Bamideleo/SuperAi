<?php

namespace Database\seeders\versions\v1_2_0;

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
            'category' => 'preference',
            'field' => 'welcome_email',
        ])->first();

        if (!$dbPermission) {
            Preference::insert([
                'category' => 'preference',
                'field' => 'welcome_email',
                'value' => '1',
            ]);
        }
    }
}
