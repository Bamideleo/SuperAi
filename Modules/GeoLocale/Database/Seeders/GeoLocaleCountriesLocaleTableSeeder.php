<?php

namespace Modules\GeoLocale\Database\Seeders;

use Illuminate\Database\Seeder;

class GeoLocaleCountriesLocaleTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('geolocale_countries_locale')->truncate();
        
        \DB::table('geolocale_countries_locale')->insert(array (
            313 => 
            array (
                'id' => 315,
                'country_id' => 68,
                'name' => 'United Arab Emirates',
                'alias' => NULL,
                'abbr' => NULL,
                'full_name' => 'The United Arab Emirates',
                'currency_name' => 'UAE Dirham',
                'locale' => 'en',
            ),
        ));
        
        
    }
}