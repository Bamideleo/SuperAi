<?php

namespace Modules\OpenAI\Database\Seeders\versions\v3_5_0;

use Illuminate\Database\Seeder;

class MenuItemsTableSeeder extends Seeder
{
    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        $barCodeId = addMenuItem('admin', 'Tools', [
            'icon' => 'fas fa-cogs',
            'sort' => 50,
        ]);

        addMenuItem('admin', 'Actor Imports', [
            'link' => 'import/actors',
            'params' => '{"permission":"Modules\\\\OpenAI\\\Http\\\\Controllers\\\\Admin\\\\ImportController@isMethod", "route_name":["admin.voiceover.imports", "admin.voiceover.import.actor"], "menu_level":"1"}',
            'sort' => 1,
            'parent' => $barCodeId,
        ]);

    }
}
