<?php

namespace Modules\Subscription\Database\Seeders\versions\v2_6_0;

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
                        'type' => 'feature_page',
                        'key' => 'type',
                        'value' => 'number',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_page',
                        'key' => 'is_value_fixed',
                        'value' => '0',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_page',
                        'key' => 'title',
                        'value' => 'Page Limit',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_page',
                        'key' => 'title_position',
                        'value' => 'before',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_page',
                        'key' => 'value',
                        'value' => '30',
                        
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_page',
                        'key' => 'description',
                        'value' => 'Page description will be here',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_page',
                        'key' => 'is_visible',
                        'value' => '0',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_page',
                        'key' => 'status',
                        'value' => 'Active',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_page',
                        'key' => 'usage',
                        'value' => '0',
                    ]
            ], ['type', 'key']);
        }

        $subscriptions = PackageSubscription::where('code', '!=', 'AVSBMF535T')->get();
        
        foreach ($subscriptions as $subscription) {
            $meta = PackageSubscriptionMeta::where(['package_subscription_id' => $subscription->id, 'type' => 'feature_page'])->first();
            if (!$meta) {
                DB::table('package_subscriptions_meta')->upsert([
                    [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_page',
                            'key' => 'type',
                            'value' => 'number',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_page',
                            'key' => 'is_value_fixed',
                            'value' => '0',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_page',
                            'key' => 'title',
                            'value' => 'Page Limit',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_page',
                            'key' => 'title_position',
                            'value' => 'before',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_page',
                            'key' => 'value',
                            'value' => '0',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_page',
                            'key' => 'description',
                            'value' => 'Page description will be here',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_page',
                            'key' => 'is_visible',
                            'value' => '0',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_page',
                            'key' => 'status',
                            'value' => 'Active',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_page',
                            'key' => 'usage',
                            'value' => '0',
                        ]
                ], ['type', 'key']);
            }
        }

    }
}
