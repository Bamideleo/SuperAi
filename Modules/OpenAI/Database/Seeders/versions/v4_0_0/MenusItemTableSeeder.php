<?php

namespace Modules\OpenAI\Database\Seeders\versions\v4_0_0;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MenusItemTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('menu_items')->updateOrInsert(
        [
            'label' => 'Text To Video',
            'link' => 'text-to-video',
            'params' => '{"permission":"Modules\\\\OpenAI\\\\Http\\\\Controllers\\\\Admin\\\\v2\\\\TextToVideoController@index","route_name":["admin.features.text-to-video.index"]}',
            'is_default' => 1,
            'icon' => NULL,
            'parent' => 143,
            'sort' => 12,
            'class' => NULL,
            'menu' => 1,
            'depth' => 1,
            'is_custom_menu' => 0
        ],['link' => 'text-to-video']);
    }
}
