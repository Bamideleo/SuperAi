<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersMetaTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {

        \DB::table('users_meta')->delete();

        \DB::table('users_meta')->insert(array (
            0 =>
            array (
                'id' => 1,
                'owner_type' => 'App\\Models\\User',
                'owner_id' => 1,
                'type' => 'string',
                'key' => 'designation',
                'value' => 'Entrepreneur',
            ),
            1 =>
            array (
                'id' => 2,
                'owner_type' => 'App\\Models\\User',
                'owner_id' => 1,
                'type' => 'string',
                'key' => 'description',
                'value' => 'Agatha Williams is a visionary entrepreneur, making waves in the business world with his innovative ideas and unwavering determination. With a keen eye for opportunities, he has successfully founded and led multiple ventures, leaving a significant impact on various industries. Agatha\'s passion for growth and empowerment drives him to inspire others to achieve greatness. A trailblazer and trendsetter, he continues to redefine success and shape the future of entrepreneurship.',
            ),
            2 =>
            array (
                'id' => 3,
                'owner_type' => 'App\\Models\\User',
                'owner_id' => 1,
                'type' => 'string',
                'key' => 'facebook',
                'value' => 'https://www.facebook.com',
            ),
            3 =>
            array (
                'id' => 4,
                'owner_type' => 'App\\Models\\User',
                'owner_id' => 1,
                'type' => 'string',
                'key' => 'twitter',
                'value' => 'https://www.twitter.com',
            ),
            4 =>
            array (
                'id' => 5,
                'owner_type' => 'App\\Models\\User',
                'owner_id' => 1,
                'type' => 'string',
                'key' => 'instagram',
                'value' => 'https://www.instagram.com',
            ),
        ));


    }
}
