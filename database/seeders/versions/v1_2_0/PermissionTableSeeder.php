<?php

namespace Database\seeders\versions\v1_2_0;

use App\Models\Permission;
use App\Models\PermissionRole;
use Illuminate\Database\Seeder;

class PermissionTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run() {

        $permission = Permission::where(['name' => 'Modules\OpenAI\Http\Controllers\Api\V1\User\OpenAIPreferenceController@contentPreferences'])->first();

        if (!$permission) {
            return null;
        }

        $role = PermissionRole::where(['permission_id' => $permission->id, 'role_id' => 2])->first();

        if (!$role) {
            \DB::table('permission_roles')->insert([
                'permission_id' => $permission->id,
                'role_id' => 2
            ]);
        }
        
        $permission = Permission::where(['name' => 'Modules\OpenAI\Http\Controllers\Api\V1\User\OpenAIPreferenceController@imagePreferences'])->first();

        if (!$permission) {
            return null;
        }

        $role = PermissionRole::where(['permission_id' => $permission->id, 'role_id' => 2])->first();

        if (!$role) {
            \DB::table('permission_roles')->insert([
                'permission_id' => $permission->id,
                'role_id' => 2
            ]);
        }
        
        $permission = Permission::where(['name' => 'Modules\OpenAI\Http\Controllers\Api\V1\User\OpenAIPreferenceController@codePreferences'])->first();

        if (!$permission) {
            return null;
        }

        $role = PermissionRole::where(['permission_id' => $permission->id, 'role_id' => 2])->first();

        if (!$role) {
            \DB::table('permission_roles')->insert([
                'permission_id' => $permission->id,
                'role_id' => 2
            ]);
        }
        
        $permission = Permission::where(['name' => 'Modules\OpenAI\Http\Controllers\Api\V1\User\UserController@index'])->first();

        if (!$permission) {
            return null;
        }

        $role = PermissionRole::where(['permission_id' => $permission->id, 'role_id' => 2])->first();

        if (!$role) {
            \DB::table('permission_roles')->insert([
                'permission_id' => $permission->id,
                'role_id' => 2
            ]);
        }

        $permission = Permission::where(['name' => 'Modules\OpenAI\Http\Controllers\Api\V1\User\OpenAIController@contentTogglebookmark'])->first();

        if (!$permission) {
            return null;
        }

        $role = PermissionRole::where(['permission_id' => $permission->id, 'role_id' => 2])->first();

        if (!$role) {
            \DB::table('permission_roles')->insert([
                'permission_id' => $permission->id,
                'role_id' => 2
            ]);
        }
        
        $permission = Permission::where(['name' => 'Modules\OpenAI\Http\Controllers\Api\V1\User\UseCasesController@useCaseToggleFavorite'])->first();

        if (!$permission) {
            return null;
        }

        $role = PermissionRole::where(['permission_id' => $permission->id, 'role_id' => 2])->first();

        if (!$role) {
            \DB::table('permission_roles')->insert([
                'permission_id' => $permission->id,
                'role_id' => 2
            ]);
        }

        $permission = Permission::where(['name' => 'Modules\OpenAI\Http\Controllers\Api\V1\User\OpenAIPreferenceController@chatPreferences'])->first();

        if (!$permission) {
            return null;
        }

        $role = PermissionRole::where(['permission_id' => $permission->id, 'role_id' => 2])->first();

        if (!$role) {
            \DB::table('permission_roles')->insert([
                'permission_id' => $permission->id,
                'role_id' => 2
            ]);
        } 
        
        $permission = Permission::where(['name' => 'Modules\Subscription\Http\Controllers\PackageSubscriptionController@store'])->first();

        if (!$permission) {
            return null;
        }

        $role = PermissionRole::where(['permission_id' => $permission->id, 'role_id' => 2])->first();

        if (!$role) {
            \DB::table('permission_roles')->insert([
                'permission_id' => $permission->id,
                'role_id' => 2
            ]);
        }
        
        $permission = Permission::where(['name' => 'Modules\Subscription\Http\Controllers\PackageSubscriptionController@setting'])->first();

        if (!$permission) {
            return null;
        }

        $role = PermissionRole::where(['permission_id' => $permission->id, 'role_id' => 2])->first();

        if (!$role) {
            \DB::table('permission_roles')->insert([
                'permission_id' => $permission->id,
                'role_id' => 2
            ]);
        }
        
        $permission = Permission::where(['name' => 'Modules\Subscription\Http\Controllers\Api\V1\User\PackageSubscriptionController@cancel'])->first();

        if (!$permission) {
            return null;
        }

        $role = PermissionRole::where(['permission_id' => $permission->id, 'role_id' => 2])->first();

        if (!$role) {
            \DB::table('permission_roles')->insert([
                'permission_id' => $permission->id,
                'role_id' => 2
            ]);
        }
        
        $permission = Permission::where(['name' => 'Modules\Subscription\Http\Controllers\Api\V1\User\PackageSubscriptionController@store'])->first();

        if (!$permission) {
            return null;
        }

        $role = PermissionRole::where(['permission_id' => $permission->id, 'role_id' => 2])->first();

        if (!$role) {
            \DB::table('permission_roles')->insert([
                'permission_id' => $permission->id,
                'role_id' => 2
            ]);
        }

        $permission = Permission::where(['name' => 'Modules\Subscription\Http\Controllers\Api\V1\User\PackageSubscriptionController@setting'])->first();

        if (!$permission) {
            return null;
        }

        $role = PermissionRole::where(['permission_id' => $permission->id, 'role_id' => 2])->first();

        if (!$role) {
            \DB::table('permission_roles')->insert([
                'permission_id' => $permission->id,
                'role_id' => 2
            ]);
        }
    }
}
