<?php

namespace Database\Seeders\versions\v1_1_0;

use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    { 
        \DB::table('permissions')->insert([
            [
                'controller_name' => 'ChatController',
                'controller_path' => 'Modules\\OpenAI\\Http\\Controllers\\Customer\\ChatControlle',
                'method_name' => 'history',
                'name' => 'Modules\\OpenAI\\Http\\Controllers\\Customer\\ChatController@history',
            ],
            [
                'controller_name' => 'ChatController',
                'controller_path' => 'Modules\\OpenAI\\Http\\Controllers\\Customer\\ChatControlle',
                'method_name' => 'delete',
                'name' => 'Modules\\OpenAI\\Http\\Controllers\\Customer\\ChatController@delete',
            ],
            [
                'controller_name' => 'ChatController',
                'controller_path' => 'Modules\\OpenAI\\Http\\Controllers\\Customer\\ChatControlle',
                'method_name' => 'update',
                'name' => 'Modules\\OpenAI\\Http\\Controllers\\Customer\\ChatController@update',
            ],
            [
                'controller_name' => 'ChatController',
                'controller_path' => 'Modules\\OpenAI\\Http\\Controllers\\Customer\\ChatControlle',
                'method_name' => 'create',
                'name' => 'Modules\\OpenAI\\Http\\Controllers\\Customer\\ChatController@create',
            ]
            
        ]);
    }
}
