<?php

namespace Modules\GeoLocale\Database\Seeders;

use Illuminate\Database\Seeder;

class GeoLocaleCitiesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        \DB::table('geolocale_cities')->truncate();

        \DB::table('geolocale_cities')->insert(array (
            117 =>
            array (
                'id' => 102,
                'country_id' => 68,
                'division_id' => NULL,
                'name' => 'Ash Shariqah',
                'full_name' => NULL,
                'code' => 'sh',
                'iana_timezone' => NULL,
            ),
            118 =>
            array (
                'id' => 101,
                'country_id' => 68,
                'division_id' => 502,
                'name' => 'Dubai',
                'full_name' => NULL,
                'code' => 'du',
                'iana_timezone' => 'Asia/Dubai',
            ),
            119 =>
            array (
                'id' => 100,
                'country_id' => 68,
                'division_id' => NULL,
                'name' => 'Al l\'Ayn',
                'full_name' => NULL,
                'code' => 'al',
                'iana_timezone' => NULL,
            ),
            120 =>
            array (
                'id' => 99,
                'country_id' => 68,
                'division_id' => 500,
                'name' => 'Abu Dhabi',
                'full_name' => NULL,
                'code' => 'az',
                'iana_timezone' => 'Asia/Dubai',
            ),
        ));


    }
}
