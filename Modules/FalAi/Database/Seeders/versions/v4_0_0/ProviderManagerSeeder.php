<?php

namespace Modules\FalAi\Database\Seeders\versions\v4_0_0;

use Illuminate\Database\Seeder;

class ProviderManagerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('preferences')->upsert([
            [
                'category' => 'texttovideo',
                'field' => 'texttovideo_falai',
                'value' => '[{"type":"checkbox","label":"Provider State","name":"status","value":"on","visibility":true},{"type":"text","label":"Provider","name":"provider","value":"falai","visibility":true},{"type":"dropdown","label":"Service","name":"service","value":["text-to-video"],"visibility":true},{"type":"dropdown","label":"Models","name":"model","value":["kling-video-v1-pro","kling-video-v1-standard","kling-video-v1.5-pro","kling-video-v1.6-standard","minimax-video-01","luma-dream-machine","luma-dream-machine-ray-2","luma-dream-machine-ray-2-flash","haiper-video-v2","haiper-video-v2.5-fast","mochi-v1","hunyuan-video"],"visibility":true},{"type":"dropdown","label":"Aspect Ratio","name":"aspect_ratio","value":["16:9","9:16","1:1","4:3","3:4","21:9","9:21"],"visibility":true},{"type":"dropdown","label":"Duration","name":"duration","value":[4,5,6,9,10],"visibility":true},{"type":"dropdown","label":"Camera Control","name":"camera_control","value":["down_back","forward_up","right_turn_forward","left_turn_forward"],"visibility":true},{"type":"dropdown","label":"Resolution","name":"resolution","value":["480p","540p","580p","720p","1080p"],"visibility":true},{"type":"dropdown","label":"Number Of Frames","name":"num_frames","value":[129,85],"visibility":true},{"type":"dropdown","label":"Pro Mode","name":"pro_mode","value":["On","Off"],"visibility":true},{"type":"dropdown","label":"Enable Safety Checker","name":"enable_safety_checker","value":["On","Off"],"visibility":true},{"type":"textarea","label":"Negative Prompt","name":"negative_prompt","value":"Keywords of what you do not wish to see in the output image.","maxlength":10000,"tooltip_limit":150,"placeholder":"Please provide a brief description, it will be displayed on the customer interface. Note that this will be added to the customer panel.","visibility":true}]',
            ]
        ], ['field']);

    }
}
