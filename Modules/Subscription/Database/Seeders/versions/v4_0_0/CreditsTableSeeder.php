<?php

namespace Modules\Subscription\Database\Seeders\versions\v4_0_0;

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
        $credits = ['bronze' => '{"word":"10000","image":"100","minute":"100","character":"200000","chatbot":"5","voice-clone":"5"}', 'silver' => '{"word":"10000","image":"100","minute":"100","character":"400000","chatbot":"10","voice-clone":"10"}', 'gold' => '{"word":"10000","image":"100","minute":"100","character":"500000","chatbot":"15","voice-clone":"15"}'];

        foreach ($credits as $key => $value) {
           Credit::where('code', $key)->update(['features' => $value]);
        }

        $allCredits = \DB::table('credits')->get();
        
        foreach ($allCredits as $credit) {

            if (str_contains($credit->features, 'voice-clone')) {
                continue;
            }
      
            $feature = json_decode($credit->features, true) + ['voice-clone' => 0];
            
            \DB::table('credits')->where('id', $credit->id)->update(['features' => $feature]);
        }
    }
}
