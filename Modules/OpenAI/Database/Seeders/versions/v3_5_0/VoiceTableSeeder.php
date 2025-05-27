<?php

namespace Modules\OpenAI\Database\Seeders\versions\v3_5_0;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VoiceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('voices')->whereNull('providers')->orWhere('providers', '')->update(['providers' => 'google']);

        $data = [
            [
                'voice' => [
                    'name' => 'Ethan Parker',
                    'voice_name' => 'alloy',
                    'gender' => 'Male',
                    'file_name' => '20240225/929cd09396dec0c965376d75e616255d.mp3',
                    'status' => 'Active',
                    'providers' => 'openai',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":16.763671875,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => NULL,
                    'uploaded_by' => 1,
                    'file_name' => '20240110/94b10b3b2419e9c8ae6952a1a3a7b5df.png',
                    'file_size' => 16.76,
                    'original_file_name' => 'a-handsome-20-year-old-guy-in-full-height-brown-hair-brown-eyes-freckles-on-his-face-angular-app-257326473.png',
                ],
            ],
            [
                'voice' => [
                    'name' => 'Caleb Mitchell',
                    'voice_name' => 'echo',
                    'gender' => 'Male',
                    'file_name' => '20240225/68d64183f163eee1fea7120397500104.mp3',
                    'status' => 'Active',
                    'providers' => 'openai',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":13.84375,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => null,
                    'uploaded_by' => 1,
                    'file_name' => '20240110/21182caa8c6d76c22f5295e48cb6cd62.png',
                    'file_size' => 13.84,
                    'original_file_name' => 'a-photo-realistic-portrait-of-a-young-brazilian-man-beard-character-20yr-old-happy-932249148.png',
                ],
            ],
            [
                'voice' => [
                    'name' => 'Lucas Bennett',
                    'voice_name' => 'fable',
                    'gender' => 'Male',
                    'file_name' => '20240225/1fec1847d2cc6de9595b256673605874.mp3',
                    'status' => 'Active',
                    'providers' => 'openai',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":9.951171875,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => null,
                    'uploaded_by' => 1,
                    'file_name' => '20240110/694a124e361dbd1733556a97b5c42116.png',
                    'file_size' => 9.95,
                    'original_file_name' => 'young-male-students-realistic-highly-detailed-8k-808049739.png',
                ],
            ],
            [
                'voice' => [
                    'name' => 'Mason Anderson',
                    'voice_name' => 'onyx',
                    'gender' => 'Male',
                    'file_name' => '20240225/2bccf1aa0586e188c8a0fac2e75f92dc.mp3',
                    'status' => 'Active',
                    'providers' => 'openai',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":12.4931640625,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => null,
                    'uploaded_by' => 1,
                    'file_name' => '20240110/0e2da067ac3242acf3df1126f963e32d.png',
                    'file_size' => 12.49,
                    'original_file_name' => 'sexy-man-16-years-balkan-soccer-player-ultra-realistic-real-face-4k-face-in-center-grey-back-134585987.png',
                ],
            ],
            [
                'voice' => [
                    'name' => 'Isabella Cruz',
                    'voice_name' => 'nova',
                    'gender' => 'Female',
                    'file_name' => '20240225/eea878f17d6e4818c702b2d8e7dd425f.mp3',
                    'status' => 'Active',
                    'providers' => 'openai',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":13.69140625,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => null,
                    'uploaded_by' => 1,
                    'file_name' => '20240110/778767695ddd38831879ffe286e656d9.png',
                    'file_size' => 13.69,
                    'original_file_name' => '90s-fashion-inspired-portrait-close-up-photo-of-a-high-school-girl-with-fair-skin-backpack-secured-404148249.png',
                ],
            ],
            [
                'voice' => [
                    'name' => 'Harper Nguyen',
                    'voice_name' => 'shimmer',
                    'gender' => 'Female',
                    'file_name' => '20240225/d7405fa1df584b5da80b13c0eb179cca.mp3',
                    'status' => 'Active',
                    'providers' => 'openai',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":13.734375,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => null,
                    'uploaded_by' => 1,
                    'file_name' => '20240110/957b55d27e1f12e0e5c285bf46050519.png',
                    'file_size' => 13.73,
                    'original_file_name' => 'a-teenage-girl-with-black-hair-and-a-mark-on-her-wrist-wearing-a-school-uniform-and-a-backpack-she-376572093.png',
                ],
            ],
        ];
        
        foreach ($data as $entry) {
            DB::table('voices')->upsert(
                [$entry['voice']],
                ['name'],
                ['voice_name', 'gender', 'file_name', 'status', 'providers', 'language_code']
            );
        
            // Get the voice ID (either from the upsert or the existing record)
            $voiceId = DB::table('voices')->where('name', $entry['voice']['name'])->value('id');
        
            // Upsert file data
            DB::table('files')->upsert(
                [$entry['file']],
                ['file_name'],
                ['params', 'object_type', 'uploaded_by', 'file_size', 'original_file_name']
            );
        
            $fileId = DB::table('files')->where('file_name', $entry['file']['file_name'])->value('id');
            
            if ($voiceId) {
                // Insert into object_files table
                DB::table('object_files')->upsert(
                    [
                        'object_type' => 'voices',
                        'object_id' => $voiceId,
                        'file_id' => $fileId,
                    ],
                    ['object_type', 'object_id', 'file_id'],
                    []
                );
            }
        }
        
    }
}
