<?php

namespace Database\Seeders\versions\v2_3_0;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {

        $role = \DB::table('roles')->where('slug', 'user')->first();

        if ($role) {
            \DB::table('users')->updateOrInsert(
                ['email' => 'user@techvill.net'],
                [
                    'name' => 'Blaine Keller',
                    'email_verified_at' => null,
                    'password' => '$2y$10$d0TN5l6NAx/zrqfYbW4eY.3qNwtLIeHhLOqoMgiuqLsDg6GXmcqeu',
                    'phone' => null,
                    'birthday' => null,
                    'gender' => null,
                    'address' => null,
                    'sso_account_id' => null,
                    'sso_service' => null,
                    'remember_token' => null,
                    'status' => 'Active',
                    'activation_code' => null,
                    'activation_otp' => null,
                    'updated_at' => now(),
                    'deleted_at' => null
                ]
            );

            $userId = \DB::table('users')->where('email', 'user@techvill.net')->value('id');

            if ($userId) {
                \DB::table('role_users')->updateOrInsert(
                    ['user_id' => $userId],
                    ['role_id' => $role->id]
                );
                
            }
        } 
    }
}
