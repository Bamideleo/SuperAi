<?php

namespace Modules\GeoLocale\Database\Seeders;

use Illuminate\Database\Seeder;

class GeoLocaleContinentsLocaleTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('geolocale_continents_locale')->truncate();
        
        \DB::table('geolocale_continents_locale')->insert(array (
            7 => 
            array (
                'id' => 8,
                'continent_id' => 1,
                'name' => 'Asia',
                'alias' => NULL,
                'abbr' => 'as',
                'full_name' => NULL,
                'locale' => 'en',
            )
        ));
        
        
    }
}