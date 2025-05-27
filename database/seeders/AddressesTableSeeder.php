<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class AddressesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        \DB::table('addresses')->delete();

        \DB::table('addresses')->insert(array (
            0 =>
            array (
                'id' => 1,
                'user_id' => 1,
                'first_name' => 'Agatha',
                'last_name' => 'Williams',
                'phone' => '01738896835',
                'email' => 'agathawilliams@techvill.net',
                'company_name' => NULL,
                'type_of_place' => 'home',
                'address_1' => 'Nikunja-2, Khilkhet',
                'address_2' => NULL,
                'city' => 'dhaka',
                'state' => '81',
                'zip' => '2233',
                'country' => 'bd',
                'is_default' => 1,
            ),
        ));


    }
}
