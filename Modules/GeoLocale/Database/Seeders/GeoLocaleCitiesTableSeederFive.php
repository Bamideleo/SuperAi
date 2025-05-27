<?php

namespace Modules\GeoLocale\Database\Seeders;

use Illuminate\Database\Seeder;

class GeoLocaleCitiesTableSeederFive extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {

        \DB::table('geolocale_cities')->insert(array (
            343 =>
            array (
                'id' => 133162,
                'country_id' => 68,
                'division_id' => 505,
                'name' => 'Murbaḩ',
                'full_name' => 'Murbah',
                'code' => NULL,
                'iana_timezone' => 'Asia/Dubai',
            ),
        ));
    }
}
