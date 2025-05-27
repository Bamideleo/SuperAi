<?php

namespace Modules\Subscription\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PackagesMetaTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {



        \DB::table('packages_meta')->upsert(array (
            0 =>
            array (
                'package_id' => 8,
                'feature' => '',
                'key' => 'duration',
                'value' => NULL,
            ),
            1 =>
            array (
                'package_id' => 8,
                'feature' => '',
                'key' => 'usecaseCategory',
                'value' => '["1"]',
            ),
            2 =>
            array (
                'package_id' => 8,
                'feature' => '',
                'key' => 'usecaseTemplate',
                'value' => '["google-ad-copy","facebook-ad-copy","keyword-generator","keyword-extractor","seo-meta-title-details","marketing-copy-strategies"]',
            ),
            3 =>
            array (
                'package_id' => 8,
                'feature' => 'word',
                'key' => 'type',
                'value' => 'number',
            ),
            4 =>
            array (
                'package_id' => 8,
                'feature' => 'word',
                'key' => 'is_value_fixed',
                'value' => '0',
            ),
            5 =>
            array (
                'package_id' => 8,
                'feature' => 'word',
                'key' => 'title',
                'value' => 'Word limit',
            ),
            6 =>
            array (
                'package_id' => 8,
                'feature' => 'word',
                'key' => 'title_position',
                'value' => 'before',
            ),
            7 =>
            array (
                'package_id' => 8,
                'feature' => 'word',
                'key' => 'value',
                'value' => '50000',
            ),
            8 =>
            array (
                'package_id' => 8,
                'feature' => 'word',
                'key' => 'description',
                'value' => 'Word description will be here',
            ),
            9 =>
            array (
                'package_id' => 8,
                'feature' => 'word',
                'key' => 'is_visible',
                'value' => '1',
            ),
            10 =>
            array (
                'package_id' => 8,
                'feature' => 'word',
                'key' => 'status',
                'value' => 'Active',
            ),
            11 =>
            array (
                'package_id' => 8,
                'feature' => 'image',
                'key' => 'type',
                'value' => 'number',
            ),
            12 =>
            array (
                'package_id' => 8,
                'feature' => 'image',
                'key' => 'is_value_fixed',
                'value' => '0',
            ),
            13 =>
            array (
                'package_id' => 8,
                'feature' => 'image',
                'key' => 'title',
                'value' => 'Image limit',
            ),
            14 =>
            array (
                'package_id' => 8,
                'feature' => 'image',
                'key' => 'title_position',
                'value' => 'before',
            ),
            15 =>
            array (
                'package_id' => 8,
                'feature' => 'image',
                'key' => 'value',
                'value' => '200',
            ),
            16 =>
            array (
                'package_id' => 8,
                'feature' => 'image',
                'key' => 'description',
                'value' => 'Image description will be here',
            ),
            17 =>
            array (
                'package_id' => 8,
                'feature' => 'image',
                'key' => 'is_visible',
                'value' => '1',
            ),
            18 =>
            array (
                'package_id' => 8,
                'feature' => 'image',
                'key' => 'status',
                'value' => 'Active',
            ),
            19 =>
            array (
                'package_id' => 8,
                'feature' => 'image-resolution',
                'key' => 'type',
                'value' => 'number',
            ),
            20 =>
            array (
                'package_id' => 8,
                'feature' => 'image-resolution',
                'key' => 'is_value_fixed',
                'value' => '1',
            ),
            21 =>
            array (
                'package_id' => 8,
                'feature' => 'image-resolution',
                'key' => 'title',
                'value' => 'Max Image Resolution',
            ),
            22 =>
            array (
                'package_id' => 8,
                'feature' => 'image-resolution',
                'key' => 'title_position',
                'value' => 'before',
            ),
            23 =>
            array (
                'package_id' => 8,
                'feature' => 'image-resolution',
                'key' => 'value',
                'value' => '256',
            ),
            24 =>
            array (
                'package_id' => 8,
                'feature' => 'image-resolution',
                'key' => 'description',
                'value' => 'Image description will be here',
            ),
            25 =>
            array (
                'package_id' => 8,
                'feature' => 'image-resolution',
                'key' => 'is_visible',
                'value' => '1',
            ),
            26 =>
            array (
                'package_id' => 8,
                'feature' => 'image-resolution',
                'key' => 'status',
                'value' => 'Active',
            ),
            27 =>
            array (
                'package_id' => 8,
                'feature' => 'custom1',
                'key' => 'type',
                'value' => 'string',
            ),
            28 =>
            array (
                'package_id' => 8,
                'feature' => 'custom1',
                'key' => 'title',
                'value' => 'Al Templates',
            ),
            29 =>
            array (
                'package_id' => 8,
                'feature' => 'custom1',
                'key' => 'description',
                'value' => NULL,
            ),
            30 =>
            array (
                'package_id' => 8,
                'feature' => 'custom1',
                'key' => 'is_visible',
                'value' => '1',
            ),
            31 =>
            array (
                'package_id' => 8,
                'feature' => 'custom1',
                'key' => 'status',
                'value' => 'Active',
            ),
            32 =>
            array (
                'package_id' => 8,
                'feature' => 'custom2',
                'key' => 'type',
                'value' => 'string',
            ),
            33 =>
            array (
                'package_id' => 8,
                'feature' => 'custom2',
                'key' => 'title',
                'value' => '10 Languages',
            ),
            34 =>
            array (
                'package_id' => 8,
                'feature' => 'custom2',
                'key' => 'description',
                'value' => NULL,
            ),
            35 =>
            array (
                'package_id' => 8,
                'feature' => 'custom2',
                'key' => 'is_visible',
                'value' => '1',
            ),
            36 =>
            array (
                'package_id' => 8,
                'feature' => 'custom2',
                'key' => 'status',
                'value' => 'Active',
            ),
            37 =>
            array (
                'package_id' => 8,
                'feature' => 'custom3',
                'key' => 'type',
                'value' => 'string',
            ),
            38 =>
            array (
                'package_id' => 8,
                'feature' => 'custom3',
                'key' => 'title',
                'value' => 'Landing Page Generator',
            ),
            39 =>
            array (
                'package_id' => 8,
                'feature' => 'custom3',
                'key' => 'description',
                'value' => NULL,
            ),
            40 =>
            array (
                'package_id' => 8,
                'feature' => 'custom3',
                'key' => 'is_visible',
                'value' => '1',
            ),
            41 =>
            array (
                'package_id' => 8,
                'feature' => 'custom3',
                'key' => 'status',
                'value' => 'Active',
            ),
            42 =>
            array (
                'package_id' => 8,
                'feature' => 'custom4',
                'key' => 'type',
                'value' => 'string',
            ),
            43 =>
            array (
                'package_id' => 8,
                'feature' => 'custom4',
                'key' => 'title',
                'value' => 'Al Article Writer',
            ),
            44 =>
            array (
                'package_id' => 8,
                'feature' => 'custom4',
                'key' => 'description',
                'value' => NULL,
            ),
            45 =>
            array (
                'package_id' => 8,
                'feature' => 'custom4',
                'key' => 'is_visible',
                'value' => '1',
            ),
            46 =>
            array (
                'package_id' => 8,
                'feature' => 'custom4',
                'key' => 'status',
                'value' => 'Active',
            ),
            47 =>
            array (
                'package_id' => 8,
                'feature' => 'custom5',
                'key' => 'type',
                'value' => 'string',
            ),
            48 =>
            array (
                'package_id' => 8,
                'feature' => 'custom5',
                'key' => 'title',
                'value' => 'Bulk Processing',
            ),
            49 =>
            array (
                'package_id' => 8,
                'feature' => 'custom5',
                'key' => 'description',
                'value' => NULL,
            ),
            50 =>
            array (
                'package_id' => 8,
                'feature' => 'custom5',
                'key' => 'is_visible',
                'value' => '1',
            ),
            51 =>
            array (
                'package_id' => 8,
                'feature' => 'custom5',
                'key' => 'status',
                'value' => 'Active',
            ),
            52 =>
            array (
                'package_id' => 8,
                'feature' => 'custom6',
                'key' => 'type',
                'value' => 'string',
            ),
            53 =>
            array (
                'package_id' => 8,
                'feature' => 'custom6',
                'key' => 'title',
                'value' => 'Priority access to new features',
            ),
            54 =>
            array (
                'package_id' => 8,
                'feature' => 'custom6',
                'key' => 'description',
                'value' => NULL,
            ),
            55 =>
            array (
                'package_id' => 8,
                'feature' => 'custom6',
                'key' => 'is_visible',
                'value' => '1',
            ),
            56 =>
            array (
                'package_id' => 8,
                'feature' => 'custom6',
                'key' => 'status',
                'value' => 'Active',
            ),
            57 =>
            array (
                'package_id' => 8,
                'feature' => 'custom7',
                'key' => 'type',
                'value' => 'string',
            ),
            58 =>
            array (
                'package_id' => 8,
                'feature' => 'custom7',
                'key' => 'title',
                'value' => 'Basic support',
            ),
            59 =>
            array (
                'package_id' => 8,
                'feature' => 'custom7',
                'key' => 'description',
                'value' => NULL,
            ),
            60 =>
            array (
                'package_id' => 8,
                'feature' => 'custom7',
                'key' => 'is_visible',
                'value' => '1',
            ),
            61 =>
            array (
                'package_id' => 8,
                'feature' => 'custom7',
                'key' => 'status',
                'value' => 'Active',
            ),
            62 =>
            array (
                'package_id' => 9,
                'feature' => '',
                'key' => 'duration',
                'value' => NULL,
            ),
            63 =>
            array (
                'package_id' => 9,
                'feature' => '',
                'key' => 'usecaseCategory',
                'value' => '["1","2","3"]',
            ),
            64 =>
            array (
                'package_id' => 9,
                'feature' => '',
                'key' => 'usecaseTemplate',
                'value' => '["blog-ideas-outlines","blog-post-writing","story-writing","google-ad-copy","facebook-ad-copy","keyword-generator","keyword-extractor","seo-meta-title-details","marketing-copy-strategies","amazon-product-outlines","product-description","product-reviews-responders"]',
            ),
            65 =>
            array (
                'package_id' => 9,
                'feature' => 'word',
                'key' => 'type',
                'value' => 'number',
            ),
            66 =>
            array (
                'package_id' => 9,
                'feature' => 'word',
                'key' => 'is_value_fixed',
                'value' => '0',
            ),
            67 =>
            array (
                'package_id' => 9,
                'feature' => 'word',
                'key' => 'title',
                'value' => 'Word limit',
            ),
            68 =>
            array (
                'package_id' => 9,
                'feature' => 'word',
                'key' => 'title_position',
                'value' => 'before',
            ),
            69 =>
            array (
                'package_id' => 9,
                'feature' => 'word',
                'key' => 'value',
                'value' => '100000',
            ),
            70 =>
            array (
                'package_id' => 9,
                'feature' => 'word',
                'key' => 'description',
                'value' => 'Word description will be here',
            ),
            71 =>
            array (
                'package_id' => 9,
                'feature' => 'word',
                'key' => 'is_visible',
                'value' => '1',
            ),
            72 =>
            array (
                'package_id' => 9,
                'feature' => 'word',
                'key' => 'status',
                'value' => 'Active',
            ),
            73 =>
            array (
                'package_id' => 9,
                'feature' => 'image',
                'key' => 'type',
                'value' => 'number',
            ),
            74 =>
            array (
                'package_id' => 9,
                'feature' => 'image',
                'key' => 'is_value_fixed',
                'value' => '0',
            ),
            75 =>
            array (
                'package_id' => 9,
                'feature' => 'image',
                'key' => 'title',
                'value' => 'Image limit',
            ),
            76 =>
            array (
                'package_id' => 9,
                'feature' => 'image',
                'key' => 'title_position',
                'value' => 'before',
            ),
            77 =>
            array (
                'package_id' => 9,
                'feature' => 'image',
                'key' => 'value',
                'value' => '500',
            ),
            78 =>
            array (
                'package_id' => 9,
                'feature' => 'image',
                'key' => 'description',
                'value' => 'Image description will be here',
            ),
            79 =>
            array (
                'package_id' => 9,
                'feature' => 'image',
                'key' => 'is_visible',
                'value' => '1',
            ),
            80 =>
            array (
                'package_id' => 9,
                'feature' => 'image',
                'key' => 'status',
                'value' => 'Active',
            ),
            81 =>
            array (
                'package_id' => 9,
                'feature' => 'image-resolution',
                'key' => 'type',
                'value' => 'number',
            ),
            82 =>
            array (
                'package_id' => 9,
                'feature' => 'image-resolution',
                'key' => 'is_value_fixed',
                'value' => '1',
            ),
            83 =>
            array (
                'package_id' => 9,
                'feature' => 'image-resolution',
                'key' => 'title',
                'value' => 'Max Image Resolution',
            ),
            84 =>
            array (
                'package_id' => 9,
                'feature' => 'image-resolution',
                'key' => 'title_position',
                'value' => 'before',
            ),
            85 =>
            array (
                'package_id' => 9,
                'feature' => 'image-resolution',
                'key' => 'value',
                'value' => '512',
            ),
            86 =>
            array (
                'package_id' => 9,
                'feature' => 'image-resolution',
                'key' => 'description',
                'value' => 'Image description will be here',
            ),
            87 =>
            array (
                'package_id' => 9,
                'feature' => 'image-resolution',
                'key' => 'is_visible',
                'value' => '1',
            ),
            88 =>
            array (
                'package_id' => 9,
                'feature' => 'image-resolution',
                'key' => 'status',
                'value' => 'Active',
            ),
            89 =>
            array (
                'package_id' => 9,
                'feature' => 'custom1',
                'key' => 'type',
                'value' => 'string',
            ),
            90 =>
            array (
                'package_id' => 9,
                'feature' => 'custom1',
                'key' => 'title',
                'value' => 'Everything in Free-trial, plus',
            ),
            91 =>
            array (
                'package_id' => 9,
                'feature' => 'custom1',
                'key' => 'description',
                'value' => NULL,
            ),
            92 =>
            array (
                'package_id' => 9,
                'feature' => 'custom1',
                'key' => 'is_visible',
                'value' => '1',
            ),
            93 =>
            array (
                'package_id' => 9,
                'feature' => 'custom1',
                'key' => 'status',
                'value' => 'Active',
            ),
            94 =>
            array (
                'package_id' => 9,
                'feature' => 'custom2',
                'key' => 'type',
                'value' => 'string',
            ),
            95 =>
            array (
                'package_id' => 9,
                'feature' => 'custom2',
                'key' => 'title',
                'value' => 'Complete Article Rewriter',
            ),
            96 =>
            array (
                'package_id' => 9,
                'feature' => 'custom2',
                'key' => 'description',
                'value' => NULL,
            ),
            97 =>
            array (
                'package_id' => 9,
                'feature' => 'custom2',
                'key' => 'is_visible',
                'value' => '1',
            ),
            98 =>
            array (
                'package_id' => 9,
                'feature' => 'custom2',
                'key' => 'status',
                'value' => 'Active',
            ),
            99 =>
            array (
                'package_id' => 9,
                'feature' => 'custom3',
                'key' => 'type',
                'value' => 'string',
            ),
            100 =>
            array (
                'package_id' => 9,
                'feature' => 'custom3',
                'key' => 'title',
            'value' => 'Research Mode (Coming soon)',
            ),
            101 =>
            array (
                'package_id' => 9,
                'feature' => 'custom3',
                'key' => 'description',
                'value' => NULL,
            ),
            102 =>
            array (
                'package_id' => 9,
                'feature' => 'custom3',
                'key' => 'is_visible',
                'value' => '1',
            ),
            103 =>
            array (
                'package_id' => 9,
                'feature' => 'custom3',
                'key' => 'status',
                'value' => 'Active',
            ),
            104 =>
            array (
                'package_id' => 9,
                'feature' => 'custom4',
                'key' => 'type',
                'value' => 'string',
            ),
            105 =>
            array (
                'package_id' => 9,
                'feature' => 'custom4',
                'key' => 'title',
            'value' => 'Workflows (Coming soon)',
            ),
            106 =>
            array (
                'package_id' => 9,
                'feature' => 'custom4',
                'key' => 'description',
                'value' => NULL,
            ),
            107 =>
            array (
                'package_id' => 9,
                'feature' => 'custom4',
                'key' => 'is_visible',
                'value' => '1',
            ),
            108 =>
            array (
                'package_id' => 9,
                'feature' => 'custom4',
                'key' => 'status',
                'value' => 'Active',
            ),
            109 =>
            array (
                'package_id' => 9,
                'feature' => 'custom5',
                'key' => 'type',
                'value' => 'string',
            ),
            110 =>
            array (
                'package_id' => 9,
                'feature' => 'custom5',
                'key' => 'title',
                'value' => 'API Access',
            ),
            111 =>
            array (
                'package_id' => 9,
                'feature' => 'custom5',
                'key' => 'description',
                'value' => NULL,
            ),
            112 =>
            array (
                'package_id' => 9,
                'feature' => 'custom5',
                'key' => 'is_visible',
                'value' => '1',
            ),
            113 =>
            array (
                'package_id' => 9,
                'feature' => 'custom5',
                'key' => 'status',
                'value' => 'Active',
            ),
            114 =>
            array (
                'package_id' => 9,
                'feature' => 'custom6',
                'key' => 'type',
                'value' => 'string',
            ),
            115 =>
            array (
                'package_id' => 9,
                'feature' => 'custom6',
                'key' => 'title',
                'value' => 'Bulk Processing',
            ),
            116 =>
            array (
                'package_id' => 9,
                'feature' => 'custom6',
                'key' => 'description',
                'value' => NULL,
            ),
            117 =>
            array (
                'package_id' => 9,
                'feature' => 'custom6',
                'key' => 'is_visible',
                'value' => '1',
            ),
            118 =>
            array (
                'package_id' => 9,
                'feature' => 'custom6',
                'key' => 'status',
                'value' => 'Active',
            ),
            119 =>
            array (
                'package_id' => 9,
                'feature' => 'custom7',
                'key' => 'type',
                'value' => 'string',
            ),
            120 =>
            array (
                'package_id' => 9,
                'feature' => 'custom7',
                'key' => 'title',
                'value' => 'Surfer Integration',
            ),
            121 =>
            array (
                'package_id' => 9,
                'feature' => 'custom7',
                'key' => 'description',
                'value' => NULL,
            ),
            122 =>
            array (
                'package_id' => 9,
                'feature' => 'custom7',
                'key' => 'is_visible',
                'value' => '1',
            ),
            123 =>
            array (
                'package_id' => 9,
                'feature' => 'custom7',
                'key' => 'status',
                'value' => 'Active',
            ),
            124 =>
            array (
                'package_id' => 9,
                'feature' => 'custom8',
                'key' => 'type',
                'value' => 'string',
            ),
            125 =>
            array (
                'package_id' => 9,
                'feature' => 'custom8',
                'key' => 'title',
                'value' => 'Priority access to new features',
            ),
            126 =>
            array (
                'package_id' => 9,
                'feature' => 'custom8',
                'key' => 'description',
                'value' => NULL,
            ),
            127 =>
            array (
                'package_id' => 9,
                'feature' => 'custom8',
                'key' => 'is_visible',
                'value' => '1',
            ),
            128 =>
            array (
                'package_id' => 9,
                'feature' => 'custom8',
                'key' => 'status',
                'value' => 'Active',
            ),
            129 =>
            array (
                'package_id' => 9,
                'feature' => 'custom9',
                'key' => 'type',
                'value' => 'string',
            ),
            130 =>
            array (
                'package_id' => 9,
                'feature' => 'custom9',
                'key' => 'title',
                'value' => 'Premium support',
            ),
            131 =>
            array (
                'package_id' => 9,
                'feature' => 'custom9',
                'key' => 'description',
                'value' => NULL,
            ),
            132 =>
            array (
                'package_id' => 9,
                'feature' => 'custom9',
                'key' => 'is_visible',
                'value' => '1',
            ),
            133 =>
            array (
                'package_id' => 9,
                'feature' => 'custom9',
                'key' => 'status',
                'value' => 'Active',
            ),
            134 =>
            array (
                'package_id' => 10,
                'feature' => '',
                'key' => 'duration',
                'value' => NULL,
            ),
            135 =>
            array (
                'package_id' => 10,
                'feature' => '',
                'key' => 'usecaseCategory',
                'value' => '["1","2","3","4","5","6","8","7","9"]',
            ),
            136 =>
            array (
                'package_id' => 10,
                'feature' => '',
                'key' => 'usecaseTemplate',
                'value' => '["blog-ideas-outlines","blog-post-writing","story-writing","google-ad-copy","facebook-ad-copy","keyword-generator","keyword-extractor","seo-meta-title-details","marketing-copy-strategies","landing-page-website-copy","amazon-product-outlines","product-description","product-reviews-responders","linkedin-profile-copy","personal-bio","email-writing","call-to-action","business-ideas-strategies","brand-name","tagline-headline","content-improver","content-rephrase","text-summarizer","cv-resume-cover-letter","job-description","company-description","questions-answers","interview-questions","aida-framework","pas-framework","explain-it-to-a-child","sms-notifications","tweet-generator","video-scripts","youtube-descriptions","youtube-ideas-outlines","poetry"]',
            ),
            137 =>
            array (
                'package_id' => 10,
                'feature' => 'word',
                'key' => 'type',
                'value' => 'number',
            ),
            138 =>
            array (
                'package_id' => 10,
                'feature' => 'word',
                'key' => 'is_value_fixed',
                'value' => '0',
            ),
            139 =>
            array (
                'package_id' => 10,
                'feature' => 'word',
                'key' => 'title',
                'value' => 'Word limit',
            ),
            140 =>
            array (
                'package_id' => 10,
                'feature' => 'word',
                'key' => 'title_position',
                'value' => 'before',
            ),
            141 =>
            array (
                'package_id' => 10,
                'feature' => 'word',
                'key' => 'value',
                'value' => '200000',
            ),
            142 =>
            array (
                'package_id' => 10,
                'feature' => 'word',
                'key' => 'description',
                'value' => 'Word description will be here',
            ),
            143 =>
            array (
                'package_id' => 10,
                'feature' => 'word',
                'key' => 'is_visible',
                'value' => '1',
            ),
            144 =>
            array (
                'package_id' => 10,
                'feature' => 'word',
                'key' => 'status',
                'value' => 'Active',
            ),
            145 =>
            array (
                'package_id' => 10,
                'feature' => 'image',
                'key' => 'type',
                'value' => 'number',
            ),
            146 =>
            array (
                'package_id' => 10,
                'feature' => 'image',
                'key' => 'is_value_fixed',
                'value' => '0',
            ),
            147 =>
            array (
                'package_id' => 10,
                'feature' => 'image',
                'key' => 'title',
                'value' => 'Image limit',
            ),
            148 =>
            array (
                'package_id' => 10,
                'feature' => 'image',
                'key' => 'title_position',
                'value' => 'before',
            ),
            149 =>
            array (
                'package_id' => 10,
                'feature' => 'image',
                'key' => 'value',
                'value' => '1000',
            ),
            150 =>
            array (
                'package_id' => 10,
                'feature' => 'image',
                'key' => 'description',
                'value' => 'Image description will be here',
            ),
            151 =>
            array (
                'package_id' => 10,
                'feature' => 'image',
                'key' => 'is_visible',
                'value' => '1',
            ),
            152 =>
            array (
                'package_id' => 10,
                'feature' => 'image',
                'key' => 'status',
                'value' => 'Active',
            ),
            153 =>
            array (
                'package_id' => 10,
                'feature' => 'image-resolution',
                'key' => 'type',
                'value' => 'number',
            ),
            154 =>
            array (
                'package_id' => 10,
                'feature' => 'image-resolution',
                'key' => 'is_value_fixed',
                'value' => '1',
            ),
            155 =>
            array (
                'package_id' => 10,
                'feature' => 'image-resolution',
                'key' => 'title',
                'value' => 'Max Image Resolution',
            ),
            156 =>
            array (
                'package_id' => 10,
                'feature' => 'image-resolution',
                'key' => 'title_position',
                'value' => 'before',
            ),
            157 =>
            array (
                'package_id' => 10,
                'feature' => 'image-resolution',
                'key' => 'value',
                'value' => '1024',
            ),
            158 =>
            array (
                'package_id' => 10,
                'feature' => 'image-resolution',
                'key' => 'description',
                'value' => 'Image description will be here',
            ),
            159 =>
            array (
                'package_id' => 10,
                'feature' => 'image-resolution',
                'key' => 'is_visible',
                'value' => '1',
            ),
            160 =>
            array (
                'package_id' => 10,
                'feature' => 'image-resolution',
                'key' => 'status',
                'value' => 'Active',
            ),
            161 =>
            array (
                'package_id' => 10,
                'feature' => 'custom1',
                'key' => 'type',
                'value' => 'string',
            ),
            162 =>
            array (
                'package_id' => 10,
                'feature' => 'custom1',
                'key' => 'title',
            'value' => 'Artifism Bot (ChatGPT-like chatbot)',
            ),
            163 =>
            array (
                'package_id' => 10,
                'feature' => 'custom1',
                'key' => 'description',
                'value' => NULL,
            ),
            164 =>
            array (
                'package_id' => 10,
                'feature' => 'custom1',
                'key' => 'is_visible',
                'value' => '1',
            ),
            165 =>
            array (
                'package_id' => 10,
                'feature' => 'custom1',
                'key' => 'status',
                'value' => 'Active',
            ),
            166 =>
            array (
                'package_id' => 10,
                'feature' => 'custom2',
                'key' => 'type',
                'value' => 'string',
            ),
            167 =>
            array (
                'package_id' => 10,
                'feature' => 'custom2',
                'key' => 'title',
                'value' => '100+ AI Templates',
            ),
            168 =>
            array (
                'package_id' => 10,
                'feature' => 'custom2',
                'key' => 'description',
                'value' => NULL,
            ),
            169 =>
            array (
                'package_id' => 10,
                'feature' => 'custom2',
                'key' => 'is_visible',
                'value' => '1',
            ),
            170 =>
            array (
                'package_id' => 10,
                'feature' => 'custom2',
                'key' => 'status',
                'value' => 'Active',
            ),
            171 =>
            array (
                'package_id' => 10,
                'feature' => 'custom3',
                'key' => 'type',
                'value' => 'string',
            ),
            172 =>
            array (
                'package_id' => 10,
                'feature' => 'custom3',
                'key' => 'title',
                'value' => '25+ Languages',
            ),
            173 =>
            array (
                'package_id' => 10,
                'feature' => 'custom3',
                'key' => 'description',
                'value' => NULL,
            ),
            174 =>
            array (
                'package_id' => 10,
                'feature' => 'custom3',
                'key' => 'is_visible',
                'value' => '1',
            ),
            175 =>
            array (
                'package_id' => 10,
                'feature' => 'custom3',
                'key' => 'status',
                'value' => 'Active',
            ),
            176 =>
            array (
                'package_id' => 10,
                'feature' => 'custom4',
                'key' => 'type',
                'value' => 'string',
            ),
            177 =>
            array (
                'package_id' => 10,
                'feature' => 'custom4',
                'key' => 'title',
                'value' => 'Landing Page Generator',
            ),
            178 =>
            array (
                'package_id' => 10,
                'feature' => 'custom4',
                'key' => 'description',
                'value' => NULL,
            ),
            179 =>
            array (
                'package_id' => 10,
                'feature' => 'custom4',
                'key' => 'is_visible',
                'value' => '1',
            ),
            180 =>
            array (
                'package_id' => 10,
                'feature' => 'custom4',
                'key' => 'status',
                'value' => 'Active',
            ),
            181 =>
            array (
                'package_id' => 10,
                'feature' => 'custom5',
                'key' => 'type',
                'value' => 'string',
            ),
            182 =>
            array (
                'package_id' => 10,
                'feature' => 'custom5',
                'key' => 'title',
                'value' => '1-Click WordPress Export',
            ),
            183 =>
            array (
                'package_id' => 10,
                'feature' => 'custom5',
                'key' => 'description',
                'value' => NULL,
            ),
            184 =>
            array (
                'package_id' => 10,
                'feature' => 'custom5',
                'key' => 'is_visible',
                'value' => '1',
            ),
            185 =>
            array (
                'package_id' => 10,
                'feature' => 'custom5',
                'key' => 'status',
                'value' => 'Active',
            ),
            186 =>
            array (
                'package_id' => 10,
                'feature' => 'custom6',
                'key' => 'type',
                'value' => 'string',
            ),
            187 =>
            array (
                'package_id' => 10,
                'feature' => 'custom6',
                'key' => 'title',
                'value' => 'Zapier Integration',
            ),
            188 =>
            array (
                'package_id' => 10,
                'feature' => 'custom6',
                'key' => 'description',
                'value' => NULL,
            ),
            189 =>
            array (
                'package_id' => 10,
                'feature' => 'custom6',
                'key' => 'is_visible',
                'value' => '1',
            ),
            190 =>
            array (
                'package_id' => 10,
                'feature' => 'custom6',
                'key' => 'status',
                'value' => 'Active',
            ),
            191 =>
            array (
                'package_id' => 10,
                'feature' => 'custom7',
                'key' => 'type',
                'value' => 'string',
            ),
            192 =>
            array (
                'package_id' => 10,
                'feature' => 'custom7',
                'key' => 'title',
                'value' => 'Browser extensions',
            ),
            193 =>
            array (
                'package_id' => 10,
                'feature' => 'custom7',
                'key' => 'description',
                'value' => NULL,
            ),
            194 =>
            array (
                'package_id' => 10,
                'feature' => 'custom7',
                'key' => 'is_visible',
                'value' => '1',
            ),
            195 =>
            array (
                'package_id' => 10,
                'feature' => 'custom7',
                'key' => 'status',
                'value' => 'Active',
            ),
            196 =>
            array (
                'package_id' => 10,
                'feature' => 'custom8',
                'key' => 'type',
                'value' => 'string',
            ),
            197 =>
            array (
                'package_id' => 10,
                'feature' => 'custom8',
                'key' => 'title',
                'value' => 'AI Article Writer',
            ),
            198 =>
            array (
                'package_id' => 10,
                'feature' => 'custom8',
                'key' => 'description',
                'value' => NULL,
            ),
            199 =>
            array (
                'package_id' => 10,
                'feature' => 'custom8',
                'key' => 'is_visible',
                'value' => '1',
            ),
            200 =>
            array (
                'package_id' => 10,
                'feature' => 'custom8',
                'key' => 'status',
                'value' => 'Active',
            ),
            201 =>
            array (
                'package_id' => 10,
                'feature' => 'custom9',
                'key' => 'type',
                'value' => 'string',
            ),
            202 =>
            array (
                'package_id' => 10,
                'feature' => 'custom9',
                'key' => 'title',
            'value' => 'Sonic Editor (Google Docs like Editor)',
            ),
            203 =>
            array (
                'package_id' => 10,
                'feature' => 'custom9',
                'key' => 'description',
                'value' => NULL,
            ),
            204 =>
            array (
                'package_id' => 10,
                'feature' => 'custom9',
                'key' => 'is_visible',
                'value' => '1',
            ),
            205 =>
            array (
                'package_id' => 10,
                'feature' => 'custom9',
                'key' => 'status',
                'value' => 'Active',
            ),
            206 =>
            array (
                'package_id' => 10,
                'feature' => 'custom10',
                'key' => 'type',
                'value' => 'string',
            ),
            207 =>
            array (
                'package_id' => 10,
                'feature' => 'custom10',
                'key' => 'title',
                'value' => 'API Access',
            ),
            208 =>
            array (
                'package_id' => 10,
                'feature' => 'custom10',
                'key' => 'description',
                'value' => NULL,
            ),
            209 =>
            array (
                'package_id' => 10,
                'feature' => 'custom10',
                'key' => 'is_visible',
                'value' => '1',
            ),
            210 =>
            array (
                'package_id' => 10,
                'feature' => 'custom10',
                'key' => 'status',
                'value' => 'Active',
            ),
        ), ['package_id', 'feature', 'key']);


    }
}
