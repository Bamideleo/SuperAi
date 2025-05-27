<?php

namespace Modules\OpenAI\Database\Seeders\versions\v4_0_0;

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

        // Voice Clone
        $permissionData = [
            'name' => 'Modules\\OpenAI\\Http\\Controllers\\Api\\v2\\User\\VoiceCloneController@generate',
            'controller_path' => 'Modules\\OpenAI\\Http\\Controllers\\Api\\v2\\User\\VoiceCloneController',
            'controller_name' => 'VoiceCloneController',
            'method_name' => 'generate',
        ];

        $permission = Permission::updateOrCreate(
            ['name' => $permissionData['name']],
            $permissionData
        );

        // Upsert permission_roles
        DB::table('permission_roles')->upsert(
            [
                'permission_id' => $permission->id,
                'role_id' => 2,
            ],
            ['permission_id', 'role_id'],
            []
        );

        $permissionData = [
            'controller_name' => 'TextToVideoController',
            'controller_path' => 'Modules\\OpenAI\\Http\\Controllers\\Customer\\v2\\TextToVideoController',
            'method_name' => 'template',
            'name' => 'Modules\\OpenAI\\Http\\Controllers\\Customer\\v2\\TextToVideoController@template',
        ];

        $permission = Permission::updateOrCreate(
            ['name' => $permissionData['name']],
            $permissionData
        );

        // Upsert permission_roles
        DB::table('permission_roles')->upsert(
            [
                'permission_id' => $permission->id,
                'role_id' => 2,
            ],
            ['permission_id', 'role_id'],
            []
        );


        $permissionData = [
            'controller_name' => 'TextToVideoController',
            'controller_path' => 'Modules\\OpenAI\\Http\\Controllers\\Api\\v2\\User\\TextToVideoController',
            'method_name' => 'generate',
            'name' => 'Modules\\OpenAI\\Http\\Controllers\\Api\\v2\\User\\TextToVideoController@generate',
        ];

        $permission = Permission::updateOrCreate(
            ['name' => $permissionData['name']],
            $permissionData
        );

        // Upsert permission_roles
        DB::table('permission_roles')->upsert(
            [
                'permission_id' => $permission->id,
                'role_id' => 2,
            ],
            ['permission_id', 'role_id'],
            []
        );
    }
}
