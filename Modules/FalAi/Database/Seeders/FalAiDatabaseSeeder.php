<?php

namespace Modules\FalAi\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use Modules\FalAi\Database\Seeders\versions\v4_0_0\DatabaseSeeder;

class FalAiDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call(DatabaseSeeder::class);
    }
}
