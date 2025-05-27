<?php

namespace Modules\OpenAI\Database\Seeders\versions\v3_5_0;

use App\Models\Permission;
use Illuminate\Database\Seeder;
use DB;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $parentId = Permission::insertGetId([
            'controller_name' => 'VoiceoverController',
            'controller_path' => 'Modules\\OpenAI\\Http\\Controllers\\Customer\\VoiceoverController',
            'method_name' => 'template',
            'name' => 'Modules\\OpenAI\\Http\\Controllers\\Customer\\VoiceoverController@template',
        ]);
        DB::table('permission_roles')->insert([
            'permission_id' => $parentId,
            'role_id' => 2,
        ]);

        $parentId = Permission::insertGetId([
            'controller_name' => 'VoiceoverController',
            'controller_path' => 'Modules\\OpenAI\\Http\\Controllers\\Customer\\VoiceoverController',
            'method_name' => 'index',
            'name' => 'Modules\\OpenAI\\Http\\Controllers\\Customer\\VoiceoverController@index',
        ]);
        DB::table('permission_roles')->insert([
            'permission_id' => $parentId,
            'role_id' => 2,
        ]);

        $parentId = Permission::insertGetId([
            'controller_name' => 'VoiceoverController',
            'controller_path' => 'Modules\\OpenAI\\Http\\Controllers\\Customer\\VoiceoverController',
            'method_name' => 'show',
            'name' => 'Modules\\OpenAI\\Http\\Controllers\\Customer\\VoiceoverController@show',
        ]);
        DB::table('permission_roles')->insert([
            'permission_id' => $parentId,
            'role_id' => 2,
        ]);

        $parentId = Permission::insertGetId([
            'controller_name' => 'VoiceoverController',
            'controller_path' => 'Modules\\OpenAI\\Http\\Controllers\\Customer\\VoiceoverController',
            'method_name' => 'delete',
            'name' => 'Modules\\OpenAI\\Http\\Controllers\\Customer\\VoiceoverController@delete',
        ]);
        DB::table('permission_roles')->insert([
            'permission_id' => $parentId,
            'role_id' => 2,
        ]);

        $parentId = Permission::insertGetId([
            'controller_name' => 'VoiceoverController',
            'controller_path' => 'Modules\\OpenAI\\Http\\Controllers\\Customer\\VoiceoverController',
            'method_name' => 'destroy',
            'name' => 'Modules\\OpenAI\\Http\\Controllers\\Customer\\VoiceoverController@destroy',
        ]);
        DB::table('permission_roles')->insert([
            'permission_id' => $parentId,
            'role_id' => 2,
        ]);

        $parentId = Permission::insertGetId([
            'controller_name' => 'VoiceoverController',
            'controller_path' => 'Modules\\OpenAI\\Http\\Controllers\\Api\\v2\\User\\VoiceoverController',
            'method_name' => 'generate',
            'name' => 'Modules\\OpenAI\\Http\\Controllers\\Api\\v2\\User\\VoiceoverController@generate',
        ]);

        DB::table('permission_roles')->insert([
            'permission_id' => $parentId,
            'role_id' => 2,
        ]);

        $parentId = Permission::insertGetId([
            'controller_name' => 'VoiceoverController',
            'controller_path' => 'Modules\\OpenAI\\Http\\Controllers\\Api\\v2\\User\\VoiceoverController',
            'method_name' => 'index',
            'name' => 'Modules\\OpenAI\\Http\\Controllers\\Api\\v2\\User\\VoiceoverController@index',
        ]);

        DB::table('permission_roles')->insert([
            'permission_id' => $parentId,
            'role_id' => 2,
        ]);

        $parentId = Permission::insertGetId([
            'controller_name' => 'VoiceoverController',
            'controller_path' => 'Modules\\OpenAI\\Http\\Controllers\\Api\\v2\\User\\VoiceoverController',
            'method_name' => 'show',
            'name' => 'Modules\\OpenAI\\Http\\Controllers\\Api\\v2\\User\\VoiceoverController@show',
        ]);

        DB::table('permission_roles')->insert([
            'permission_id' => $parentId,
            'role_id' => 2,
        ]);

        $parentId = Permission::insertGetId([
            'controller_name' => 'VoiceoverController',
            'controller_path' => 'Modules\\OpenAI\\Http\\Controllers\\Api\\v2\\User\\VoiceoverController',
            'method_name' => 'destroy',
            'name' => 'Modules\\OpenAI\\Http\\Controllers\\Api\\v2\\User\\VoiceoverController@destroy',
        ]);

        DB::table('permission_roles')->insert([
            'permission_id' => $parentId,
            'role_id' => 2,
        ]);
    }
}
