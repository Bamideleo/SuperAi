<?php

namespace Modules\Subscription\Database\Seeders\versions\v2_6_0;

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
        $credits = ['bronze' => '{"word":"10000","image":"100","minute":"100","character":"200000","page":"5"}', 'silver' => '{"word":"10000","image":"100","minute":"100","character":"400000","page":"10"}', 'gold' => '{"word":"10000","image":"100","minute":"100","character":"500000","page":"15"}'];

        foreach ($credits as $key => $value) {
           Credit::where('code', $key)->update(['features' => $value]);
        }

        $allCredits = \DB::table('credits')->get();
        
        foreach ($allCredits as $credit) {

            if (str_contains($credit->features, 'page')) {
                continue;
            }
      
            $feature = json_decode($credit->features, true) + ['page' => 0];
            
            \DB::table('credits')->where('id', $credit->id)->update(['features' => $feature]);
        }
    }
}
