<?php

namespace Modules\Subscription\Database\Seeders;

use Illuminate\Database\Seeder;

class PackageSubscriptionsMetaTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {



        \DB::table('package_subscriptions_meta')->upsert(array (
            0 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_word',
                'key' => 'type',
                'value' => 'number',
            ),
            1 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_word',
                'key' => 'is_value_fixed',
                'value' => '0',
            ),
            2 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_word',
                'key' => 'title',
                'value' => 'Word limit',
            ),
            3 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_word',
                'key' => 'title_position',
                'value' => 'before',
            ),
            4 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_word',
                'key' => 'value',
                'value' => '200000',
            ),
            5 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_word',
                'key' => 'description',
                'value' => 'Word description will be here',
            ),
            6 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_word',
                'key' => 'is_visible',
                'value' => '1',
            ),
            7 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_word',
                'key' => 'status',
                'value' => 'Active',
            ),
            8 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_word',
                'key' => 'usage',
                'value' => '7491',
            ),
            9 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_image',
                'key' => 'type',
                'value' => 'number',
            ),
            10 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_image',
                'key' => 'is_value_fixed',
                'value' => '0',
            ),
            11 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_image',
                'key' => 'title',
                'value' => 'Image limit',
            ),
            12 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_image',
                'key' => 'title_position',
                'value' => 'before',
            ),
            13 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_image',
                'key' => 'value',
                'value' => '1000',
            ),
            14 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_image',
                'key' => 'description',
                'value' => 'Image description will be here',
            ),
            15 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_image',
                'key' => 'is_visible',
                'value' => '1',
            ),
            16 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_image',
                'key' => 'status',
                'value' => 'Active',
            ),
            17 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_image',
                'key' => 'usage',
                'value' => '0',
            ),
            18 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_image-resolution',
                'key' => 'type',
                'value' => 'number',
            ),
            19 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_image-resolution',
                'key' => 'is_value_fixed',
                'value' => '1',
            ),
            20 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_image-resolution',
                'key' => 'title',
                'value' => 'Max Image Resolution',
            ),
            21 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_image-resolution',
                'key' => 'title_position',
                'value' => 'before',
            ),
            22 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_image-resolution',
                'key' => 'value',
                'value' => '1024',
            ),
            23 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_image-resolution',
                'key' => 'description',
                'value' => 'Image description will be here',
            ),
            24 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_image-resolution',
                'key' => 'is_visible',
                'value' => '1',
            ),
            25 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_image-resolution',
                'key' => 'status',
                'value' => 'Active',
            ),
            26 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_image-resolution',
                'key' => 'usage',
                'value' => '0',
            ),
            27 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom1',
                'key' => 'type',
                'value' => 'string',
            ),
            28 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom1',
                'key' => 'title',
            'value' => 'Artifism Bot (ChatGPT-like chatbot)',
            ),
            29 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom1',
                'key' => 'description',
                'value' => NULL,
            ),
            30 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom1',
                'key' => 'is_visible',
                'value' => '1',
            ),
            31 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom1',
                'key' => 'status',
                'value' => 'Active',
            ),
            32 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom1',
                'key' => 'usage',
                'value' => '0',
            ),
            33 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom2',
                'key' => 'type',
                'value' => 'string',
            ),
            34 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom2',
                'key' => 'title',
                'value' => '100+ AI Templates',
            ),
            35 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom2',
                'key' => 'description',
                'value' => NULL,
            ),
            36 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom2',
                'key' => 'is_visible',
                'value' => '1',
            ),
            37 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom2',
                'key' => 'status',
                'value' => 'Active',
            ),
            38 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom2',
                'key' => 'usage',
                'value' => '0',
            ),
            39 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom3',
                'key' => 'type',
                'value' => 'string',
            ),
            40 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom3',
                'key' => 'title',
                'value' => '25+ Languages',
            ),
            41 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom3',
                'key' => 'description',
                'value' => NULL,
            ),
            42 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom3',
                'key' => 'is_visible',
                'value' => '1',
            ),
            43 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom3',
                'key' => 'status',
                'value' => 'Active',
            ),
            44 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom3',
                'key' => 'usage',
                'value' => '0',
            ),
            45 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom4',
                'key' => 'type',
                'value' => 'string',
            ),
            46 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom4',
                'key' => 'title',
                'value' => 'Landing Page Generator',
            ),
            47 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom4',
                'key' => 'description',
                'value' => NULL,
            ),
            48 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom4',
                'key' => 'is_visible',
                'value' => '1',
            ),
            49 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom4',
                'key' => 'status',
                'value' => 'Active',
            ),
            50 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom4',
                'key' => 'usage',
                'value' => '0',
            ),
            51 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom5',
                'key' => 'type',
                'value' => 'string',
            ),
            52 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom5',
                'key' => 'title',
                'value' => '1-Click WordPress Export',
            ),
            53 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom5',
                'key' => 'description',
                'value' => NULL,
            ),
            54 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom5',
                'key' => 'is_visible',
                'value' => '1',
            ),
            55 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom5',
                'key' => 'status',
                'value' => 'Active',
            ),
            56 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom5',
                'key' => 'usage',
                'value' => '0',
            ),
            57 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom6',
                'key' => 'type',
                'value' => 'string',
            ),
            58 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom6',
                'key' => 'title',
                'value' => 'Zapier Integration',
            ),
            59 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom6',
                'key' => 'description',
                'value' => NULL,
            ),
            60 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom6',
                'key' => 'is_visible',
                'value' => '1',
            ),
            61 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom6',
                'key' => 'status',
                'value' => 'Active',
            ),
            62 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom6',
                'key' => 'usage',
                'value' => '0',
            ),
            63 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom7',
                'key' => 'type',
                'value' => 'string',
            ),
            64 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom7',
                'key' => 'title',
                'value' => 'Browser extensions',
            ),
            65 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom7',
                'key' => 'description',
                'value' => NULL,
            ),
            66 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom7',
                'key' => 'is_visible',
                'value' => '1',
            ),
            67 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom7',
                'key' => 'status',
                'value' => 'Active',
            ),
            68 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom7',
                'key' => 'usage',
                'value' => '0',
            ),
            69 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom8',
                'key' => 'type',
                'value' => 'string',
            ),
            70 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom8',
                'key' => 'title',
                'value' => 'AI Article Writer',
            ),
            71 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom8',
                'key' => 'description',
                'value' => NULL,
            ),
            72 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom8',
                'key' => 'is_visible',
                'value' => '1',
            ),
            73 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom8',
                'key' => 'status',
                'value' => 'Active',
            ),
            74 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom8',
                'key' => 'usage',
                'value' => '0',
            ),
            75 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom9',
                'key' => 'type',
                'value' => 'string',
            ),
            76 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom9',
                'key' => 'title',
            'value' => 'Sonic Editor (Google Docs like Editor)',
            ),
            77 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom9',
                'key' => 'description',
                'value' => NULL,
            ),
            78 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom9',
                'key' => 'is_visible',
                'value' => '1',
            ),
            79 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom9',
                'key' => 'status',
                'value' => 'Active',
            ),
            80 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom9',
                'key' => 'usage',
                'value' => '0',
            ),
            81 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom10',
                'key' => 'type',
                'value' => 'string',
            ),
            82 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom10',
                'key' => 'title',
                'value' => 'API Access',
            ),
            83 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom10',
                'key' => 'description',
                'value' => NULL,
            ),
            84 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom10',
                'key' => 'is_visible',
                'value' => '1',
            ),
            85 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom10',
                'key' => 'status',
                'value' => 'Active',
            ),
            86 =>
            array (
                'package_subscription_id' => 1,
                'type' => 'feature_custom10',
                'key' => 'usage',
                'value' => '0',
            ),
            87 =>
            array (
                'package_subscription_id' => 1,
                'type' => '',
                'key' => 'duration',
                'value' => NULL,
            ),
            88 =>
            array (
                'package_subscription_id' => 1,
                'type' => '',
                'key' => 'trial',
                'value' => NULL,
            ),
            89 =>
            array (
                'package_subscription_id' => 1,
                'type' => '',
                'key' => 'usecaseCategory',
                'value' => '["1","2","3","4","5","6","8","7","9"]',
            ),
            90 =>
            array (
                'package_subscription_id' => 1,
                'type' => '',
                'key' => 'usecaseTemplate',
                'value' => '["blog-ideas-outlines","blog-post-writing","story-writing","google-ad-copy","facebook-ad-copy","keyword-generator","keyword-extractor","seo-meta-title-details","marketing-copy-strategies","landing-page-website-copy","amazon-product-outlines","product-description","product-reviews-responders","linkedin-profile-copy","personal-bio","email-writing","call-to-action","business-ideas-strategies","brand-name","tagline-headline","content-improver","content-rephrase","text-summarizer","cv-resume-cover-letter","job-description","company-description","questions-answers","interview-questions","aida-framework","pas-framework","explain-it-to-a-child","sms-notifications","tweet-generator","video-scripts","youtube-descriptions","youtube-ideas-outlines","poetry"]',
            ),
        ),['package_subscription_id', 'type', 'key']);


    }
}
