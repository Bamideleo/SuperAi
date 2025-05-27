<?php

namespace Modules\Subscription\Database\Seeders\versions\v2_7_0;

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
                        'type' => 'feature_chatbot',
                        'key' => 'type',
                        'value' => 'number',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_chatbot',
                        'key' => 'is_value_fixed',
                        'value' => '0',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_chatbot',
                        'key' => 'title',
                        'value' => 'Chatbot Limit',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_chatbot',
                        'key' => 'title_position',
                        'value' => 'before',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_chatbot',
                        'key' => 'value',
                        'value' => '30',
                        
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_chatbot',
                        'key' => 'description',
                        'value' => 'Character description will be here',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_chatbot',
                        'key' => 'is_visible',
                        'value' => '0',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_chatbot',
                        'key' => 'status',
                        'value' => 'Active',
                    ],
                    [
                        'package_subscription_id' => $subscription->id,
                        'type' => 'feature_chatbot',
                        'key' => 'usage',
                        'value' => '0',
                    ]
            ], ['type', 'key']);
        }

        $subscriptions = PackageSubscription::where('code', '!=', 'AVSBMF535T')->get();
        
        foreach ($subscriptions as $subscription) {
            $meta = PackageSubscriptionMeta::where(['package_subscription_id' => $subscription->id, 'type' => 'feature_chatbot'])->first();
            if (!$meta) {
                DB::table('package_subscriptions_meta')->upsert([
                    [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_chatbot',
                            'key' => 'type',
                            'value' => 'number',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_chatbot',
                            'key' => 'is_value_fixed',
                            'value' => '0',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_chatbot',
                            'key' => 'title',
                            'value' => 'Chatbot Limit',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_chatbot',
                            'key' => 'title_position',
                            'value' => 'before',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_chatbot',
                            'key' => 'value',
                            'value' => '0',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_chatbot',
                            'key' => 'description',
                            'value' => 'Character description will be here',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_chatbot',
                            'key' => 'is_visible',
                            'value' => '0',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_chatbot',
                            'key' => 'status',
                            'value' => 'Active',
                        ],
                        [
                            'package_subscription_id' => $subscription->id,
                            'type' => 'feature_chatbot',
                            'key' => 'usage',
                            'value' => '0',
                        ]
                ], ['type', 'key']);
            }
        }

    }
}
