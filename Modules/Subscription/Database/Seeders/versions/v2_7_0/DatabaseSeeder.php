<?php

namespace Modules\Subscription\Database\Seeders\versions\v2_7_0;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call(PackageSubscriptionsMetaTableSeeder::class);
        $this->call(PackagesMetaTableSeeder::class);
        $this->call(CreditsTableSeeder::class);
    }
}
