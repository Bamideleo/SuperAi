<?php

namespace Modules\GeoLocale\Database\Seeders;
use Illuminate\Database\Seeder;

class GeoLocaleCitiesLocaleTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        \DB::table('geolocale_cities_locale')->truncate();

        \DB::table('geolocale_cities_locale')->insert(array (
            98 =>
            array (
                'id' => 99,
                'city_id' => 99,
                'name' => '阿布扎比',
                'alias' => NULL,
                'full_name' => NULL,
                'locale' => 'zh-cn',
            ),
            99 =>
            array (
                'id' => 100,
                'city_id' => 100,
                'name' => '艾因',
                'alias' => NULL,
                'full_name' => NULL,
                'locale' => 'zh-cn',
            ),
            100 =>
            array (
                'id' => 101,
                'city_id' => 101,
                'name' => '迪拜',
                'alias' => NULL,
                'full_name' => NULL,
                'locale' => 'zh-cn',
            ),
            101 =>
            array (
                'id' => 102,
                'city_id' => 102,
                'name' => '沙迦',
                'alias' => NULL,
                'full_name' => NULL,
                'locale' => 'zh-cn',
            ),
            342 =>
            array (
                'id' => 3856,
                'city_id' => 99,
                'name' => 'Abu Dhabi',
                'alias' => NULL,
                'full_name' => NULL,
                'locale' => 'en',
            ),
            343 =>
            array (
                'id' => 3857,
                'city_id' => 100,
                'name' => 'Al l\'Ayn',
                'alias' => NULL,
                'full_name' => NULL,
                'locale' => 'en',
            ),
            344 =>
            array (
                'id' => 3858,
                'city_id' => 101,
                'name' => 'Dubai',
                'alias' => NULL,
                'full_name' => NULL,
                'locale' => 'en',
            ),
            345 =>
            array (
                'id' => 3859,
                'city_id' => 102,
                'name' => 'Ash Shariqah',
                'alias' => NULL,
                'full_name' => NULL,
                'locale' => 'en',
            ),
        ));


    }
}
