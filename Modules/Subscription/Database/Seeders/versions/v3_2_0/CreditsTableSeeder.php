<?php

namespace Modules\Subscription\Database\Seeders\versions\v3_2_0;

use Illuminate\Database\Seeder;
use Modules\Subscription\Entities\Credit;

class CreditsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        $credits = ['bronze' => '{"word":"10000","image":"100","minute":"100","character":"200000","page":"5","chatbot":"5","video":"5"}', 'silver' => '{"word":"10000","image":"100","minute":"100","character":"400000", "page":"10","chatbot":"10", "video":"10"}', 'gold' => '{"word":"10000","image":"100","minute":"100","character":"500000","page":"15","chatbot":"15","video":"15"}'];

        foreach ($credits as $key => $value) {
           Credit::where('code', $key)->update(['features' => $value]);
        }

        $allCredits = \DB::table('credits')->get();
        
        foreach ($allCredits as $credit) {

            if (str_contains($credit->features, 'video')) {
                continue;
            }
      
            $feature = json_decode($credit->features, true) + ['video' => 0];
            
            \DB::table('credits')->where('id', $credit->id)->update(['features' => $feature]);
        }
    }
}
