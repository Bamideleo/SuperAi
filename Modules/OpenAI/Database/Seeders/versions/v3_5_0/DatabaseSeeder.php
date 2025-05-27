<?php

namespace Modules\OpenAI\Database\Seeders\versions\v3_5_0;

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
            ProviderManager::class,
            PermissionTableSeeder::class,
            PreferencesTableSeeder::class,
            VoiceTableSeeder::class,
            MenuItemsTableSeeder::class
        ]);
    }
}
