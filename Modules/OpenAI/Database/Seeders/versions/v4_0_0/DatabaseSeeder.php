<?php

namespace Modules\OpenAI\Database\Seeders\versions\v4_0_0;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            PermissionTableSeeder::class,
            PreferenceTableSeeder::class,
            TeamMemberSeeder::class,
            VoiceTableSeeder::class,
            MenusItemTableSeeder::class,
        ]);
    }
}
