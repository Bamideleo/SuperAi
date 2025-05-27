<?php

namespace Modules\ElevenLabs\Database\Seeders\versions\v3_5_0;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VoiceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $data = [
            [
                'voice' => [
                    'name' => 'Aria',
                    'voice_name' => '9BWtsMINqrJLrRacOk9x',
                    'gender' => 'Female',
                    'file_name' => '20250129/954d1fb5ec0df431f87e29682e645bb3.mp3',
                    'status' => 'Active',
                    'providers' => 'elevenlabs',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":36.43359375,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => NULL,
                    'uploaded_by' => 1,
                    'file_size' => 36.43,
                    'file_name' => '20231007/6a0a67163cb2e7b9ab02b84f691d9305.png',
                    'original_file_name' => '100-years-ago-the-figure-of-a-smile-womanoid-reflecting-the-style-of-dress-in-the-23th-century-ele-969506291.png',
                ]
            ],
            [
                'voice' => [
                    'name' => 'Roger',
                    'voice_name' => 'CwhRBWXzGAHq8TQ4Fs17',
                    'gender' => 'Male',
                    'file_name' => '20250129/013d221b0200b2e8622166f0fc334f6d.mp3',
                    'status' => 'Active',
                    'providers' => 'elevenlabs',
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
                    'name' => 'Sarah',
                    'voice_name' => 'EXAVITQu4vr4xnSDxMaL',
                    'gender' => 'Female',
                    'file_name' => '20250129/80438e1c501822b12252aaec2ab95806.mp3',
                    'status' => 'Active',
                    'providers' => 'elevenlabs',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":39.650390625,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => NULL,
                    'uploaded_by' => 1,
                    'file_size' => 39.65,
                    'file_name' => '20231007/e7125b837753faa9de628013f1c42998.png',
                    'original_file_name' => 'beautiful-woman-writer-brown-blonde-brown--eyes-round-frame-glasses-cute-face-ultra-detailed-i-189023692.png',
                ]
            ],
            [
                'voice' => [
                    'name' => 'Laura',
                    'voice_name' => 'FGY2WhTYpPnrIDTdsKH5',
                    'gender' => 'Female',
                    'file_name' => '20250129/8884a6ab5ba892e09d7033d25608e2fa.mp3',
                    'status' => 'Active',
                    'providers' => 'elevenlabs',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":26.9033203125,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => NULL,
                    'uploaded_by' => 1,
                    'file_size' => 26.9,
                    'file_name' => '20231007/940a5da2219e1ff2dd821f2e1dd52505.png',
                    'original_file_name' => 'full-scene-modern-bengali-girl-teenager-girl-normal-saree-long-black-hair-head-and-shoulders-po-656062952.png',
                ]
            ],
            [
                'voice' => [
                    'name' => 'Charlie',
                    'voice_name' => 'IKne3meq5aSn9XLyUdCD',
                    'gender' => 'Male',
                    'file_name' => '20250129/9f91f1202c3c2ca7a6594ac0097aa49b.mp3',
                    'status' => 'Active',
                    'providers' => 'elevenlabs',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":25.34765625,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => NULL,
                    'uploaded_by' => 1,
                    'file_size' => 25.35,
                    'file_name' => '20231007/bafb7886bc935b538fd4625c9a56167e.png',
                    'original_file_name' => 'a-handsome-young-man-of-age-28-wearing-suit-looking-forwardmasculineconfidentdark-soft-background-892812288.png',
                ]
            ],
            [
                'voice' => [
                    'name' => 'George',
                    'voice_name' => 'JBFqnCBsd6RMkjVDRZzb',
                    'gender' => 'Male',
                    'file_name' => '20250129/05b9574a607d96021a9701b5162c7e69.mp3',
                    'status' => 'Active',
                    'providers' => 'elevenlabs',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":27.1220703125,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => NULL,
                    'uploaded_by' => 1,
                    'file_size' => 27.12,
                    'file_name' => '20231007/e910d5fdf52c2ac080289e1223217fff.png',
                    'original_file_name' => 'a-moroccan-young-man-in-peasant-clothes-30-years-old-with-good-features-appears-to-have-a-kind-he-504078789.png',
                ]
            ],
            [
                'voice' => [
                    'name' => 'Callum',
                    'voice_name' => 'N2lVS1w4EtoT3dr4eOWO',
                    'gender' => 'Male',
                    'file_name' => '20250129/0501b378b903d4cbb6a8804c1634db21.mp3',
                    'status' => 'Active',
                    'providers' => 'elevenlabs',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":21.673828125,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => NULL,
                    'uploaded_by' => 1,
                    'file_name' => '20231207/a6d17870a845df5bc95ee0d7cb4d6cc8.png',
                    'file_size' => 21.67,
                    'original_file_name' => 'conventionally-attractive-twenty-five-year-old-american-man-messy-light-brown-hair-blue-eyes-fit - 176165787.png',
                ]
            ],
            [
                'voice' => [
                    'name' => 'Liam',
                    'voice_name' => 'TX3LPaxmHKxFdv7VOQHJ',
                    'gender' => 'Male',
                    'file_name' => '20250129/c84ea9cc3545fde00f40b4fdd06c87c5.mp3',
                    'status' => 'Active',
                    'providers' => 'elevenlabs',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":32.6083984375,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => NULL,
                    'uploaded_by' => 1,
                    'file_name' => '20231207/a553199ca0497038bde8699e2f70a857.png',
                    'file_size' => 32.61,
                    'original_file_name' => 'good-looking-young-male-as-a-character-in-a-comedy-moviemovie-scene-funnya-highly-detailed-fa.png',
                ]
            ],
            [
                'voice' => [
                    'name' => 'Charlotte',
                    'voice_name' => 'XB0fDUnXU5powFXDhCwa',
                    'gender' => 'Female',
                    'file_name' => '20250129/3effa93c035a0a56364b49fa1e10b538.mp3',
                    'status' => 'Active',
                    'providers' => 'elevenlabs',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":22.537109375,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => NULL,
                    'uploaded_by' => 1,
                    'file_size' => 22.54,
                    'file_name' => '20231007/0beb148526429036d054618558439ece.png',
                    'original_file_name' => 'portrait-of-an-adult-woman-40-yo-chromakey-beautiful-detailed-intricate-insanely-detailed-octane--229190450.png',
                ]
            ],
            [
                'voice' => [
                    'name' => 'Alice',
                    'voice_name' => 'Xb7hH8MSUJpSbSDYk0k2',
                    'gender' => 'Female',
                    'file_name' => '20250129/b2ee43f0fc12178f92ea1563eff157d9.mp3',
                    'status' => 'Active',
                    'providers' => 'elevenlabs',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":24.5302734375,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => NULL,
                    'uploaded_by' => 1,
                    'file_name' => '20231207/43bfb22d5132665241162a919fc51f47.png',
                    'file_size' => 24.53,
                    'original_file_name' => 'perfect-face-beautiful-swedish-army-woman-m90-camoflage-outfit-swedish-flag - brunette-hair-idea-436053226.png',
                ]
                
            ],
            [
                'voice' => [
                    'name' => 'Matilda',
                    'voice_name' => 'XrExE9yKIg1WjnnlVkGX',
                    'gender' => 'Female',
                    'file_name' => '20250129/8e9b5015e0b14d2e32162da12043bdf1.mp3',
                    'status' => 'Active',
                    'providers' => 'elevenlabs',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":17.376953125,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => NULL,
                    'uploaded_by' => 1,
                    'file_name' => '20231207/6e4e6ef0d9e271617258b239501d6594.png',
                    'file_size' => 17.38,
                    'original_file_name' => 'women-brown-hair-small-eye-straight-hair-front-low-nose-white-shirts-brown-eye-trending-on-a-443234400.png',
                ]
            ],
            [
                'voice' => [
                    'name' => 'Will',
                    'voice_name' => 'bIHbv24MWmeRgasZH58o',
                    'gender' => 'Male',
                    'file_name' => '20250129/2b18dd18ec2fbcc5b964f0ec6c039997.mp3',
                    'status' => 'Active',
                    'providers' => 'elevenlabs',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":24.4404296875,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => NULL,
                    'uploaded_by' => 1,
                    'file_size' => 24.44,
                    'file_name' => '20231007/add676aa81f7b015cca6b2ae2d3bb210.png',
                    'original_file_name' => 'a-ultra-realistic-portrait-of-a-charismatic-40-year-old-man-named-luiz-da-silva-perfect-composition-534792854.png',
                ]
            ],
            [
                'voice' => [
                    'name' => 'Jessica',
                    'voice_name' => 'cgSgspJ2msm6clMCkdW9',
                    'gender' => 'Female',
                    'file_name' => '20250129/a90e5c9136fca18e249f3fa03ee3d34c.mp3',
                    'status' => 'Active',
                    'providers' => 'elevenlabs',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":35.322265625,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => NULL,
                    'uploaded_by' => 1,
                    'file_size' => 35.32,
                    'file_name' => '20231007/e4c0f1a201e9ae05a16d3086175103af.png',
                    'original_file_name' => 'xi-jin-ping-clear-bright-eyes-head-and-shoulders-portrait-detailed-and-intricate-environment-4k-7860793.png',
                ]
                
            ],
            [
                'voice' => [
                    'name' => 'Eric',
                    'voice_name' => 'cjVigY5qzO86Huf0OWal',
                    'gender' => 'Male',
                    'file_name' => '20250129/5d0c6b3e8ddbe7a820138182133cc877.mp3',
                    'status' => 'Active',
                    'providers' => 'elevenlabs',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":18.0283203125,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => NULL,
                    'uploaded_by' => 1,
                    'file_name' => '20231207/e80a86d1f709b6397efabb26f4732494.png',
                    'file_size' => 18.03,
                    'original_file_name' => 'an-alluring-and-fierce-israeli-man-with-short-blond-hair-and-brown-eyes-exuding-confidence-and-st-246686631.png',
                ]
            ],
            [
                'voice' => [
                    'name' => 'Chris',
                    'voice_name' => 'iP95p4xoKVk53GoZ742B',
                    'gender' => 'Male',
                    'file_name' => '20250129/5a18a6037989db188282b850c5de41aa.mp3',
                    'status' => 'Active',
                    'providers' => 'elevenlabs',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":20.0849609375,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => NULL,
                    'uploaded_by' => 1,
                    'file_name' => '20231207/5916badf5d574cfd7d27fdab8ed0fc32.png',
                    'file_size' => 20.08,
                    'original_file_name' => 'cinematic-photo - photography-model-shot-man-with-beard-and-short-hair-employer-in-nuclear-war-156508374.png',
                ]
            ],
            [
                'voice' => [
                    'name' => 'Brian',
                    'voice_name' => 'nPczCjzI2devNBz1zQrb',
                    'gender' => 'Male',
                    'file_name' => '20250129/7f7390cc36dea5097d5994a8eda14d33.mp3',
                    'status' => 'Active',
                    'providers' => 'elevenlabs',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":23.123046875,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => NULL,
                    'uploaded_by' => 1,
                    'file_name' => '20231207/91b1d2097402cc5b9b24e88ed47300fe.png',
                    'file_size' => 23.12,
                    'original_file_name' => 'handsome-twenty-five-year-old-caucasian-man-with-a-tan-short-neat-beard-brown-eyes-shaggy-dirty-b-919261148.png',
                ]
            ],
            [
                'voice' => [
                    'name' => 'Daniel',
                    'voice_name' => 'onwK4e9ZLuTAKqWW03F9',
                    'gender' => 'Male',
                    'file_name' => '20250129/078ac0c68da623583d7c162803b16763.mp3"',
                    'status' => 'Active',
                    'providers' => 'elevenlabs',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":24.4404296875,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => NULL,
                    'uploaded_by' => 1,
                    'file_size' => 24.44,
                    'file_name' => '20231007/add676aa81f7b015cca6b2ae2d3bb210.png',
                    'original_file_name' => 'a-ultra-realistic-portrait-of-a-charismatic-40-year-old-man-named-luiz-da-silva-perfect-composition-534792854.png',
                ]
                
            ],
            [
                'voice' => [
                    'name' => 'Lily',
                    'voice_name' => 'pFZP5JQG7iQjIQuC4Bku',
                    'gender' => 'Female',
                    'file_name' => '20250129/0218c6b346467f6e06e9a8b597126698.mp3',
                    'status' => 'Active',
                    'providers' => 'elevenlabs',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":39.650390625,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => NULL,
                    'uploaded_by' => 1,
                    'file_size' => 39.65,
                    'file_name' => '20231007/e7125b837753faa9de628013f1c42998.png',
                    'original_file_name' => 'beautiful-woman-writer-brown-blonde-brown--eyes-round-frame-glasses-cute-face-ultra-detailed-i-189023692.png',
                ]
                
            ],
            [
                'voice' => [
                    'name' => 'Bill',
                    'voice_name' => 'pqHfZKP75CvOlQylNhV4',
                    'gender' => 'Male',
                    'file_name' => '20250129/0e229051e831d010a538124dc0de6566.mp3',
                    'status' => 'Active',
                    'providers' => 'elevenlabs',
                    'language_code' => 'en',
                ],
                'file' => [
                    'params' => '{"size":29.783203125,"type":"png"}',
                    'object_type' => 'png',
                    'object_id' => NULL,
                    'uploaded_by' => 1,
                    'file_size' => 29.78,
                    'file_name' => '20231007/612121884d8f0902a50b7bbeeb42198d.png',
                    'original_file_name' => 'olpntng-style-full-head-photorealistic-photorealism-golden-ratio-present-day-attiretrendin-3905584.png',
                ]
            ],
        ];
        
        foreach ($data as $entry) {
            DB::table('voices')->upsert(
                [$entry['voice']],
                ['name'],
                ['voice_name']
            );
        
            // Get the voice ID (either from the upsert or the existing record)
            $voiceId = DB::table('voices')->where('name', $entry['voice']['name'])->value('id');
        
            // Upsert file data
            $fileId = DB::table('files')->insertGetId($entry['file']);
        
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
