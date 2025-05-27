<?php

namespace Modules\GeoLocale\Database\Seeders;

use Illuminate\Database\Seeder;

class GeoLocaleCountriesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('geolocale_countries')->truncate();
        
        \DB::table('geolocale_countries')->insert(array (
            67 => 
            array (
                'id' => 68,
                'continent_id' => 1,
                'name' => 'United Arab Emirates',
                'full_name' => 'The United Arab Emirates',
                'capital' => 'Abu Dhabi',
                'code' => 'ae',
                'code_alpha3' => 'are',
                'code_numeric' => 784,
                'emoji' => '🇦🇪',
                'has_division' => 0,
                'currency_code' => 'AED',
                'currency_name' => 'UAE Dirham',
                'tld' => '.ae',
                'callingcode' => '971',
            ),
        ));
        
        
    }
}