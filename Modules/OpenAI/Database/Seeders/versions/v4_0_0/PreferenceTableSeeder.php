<?php

namespace Modules\OpenAI\Database\Seeders\versions\v4_0_0;

use Illuminate\Database\Seeder;

class PreferenceTableSeeder extends Seeder
{
    public function run()
    {
        $userPermission =  \DB::table('preferences')->where('field', 'user_permission')->first();

        if ($userPermission) {

            $value = json_decode($userPermission->value, true) + ['hide_voice_clone' => '0'];
            \DB::table('preferences')->where('field', 'user_permission')->update(['value' => $value]);
        }
    }
}
