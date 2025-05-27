<?php

namespace Modules\OpenAI\Database\Seeders\versions\v4_0_0;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VoiceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $adminUserId = DB::table('role_users')
            ->join('roles', 'role_users.role_id', '=', 'roles.id')
            ->where('roles.type', 'admin')
            ->value('role_users.user_id');

        if ($adminUserId && DB::table('voices')->whereNull(['type', 'user_id'])->exists()) {
            DB::table('voices')
                ->whereNull('type')
                ->update(['user_id' => $adminUserId]);
        }
    }
}
