<?php

namespace Modules\Subscription\Database\Seeders\versions\v2_7_0;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use DB;
use Modules\Subscription\Entities\{
    Package,
    PackageMeta
};

class PackagesMetaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $packages = [
            'p-starter' => 10,
            'p-premium' => 20,
            'p-platinum' => 30
        ];
        
        foreach ($packages as $key => $value) {
            $package = Package::where('code', $key)->first();
            
            if ($package) {
                DB::table('packages_meta')->upsert([
                    [
                        'package_id' => $package->id,
                        'feature' => 'chatbot',
                        'key' => 'type',
                        'value' => 'number',
                    ],
                    [
                        'package_id' => $package->id,
                        'feature' => 'chatbot',
                        'key' => 'is_value_fixed',
                        'value' => '0',
                    ],
                    [
                        'package_id' => $package->id,
                        'feature' => 'chatbot',
                        'key' => 'title',
                        'value' => 'Chatbot limit',
                    ],
                    [
                        'package_id' => $package->id,
                        'feature' => 'chatbot',
                        'key' => 'title_position',
                        'value' => 'before',
                    ],
                    [
                        'package_id' => $package->id,
                        'feature' => 'chatbot',
                        'key' => 'value',
                        'value' => $value,
                    ],
                    [
                        'package_id' => $package->id,
                        'feature' => 'chatbot',
                        'key' => 'description',
                        'value' => 'Character description will be here',
                    ],
                    [
                        'package_id' => $package->id,
                        'feature' => 'chatbot',
                        'key' => 'is_visible',
                        'value' => '1',
                    ],
                    [
                        'package_id' => $package->id,
                        'feature' => 'chatbot',
                        'key' => 'status',
                        'value' => 'Active',
                    ]
                ], ['package_id', 'feature', 'key']);
            }
        }
        
        $allPackages = Package::get();
        
        foreach ($allPackages as $package) {
            $meta = PackageMeta::where(['package_id' => $package->id, 'feature' => 'chatbot'])->first();
            if (!$meta) {
                DB::table('packages_meta')->upsert([
                    [
                        'package_id' => $package->id,
                        'feature' => 'chatbot',
                        'key' => 'type',
                        'value' => 'number',
                    ],
                    [
                        'package_id' => $package->id,
                        'feature' => 'chatbot',
                        'key' => 'is_value_fixed',
                        'value' => '0',
                    ],
                    [
                        'package_id' => $package->id,
                        'feature' => 'chatbot',
                        'key' => 'title',
                        'value' => 'Chatbot limit',
                    ],
                    [
                        'package_id' => $package->id,
                        'feature' => 'chatbot',
                        'key' => 'title_position',
                        'value' => 'before',
                    ],
                    [
                        'package_id' => $package->id,
                        'feature' => 'chatbot',
                        'key' => 'value',
                        'value' => '0',
                    ],
                    [
                        'package_id' => $package->id,
                        'feature' => 'chatbot',
                        'key' => 'description',
                        'value' => 'Character description will be here',
                    ],
                    [
                        'package_id' => $package->id,
                        'feature' => 'chatbot',
                        'key' => 'is_visible',
                        'value' => '1',
                    ],
                    [
                        'package_id' => $package->id,
                        'feature' => 'chatbot',
                        'key' => 'status',
                        'value' => 'Active',
                    ]
                ], ['package_id', 'feature', 'key']);
            }
        }
    }
}
