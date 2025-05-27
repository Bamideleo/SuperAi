<?php

namespace Modules\PlagiarismCheck\Database\Seeders\v2_8_0;

use Illuminate\Database\Seeder;

class PreferenceTableSeeder extends Seeder
{
    public function run()
    {
        \DB::table('preferences')->upsert([
            [
                'category' => 'aidetector',
                'field' => 'aidetector_plagiarismcheck',
                'value' => '[{"type":"checkbox","label":"Provider State","name":"status","value":"on","visibility":true},{"type":"text","label":"Provider","name":"provider","value":"plagiarismcheck","visibility":true},{"type":"dropdown","label":"Supported File Types","name":"file_format","value":{"0":"doc","1":"docx","2":"pdf","4":"odt","5":"rtf"},"visibility":false}]',
            ]
        ], ['field']);
    }
}
