<?php

namespace Modules\GeoLocale\Database\Seeders;

use Illuminate\Database\Seeder;

class GeoLocaleDivisionsLocaleTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('geolocale_divisions_locale')->truncate();
        
        \DB::table('geolocale_divisions_locale')->insert(array (

            340 => 
            array (
                'id' => 341,
                'division_id' => 501,
                'name' => 'Ajman',
                'abbr' => NULL,
                'alias' => NULL,
                'full_name' => NULL,
                'locale' => 'en',
            ),
            341 => 
            array (
                'id' => 342,
                'division_id' => 502,
                'name' => 'Dubai',
                'abbr' => NULL,
                'alias' => NULL,
                'full_name' => NULL,
                'locale' => 'en',
            ),
            342 => 
            array (
                'id' => 343,
                'division_id' => 503,
                'name' => 'Fujairah',
                'abbr' => NULL,
                'alias' => NULL,
                'full_name' => NULL,
                'locale' => 'en',
            ),
            343 => 
            array (
                'id' => 344,
                'division_id' => 504,
                'name' => 'Imarat Ra\'s al Khaymah',
                'abbr' => NULL,
                'alias' => NULL,
                'full_name' => NULL,
                'locale' => 'en',
            ),
            344 => 
            array (
                'id' => 345,
                'division_id' => 505,
                'name' => 'Sharjah',
                'abbr' => NULL,
                'alias' => NULL,
                'full_name' => NULL,
                'locale' => 'en',
            ),
            345 => 
            array (
                'id' => 346,
                'division_id' => 506,
                'name' => 'Imarat Umm al Qaywayn',
                'abbr' => NULL,
                'alias' => NULL,
                'full_name' => NULL,
                'locale' => 'en',
            ),
        ));
        
        
    }
}