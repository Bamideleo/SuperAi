<?php

namespace Modules\Subscription\Database\Seeders\versions\v3_2_0;

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

        $this->call([
            PackageSubscriptionsMetaTableSeeder::class,
            PackagesMetaTableSeeder::class,
            CreditsTableSeeder::class
        ]);
    }
}
