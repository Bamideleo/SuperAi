<?php

namespace Database\Seeders\versions\v1_2_1;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->call(PermissionTableSeeder::class);
        $this->call(PreferencesTableSeeder::class);
        $this->call(LanguagesTableSeeder::class);
    }
}
