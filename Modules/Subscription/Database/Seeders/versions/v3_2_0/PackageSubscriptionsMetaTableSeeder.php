<?php

namespace Modules\Subscription\Database\Seeders\versions\v3_2_0;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use DB;
use Modules\Subscription\Entities\{
    PackageSubscription,
    PackageSubscriptionMeta
};

class PackageSubscriptionsMetaTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $subscription = PackageSubscription::where('code', 'AVSBMF535T')->first();
        
        if ($subscription) {
            DB::table('package_subscriptions_meta')->upsert([
                [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_video',
                        'key' => 'type',
                        'value' => 'number',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_video',
                        'key' => 'is_value_fixed',
                        'value' => '0',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_video',
                        'key' => 'title',
                        'value' => 'Video Limit',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_video',
                        'key' => 'title_position',
                        'value' => 'before',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_video',
                        'key' => 'value',
                        'value' => '30',
                        
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_video',
                        'key' => 'description',
                        'value' => 'Video description will be here',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_video',
                        'key' => 'is_visible',
                        'value' => '0',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_video',
                        'key' => 'status',
                        'value' => 'Active',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_video',
                        'key' => 'usage',
                        'value' => '0',
                    ]
            ], ['type', 'key']);
        }

        $subscriptions = PackageSubscription::where('code', '!=', 'AVSBMF535T')->get();
        
        foreach ($subscriptions as $subscription) {
            $meta = PackageSubscriptionMeta::where(['package_subscription_id' => $subscription->id, 'type' => 'feature_video'])->first();
            if (!$meta) {
                DB::table('package_subscriptions_meta')->upsert([
                    [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_video',
                            'key' => 'type',
                            'value' => 'number',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_video',
                            'key' => 'is_value_fixed',
                            'value' => '0',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_video',
                            'key' => 'title',
                            'value' => 'Video Limit',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_video',
                            'key' => 'title_position',
                            'value' => 'before',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_video',
                            'key' => 'value',
                            'value' => '0',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_video',
                            'key' => 'description',
                            'value' => 'Video description will be here',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_video',
                            'key' => 'is_visible',
                            'value' => '0',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_video',
                            'key' => 'status',
                            'value' => 'Active',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_video',
                            'key' => 'usage',
                            'value' => '0',
                        ]
                ], ['type', 'key']);
            }
        }

    }
}
