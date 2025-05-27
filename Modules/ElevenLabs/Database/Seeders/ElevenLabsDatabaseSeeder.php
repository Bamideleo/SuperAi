<?php

namespace Modules\ElevenLabs\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Modules\ElevenLabs\Database\Seeders\versions\v3_5_0\DatabaseSeeder as DatabaseSeederV3_5_0;
use Modules\ElevenLabs\Database\Seeders\versions\v4_0_0\DatabaseSeeder as DatabaseSeederV4_0_0;

class ElevenLabsDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();
        
        $this->call(DatabaseSeederV3_5_0::class);
        $this->call(DatabaseSeederV4_0_0::class);
    }
}
