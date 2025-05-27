<?php

namespace Modules\OpenAI\Database\Seeders\versions\v3_5_0;

use Illuminate\Database\Seeder;
use DB;

class PreferencesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        DB::table('preferences')->upsert([
            [
                'category' => 'voiceover',
                'field' => 'voiceover_google',
                'value' => '[{"type":"checkbox","label":"Provider State","name":"status","value":"on","visibility":true},{"type":"text","label":"Provider","name":"provider","value":"google","visibility":true},{"type":"integer","label":"Maximum Text Blocks Limit","name":"conversation_limit","value":"4","visibility":true},{"type":"dropdown","label":"Languages","name":"language","value":["English","Bengali","French","Chinese","Arabic","Bulgarian","Catalan","Dutch","Russian","Spanish","Portuguese","Polish","German","Sweden"],"visibility":true},{"type":"dropdown","label":"Volumes","name":"volume","value":["-6.00","0.00","6.00"],"default_value":"0.00","visibility":true},{"type":"dropdown","label":"Pitches","name":"pitch","value":["-20.00","0.00","20.00"],"default_value":"0.00","visibility":true},{"type":"dropdown","label":"Speeds","name":"speed","value":["0.25","0.50","1.00","2.00","4.00"],"default_value":"1.00","visibility":true},{"type":"dropdown","label":"Pauses","name":"pause","value":["0s","1s","2s","3s","4s","5s"],"default_value":"0s","visibility":true},{"type":"dropdown","label":"Audio Effect","name":"audio_effect","value":["wearable-class-device","handset-class-device","headphone-class-device","small-bluetooth-speaker-class-device","medium-bluetooth-speaker-class-device","large-home-entertainment-class-device","large-automotive-class-device","telephony-class-application"],"default_value":"wearable-class-device","visibility":true},{"type":"dropdown","label":"Converted To","name":"target_format","value":["MP3","WAV","OGG"],"default_value":"MP3","visibility":true}]',
            ],
        ], ['field']);
    }
}
