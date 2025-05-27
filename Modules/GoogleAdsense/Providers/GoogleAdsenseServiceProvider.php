<?php

namespace Modules\GoogleAdsense\Providers;

use App\Facades\AiProviderManager;
use Illuminate\Support\ServiceProvider;
use DB;

class GoogleAdsenseServiceProvider extends ServiceProvider
{
    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        AiProviderManager::add(\Modules\GoogleAdsense\GoogleAdsenseProvider::class, 'googleAdsense');

        add_action('adsense_form', function($component) {

            if (!$this->checkActiveProvider()) {
                return;
            }

            $sw = uniqid('sw_');
            $component = $component ?? null;
            $leftSelected = isset($component) && $component->google_adsense_position == 'top' ? 'selected' : '';
            $rightSelected = isset($component) && $component->google_adsense_position == 'bottom' ? 'selected' : '';
            $body = isset($component) && isset($component->google_adsense_body) ? $component->google_adsense_body : '';
            
            echo '
                <hr>
                <div class="form-group row">
                    <label class="col-md-3 control-label"> <dt>' . __(' Google Adsense') . '</dt></label>
                    <div class="col-md-8">
                        <div class="accordion iconbox-accordion accord_67177c7fa36ea" id="accordionExample">
                            <div class="form-group row">
                                <div class="col-md-3">
                                    <div class="form-group row">
                                        <label class="control-label text-left">
                                            '. __('Enable') .'
                                        </label>
                                        <input type="hidden" name="google_adsense" value="0">
                                        <div class="col-md-12">
                                            <div class="switch switch-warning d-inline m-r-10">
                                                <input type="checkbox" name="google_adsense"
                                                    id="'. $sw .'" value="1"
                                                    '. (isset($component->google_adsense) && $component->google_adsense == 1 ? 'checked' : '') .'>
                                                <label for="'. $sw .'" class="cr"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="form-group row sidebarOption">
                                        <label class="col-md-12 control-label">' . __('Position') . '</label>
                                        <div class="col-sm-12">
                                            <select name="google_adsense_position" class="form-control select3 sidebar-position">
                                                <option value="top"'. $leftSelected .'> '. __('Top') .' </option>
                                                <option value="bottom"'. $rightSelected .'>'. __('Bottom') .'</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <textarea class="form-control crequired" rows="3" name="google_adsense_body" required>' .  $body  .  '</textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ';
        });

        add_action('handle_adsense_output_top', function($component) {

            if (!$this->checkActiveProvider()) {
                return;
            }

            echo "<div class='google-adsense-top-" . $component->id . "'>"
                . (isset($component->google_adsense_position) && $component->google_adsense_position == 'top' && $component->google_adsense == 1 
                    ? (isset($component->google_adsense_body) ? $component->google_adsense_body : '')
                    : '') .
                "</div>";
        });

        add_action('handle_adsense_output_bottom', function($component) {

            if (!$this->checkActiveProvider()) {
                return;
            }

            echo "<div class='google-adsense-bottom-" . $component->id . "'>"
                . (isset($component->google_adsense_position) && $component->google_adsense_position == 'bottom' && $component->google_adsense == 1 
                    ? (isset($component->google_adsense_body) ? $component->google_adsense_body : '')
                    : '') .
                "</div>";
        });
       
        add_action('before_googleadsense_addon_deactivation', function() {
            DB::table('component_properties')->whereIn('name', [ 'google_adsense', 'google_adsense_position', 'google_adsense_body' ])->delete();
        });
    }

    /**
     * Check if the Google Adsense provider is active for the adsense feature.
     *
     * @return bool
     */
    private function checkActiveProvider() {
        return AiProviderManager::isActive('googleadsense', 'adsense');
    }
}
