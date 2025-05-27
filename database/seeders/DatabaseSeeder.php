<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Database\Seeders\versions\v1_1_0\DatabaseSeeder as DatabaseSeederV11;
use Database\Seeders\versions\v1_2_0\DatabaseSeeder as DatabaseSeederV12;

use Database\Seeders\versions\v1_2_1\DatabaseSeeder as DatabaseSeederV121;

use Database\Seeders\versions\v1_4_0\DatabaseSeeder as DatabaseSeederV14;
use Database\Seeders\versions\v1_5_0\DatabaseSeeder as DatabaseSeederV15;
use Database\Seeders\versions\v1_6_0\DatabaseSeeder as DatabaseSeederV16;

use Database\Seeders\versions\v2_3_0\DatabaseSeeder as DatabaseSeederV23;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CurrenciesTableSeeder::class);
        $this->call(LanguagesTableSeeder::class);
        $this->call(EmailTemplatesTableSeeder::class);
        $this->call(PermissionsTableSeeder::class);
        $this->call(PreferencesTableSeeder::class);
        $this->call(RolesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(UsersMetaTableSeeder::class);
        $this->call(RoleUsersTableSeeder::class);

        $this->call(PermissionRolesTableSeeder::class);
        $this->call(AddressesTableSeeder::class);
        $this->call(FilesTableSeeder::class);
        $this->call(ObjectFilesTableSeeder::class);

        $this->call(DatabaseSeederV11::class);
        
        $this->call(DatabaseSeederV12::class);
        $this->call(DatabaseSeederV121::class);

        $this->call(DatabaseSeederV14::class);

        $this->call(DatabaseSeederV15::class);

        $this->call(DatabaseSeederV16::class);

        $this->call(DatabaseSeederV23::class);
    }
}
