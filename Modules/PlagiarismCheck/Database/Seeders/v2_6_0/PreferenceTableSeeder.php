<?php

namespace Modules\PlagiarismCheck\Database\Seeders\v2_6_0;

use Illuminate\Database\Seeder;

class PreferenceTableSeeder extends Seeder
{
    public function run()
    {
        \DB::table('preferences')->upsert([
            [
                'category' => 'plagiarism',
                'field' => 'plagiarism_plagiarismcheck',
                'value' => '[{"type":"checkbox","label":"Provider State","name":"status","value":"on","visibility":true},{"type":"text","label":"Provider","name":"provider","value":"plagiarismcheck","visibility":true}]',
            ]
        ], ['field']);
    }
}
