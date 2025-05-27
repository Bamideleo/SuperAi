<?php

namespace Database\seeders\versions\v1_5_0;

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
        $preference = Preference::where([
            'category' => 'preference',
            'field' => 'welcome_email',
        ])->first();

        if ($preference) {
            Preference::where('category', 'preference')
                ->where('field', 'welcome_email')
                ->update(['value' => '0']);
        }
    }
}
