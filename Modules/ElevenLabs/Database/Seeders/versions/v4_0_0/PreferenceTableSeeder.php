<?php

namespace Modules\ElevenLabs\Database\Seeders\versions\v4_0_0;

use Illuminate\Database\Seeder;

class PreferenceTableSeeder extends Seeder
{
    public function run()
    {
        \DB::table('preferences')->upsert([
            [
                'category' => 'voiceclone',
                'field' => 'voiceclone_elevenlabs',
                'value' => '[{"type":"checkbox","label":"Provider State","name":"status","value":"on","visibility":true},{"type":"text","label":"Provider","name":"provider","value":"elevenlabs","visibility":true},{"type":"dropdown","label":"Remove Background Noise","name":"remove_background_noise","value":["True","False"],"visibility":true},{"type":"textarea","label":"Description","name":"description","value":"How would you like to describe the voice, for example: \'A warm and soothing female voice with an American accent, perfect for storytelling.\'","placeholder":"Please provide a brief description for the placeholder to be displayed on the customer interface. Note that this will be added to the customer panel.","visibility":true,"required":true}]'
            ]
        ], ['field']);
    }
}
