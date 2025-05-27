<?php

namespace Modules\Subscription\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use Modules\Subscription\Database\Seeders\versions\v1_2_0\{
    PackageSubscriptionsMetaTableSeeder as PackageSubscriptionsMetaV12TableSeeder,
    PackagesMetaTableSeeder as PackagesMetaV12TableSeeder,
    PackagesTableSeeder as PackageTableV120Seeder,
    CreditsTableSeeder as CreditsTableV120Seeder,
    MenuItemsTableSeeder as MenuItemsTableV120Seeder
};

use Modules\Subscription\Database\Seeders\versions\v1_4_0\DatabaseSeeder as DatabaseSeederV14;

use Modules\Subscription\Database\Seeders\versions\v2_6_0\DatabaseSeeder as DatabaseSeederV26;

use Modules\Subscription\Database\Seeders\versions\v2_7_0\DatabaseSeeder as DatabaseSeederV27;

use Modules\Subscription\Database\Seeders\versions\v3_2_0\DatabaseSeeder as DatabaseSeederV32;
use Modules\Subscription\Database\Seeders\versions\v4_0_0\DatabaseSeeder as DatabaseSeederV40;

class SubscriptionDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call(AdminMenusTableSeeder::class);
        $this->call(MenuItemsTableSeeder::class);
        $this->call(PackagesTableSeeder::class);
        $this->call(PackagesMetaTableSeeder::class);
        $this->call(PackageSubscriptionsTableSeeder::class);
        $this->call(PackageSubscriptionsMetaTableSeeder::class);
        $this->call(SubscriptionDetailsTableSeeder::class);
        $this->call(PackageTableV120Seeder::class);
        $this->call(CreditsTableV120Seeder::class);

        $this->call(PackageSubscriptionsMetaV12TableSeeder::class);
        $this->call(PackagesMetaV12TableSeeder::class);
        $this->call(MenuItemsTableV120Seeder::class);
        $this->call(DatabaseSeederV14::class);
        $this->call(DatabaseSeederV26::class);
        $this->call(DatabaseSeederV27::class);

        $this->call(DatabaseSeederV32::class);
        $this->call(DatabaseSeederV40::class);
    }
}
