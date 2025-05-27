<?php

namespace Database\Seeders\versions\v1_2_0;

use Illuminate\Database\Seeder;
use App\Models\Language;

class LanguagesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {

        $dbPermission = Language::where([
            'name' => 'Polish',
        ])->first();

        if (!$dbPermission) {
            Language::insert([
                'name' => 'Polish',
                'short_name' => 'pl',
                'flag' => NULL,
                'status' => 'Active',
                'is_default' => 0,
                'direction' => 'ltr',
            ]);
        }

        $dbPermission = Language::where([
            'name' => 'German',
        ])->first();

        if (!$dbPermission) {
            Language::insert([
                'name' => 'German',
                'short_name' => 'de',
                'flag' => NULL,
                'status' => 'Active',
                'is_default' => 0,
                'direction' => 'ltr',
            ]);
        }

    }
}
