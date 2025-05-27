<?php

namespace Modules\GeoLocale\Database\Seeders;

use Illuminate\Database\Seeder;

class GeoLocaleDivisionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('geolocale_divisions')->truncate();
        
        \DB::table('geolocale_divisions')->insert(array (
            444 => 
            array (
                'id' => 500,
                'country_id' => 68,
                'name' => 'Abu Dhabi',
                'full_name' => NULL,
                'code' => '1',
                'has_city' => 0,
            ),
            445 => 
            array (
                'id' => 501,
                'country_id' => 68,
                'name' => 'Ajman',
                'full_name' => NULL,
                'code' => '2',
                'has_city' => 0,
            ),
            446 => 
            array (
                'id' => 502,
                'country_id' => 68,
                'name' => 'Dubai',
                'full_name' => NULL,
                'code' => '3',
                'has_city' => 0,
            ),
            447 => 
            array (
                'id' => 503,
                'country_id' => 68,
                'name' => 'Fujairah',
                'full_name' => NULL,
                'code' => '4',
                'has_city' => 0,
            ),
            448 => 
            array (
                'id' => 504,
                'country_id' => 68,
                'name' => 'Raʼs al Khaymah',
                'full_name' => NULL,
                'code' => '5',
                'has_city' => 0,
            ),
            449 => 
            array (
                'id' => 505,
                'country_id' => 68,
                'name' => 'Sharjah',
                'full_name' => NULL,
                'code' => '6',
                'has_city' => 0,
            ),
            450 => 
            array (
                'id' => 506,
                'country_id' => 68,
                'name' => 'Imārat Umm al Qaywayn',
                'full_name' => NULL,
                'code' => '7',
                'has_city' => 0,
            ),
        ));
        
        
    }
}