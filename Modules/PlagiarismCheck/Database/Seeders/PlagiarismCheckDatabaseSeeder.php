<?php

namespace Modules\PlagiarismCheck\Database\Seeders;

use Modules\PlagiarismCheck\Database\Seeders\v2_6_0\PreferenceTableSeeder;
use Modules\PlagiarismCheck\Database\Seeders\v2_8_0\PreferenceTableSeeder as PreferenceTableSeederV28;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class PlagiarismCheckDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call([
            PreferenceTableSeeder::class,
            PreferenceTableSeederV28::class
        ]);
    }
}
