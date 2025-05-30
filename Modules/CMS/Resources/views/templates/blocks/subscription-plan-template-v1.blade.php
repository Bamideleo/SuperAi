<style>
    .subscription-plan-template-v1-{{$component->id}} {
        --text-color-light: {{ $component->text_color_light }};
        --text-color-dark: {{ $component->text_color_dark }};

        --plan-text-color-light: {{ $component->plan_text_color_light }};
        --plan-text-color-dark: {{ $component->plan_text_color_dark }};

        --credit-text-color-light-head: {{ $component->credit_text_color_light_head }};
        --credit-text-color-dark-head: {{ $component->credit_text_color_dark_head }};
        --credit-text-color-light: {{ $component->credit_text_color_light }};
        --credit-text-color-dark: {{ $component->credit_text_color_dark }};

        --btn-color-light-1: {{ $component->plan_btn_color_light }};
        --btn-color-dark-1: {{ $component->plan_btn_color_dark }};
        --btn-text-color-light-1: {{ $component->plan_btn_text_color_light }};
        --btn-text-color-dark-1: {{ $component->plan_btn_text_color_dark }};
        
        --btn-color-light-2: {{ $component->credit_btn_color_light }};
        --btn-color-dark-2: {{ $component->credit_btn_color_dark }};
        --btn-text-color-light-2: {{ $component->credit_btn_text_color_light }};
        --btn-text-color-dark-2: {{ $component->credit_btn_text_color_dark }};

        --plan-btn-color-light : {{$component->btn_color_light }};
        --plan-btn-color-dark : {{$component->btn_color_dark }};
        --plan-btn-text-color-light : {{$component->btn_text_color_light }};
        --plan-btn-text-color-dark : {{$component->btn_text_color_dark }};

        --bg-color-light: {{ $component->main_bg_color_light }};
        --bg-color-dark: {{ $component->main_bg_color_dark }};
    }

    .plan-bg-{{$component->id}} {
        background-image: url('{{ isset($component->main_bg_image_light) && !empty($component->main_bg_image_light) ? urlSlashReplace(pathToUrl($component->main_bg_image_light)) : '' }}');
        background-repeat: no-repeat, repeat;
        background-size: cover;
    }
    .dark .plan-bg-{{$component->id}} {
        background-image: url('{{ isset($component->main_bg_image_dark) && !empty($component->main_bg_image_dark) ? urlSlashReplace(pathToUrl($component->main_bg_image_dark)) : '' }}');
        background-repeat: no-repeat, repeat;
        background-size: cover;
    }
</style>

@php
    $allPackage = $homeService->getPackages($component->plan_type, $component->plan_limit, null, $component->plans);
    $packages = $allPackage['packages'];
    $subscription = $allPackage['subscription'];
    $billingCycles = $homeService->billingCycle($allPackage['packages']);

    $credits = $homeService->getCredits($component->credit_type, $component->credit_limit, null, $component->credits);

    $textColor = empty($component->text_color_light) && empty($component->text_color_dark) ? 'text-color-14 dark:text-white' : 'text-[var(--text-color-light)] dark:text-[var(--text-color-dark)]';
    $buttonColor = (empty($component->plan_btn_color_light) && empty($component->plan_btn_color_dark) && empty($component->plan_btn_text_color_light) && empty($component->plan_btn_text_color_dark) ) ? 'text-white dark:text-color-14 bg-color-14 dark:bg-white' : 'text-[var(--btn-text-color-light-1)] dark:text-[var(--btn-text-color-dark-1)] bg-[var(--btn-color-light-1)] dark:bg-[var(--btn-color-dark-1)]';

    $planButtonColor = (empty($component->btn_color_light) && empty($component->btn_color_dark) && empty($component->btn_text_color_light) && empty($component->btn_text_color_dark) ) ? 'nav-parent active' : 'text-[var(--plan-btn-text-color-light)] dark:text-[var(--plan-btn-text-color-dark)] bg-[var(--plan-btn-color-light)] dark:bg-[var(--plan-btn-color-dark)]';

    $planTextColor =  empty($component->plan_text_color_light) && empty($component->plan_text_color_dark) ? 'text-color-14 dark:text-white' : 'text-[var(--plan-text-color-light)] dark:text-[var(--plan-text-color-dark)]';
    $creditTextColor =  empty($component->credit_text_color_light) && empty($component->credit_text_color_dark) ? 'text-color-14 dark:text-white' : 'text-[var(--credit-text-color-light)] dark:text-[var(--credit-text-color-dark)]';

    $creditTextColorHead = empty($component->credit_text_color_light_head) && empty($component->credit_text_color_dark_head) ? 'text-[#E22861] dark:text-[#FCCA19]' : 'text-[var(--credit-text-color-light-head)] dark:text-[var(--credit-text-color-dark-head)]';

    $creditButtonColor = (empty($component->credit_btn_color_light) && empty($component->credit_btn_color_dark) && empty($component->credit_btn_text_color_light) && empty($component->credit_btn_text_color_dark) ) ? 'text-white magic-bg' : 'text-[var(--btn-text-color-light-2)] dark:text-[var(--btn-text-color-dark-2)] bg-[var(--btn-color-light-2)] dark:bg-[var(--btn-color-dark-2)]';

    $bgColor =  empty($component->main_bg_color_light) && empty($component->main_bg_color_dark) ? '' : 'bg-[var(--bg-color-light)] dark:bg-[var(--bg-color-dark)]';
@endphp

@doAction('handle_adsense_output_top', $component)

<div class="py-[75px] 9xl:px-[310px] 8xl:px-40 lg:px-16 relative subscription-plan-template-v1-{{$component->id}}
{{ $component->background_type == 'backgroundImage' ? 'plan-bg-' . $component->id : $bgColor }}" 
    style="padding:{{ !empty($component->pt_y) ? $component->pt_y . ' ' . '0' : '' }};">
    <div class="relative flex justify-center items-center">
        <p class="uppercase absolute font-Figtree text-center heading-1 tracking-[0.2em] text-base leading-6 font-bold">
            {!! strtoupper($component->overline) !!}
        </p>
    </div>
    <p class="mt-[18px] font-RedHat 6xl:text-48 text-36 font-bold text-center break-words px-5 {{ $textColor }}">
        {!! $component->heading !!}
    </p>
    <p class="font-Figtree lg:w-[700px] mx-auto mt-3 px-5 md:px-10 xl:px-5 flex items-center justify-center font-normal text-center 6xl:text-18 text-16 {{ $textColor }}">
        {!! $component->body !!}
    </p>
    
    <div>
        @if (count($packages) != 0 && count($credits) != 0)
            <div class="flex items-center rounded-xl relative justify-center mt-10 mb-11">
                <ul id="sub-tabs" class="flex justify-center items-center whitespace-nowrap flex-row list-none border border-color-DF dark:border-color-47 p-1.5 rounded-lg relative w-max mx-auto">
                    <li class="subscription-plan-tab-bg text-white rounded-lg font-Figtree"><a id="default-tab" href="#sub-tab" class="rounded-lg block font-medium  dark:text-white text-15 px-8 py-2.5 ">
                        {{ __('Subscription') }}</a>
                    </li>
                    <li class="rounded-lg text-color-14 dark:text-white font-Figtree">
                        <a href="#plan-tab"class="rounded-lg block font-medium  text-15 px-8 py-2.5">
                        {{ __('Credit') }}</a>
                    </li>
                </ul>
            </div>
        @endif
        <div class="mt-6 xl:mt-8" id="tab-contents">
            <div id="sub-tab">
                <div class="check-billing flex justify-center items-center mt-10 mb-11 flex-wrap px-5 gap-3">
                    @php
                        $hasMonthlyBilling = array_key_exists('monthly', $billingCycles);
                    @endphp
                    @foreach($billingCycles as $key => $value)
                        <div class="radio-container-payment">
                            <input class="cursor-pointer" type="radio" name="check_billing" id="check_{{ $key }}"  
                                value="{{ $key }}" 
                                {{ ($hasMonthlyBilling && $key == 'monthly') || (!$hasMonthlyBilling && $loop->first) ? 'checked' : '' }}/>
                            <label class="font-Figtree text-base leading-4 font-medium break-words {{ $textColor }}" for="check_{{ $key }}">
                                {{ $value }}
                            </label>
                        </div>
                    @endforeach
                </div>
                <div class="plan-root 6xl:gap-10 lg:gap-5 gap-6 lg:px-0 md:px-10 px-5 w-full flex flex-wrap justify-center {{count($packages) != 0 ? '6xl:mt-[60px] mt-11' : ''}}">
                    @foreach($packages as $key => $package)
                        @foreach ($package['billing_cycle'] as $billing_cycle => $value)
                            @continue($value == 0)
                            <div class="{{ $package['parent_class'] }} plan-parent plan-{{ $billing_cycle }} {{ ($hasMonthlyBilling && $billing_cycle == 'monthly') || (!$hasMonthlyBilling && $loop->first) ? '' : 'hidden' }}">
                                <div class="{{ $package['child_class'] }}">
                                    <p class="{{ $planTextColor }} text-24 font-medium font-Figtree break-words">{{ $package['name'] }}</p>
                    
                                    <p class="text-36 font-medium font-RedHat {{ $planTextColor }} mt-1">
                                        @if($package['discount_price'][$billing_cycle] > 0)
                                            <span class="{{ $package['price_color'] }}">{{ formatNumber($package['discount_price'][$billing_cycle]) }}</span>
                                        @else
                                            <span class="{{ $package['price_color'] }}">{{ $package['sale_price'][$billing_cycle] == 0 ? __('Free') : formatNumber($package['sale_price'][$billing_cycle]) }}</span>
                                        @endif
                                        <span class="text-18">/{{ ($billing_cycle == 'days' ? $package['duration'] . ' ' : '') . ucfirst($billing_cycle) }}</span>
                                    </p>
                                    
                                    @if (preference('apply_coupon_subscription'))
                                    <form action="{{ route('user.subscription.checkout') }}" method="GET" class="button-need-disable">
                                    @else
                                    <form action="{{ route('user.subscription.store') }}" method="POST" class="button-need-disable">
                                        @csrf
                                    @endif
                                        <input type="hidden" name="package_id" value="{{ $package['id'] }}">
                                        <input type="hidden" name="sending_url" value="{{ techEncrypt(route('user.subscription.store')) }}">
                                        <input type="hidden" name="billing_cycle" value="{{ $billing_cycle }}">
                                        @if (auth()->user() && $package['trial_day'] && !subscription('isUsedTrial', $package['id']))
                                            <button type="submit" class="{{ $package['button'] . ' ' . $buttonColor }} plan-loader flex gap-3" >{{ __('Start :x Days Trial', ['x' => $package['trial_day']]) }}</button>
                                        @elseif (!$subscription?->package?->id)
                                            <button type="submit" class="{{ $package['button'] . ' ' . $buttonColor }} plan-loader flex gap-3" >{{ __('Subscribe Now') }}</button>
                                        @elseif ($subscription?->package?->id == $package['id'] && $billing_cycle == $subscription?->billing_cycle)
                                            @if ($subscription?->package?->renewable)
                                                <button type="submit" class="{{ $package['button'] . ' ' . $buttonColor }} plan-loader flex gap-3">{{ __('Renew Plan') }}</button>
                                            @endif
                                        @elseif (preference('subscription_change_plan') && $subscription?->package?->sale_price[$subscription?->billing_cycle] < $package['sale_price'][$billing_cycle])
                                            <button type="submit" class="{{ $package['button'] . ' ' . $buttonColor }} plan-loader flex gap-3" >{{ __('Upgrade Plan') }}</button>
                                        @elseif (preference('subscription_change_plan') && preference('subscription_downgrade') && $subscription?->package?->sale_price[$subscription?->billing_cycle] >= $package['sale_price'][$billing_cycle])
                                            <button type="submit" class="{{ $package['button'] . ' ' . $buttonColor }} plan-loader flex gap-3" >{{ __('Downgrade Plan') }}</button>
                                        @endif
                                    </form>
                                    
                                    @php
                                    
                                        $mainFeature = [];
                                        foreach (Modules\Subscription\Services\PackageService::features() as $key => $value) {
                                            if (isset($package['features'][$key])) {
                                                $mainFeature[$key] = $package['features'][$key];
                                                unset($package['features'][$key]);
                                            }
                                        }
                                        
                                        $features = $mainFeature + $package['features'];
                                        $package['features'] = $mainFeature + $package['features'];
                                    @endphp
                                    
                                    <div class="flex flex-col gap-[18px] mt-8">
                                        @foreach($features as $meta)
                                            @continue(empty($meta['title']))
                    
                                            @if ($meta['is_visible'])
                                                <div class="flex items-center {{ $planTextColor }} text-16 font-medium font-Figtree gap-[9px]">
                                                    @if($meta['status'] == 'Active')
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11"
                                                            fill="none">
                                                            <path
                                                                d="M13.88 1.17017C14.2755 1.56567 14.2755 2.20798 13.88 2.60349L5.77995 10.7035C5.38444 11.099 4.74214 11.099 4.34663 10.7035L0.296631 6.65349C-0.0988769 6.25798 -0.0988769 5.61567 0.296631 5.22017C0.692139 4.82466 1.33444 4.82466 1.72995 5.22017L5.06487 8.55192L12.4498 1.17017C12.8453 0.774658 13.4876 0.774658 13.8831 1.17017H13.88Z"
                                                                fill="currentColor" />
                                                        </svg>
                                                    @else
                                                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.09014 1.59014C1.46032 1.21995 2.06051 1.21995 2.4307 1.59014L6.5 5.65944L10.5693 1.59014C10.9395 1.21995 11.5397 1.21995 11.9099 1.59014C12.28 1.96032 12.28 2.56051 11.9099 2.9307L7.84056 7L11.9099 11.0693C12.28 11.4395 12.28 12.0397 11.9099 12.4099C11.5397 12.78 10.9395 12.78 10.5693 12.4099L6.5 8.34056L2.4307 12.4099C2.06051 12.78 1.46032 12.78 1.09014 12.4099C0.719954 12.0397 0.719954 11.4395 1.09014 11.0693L5.15944 7L1.09014 2.9307C0.719954 2.56051 0.719954 1.96032 1.09014 1.59014Z" fill="#DF2F2F"/>
                                                        </svg>
                                                    @endif
                                                    @if ($meta['type'] != 'number')
                                                        <span class="break-words"> {{ $meta['title'] }} </span>
                                                    @elseif ($meta['title_position'] == 'before')
                                                        <span class="break-words"> {{ $meta['title'] . ': ' }} {{ ($meta['value'] == -1) ? __('Unlimited') : $meta['value'] }} </span>
                                                    @else
                                                        <span class="break-words"> {{ ($meta['value'] == -1 ? __('Unlimited') : $meta['value']) }} {{ $meta['title'] }} </span>
                                                    @endif
                                                </div>
                                            @endif
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    @endforeach
                </div>
            </div>
            <div id="plan-tab" class="hidden">
                <div class="lg:mt-6 mt-[60px] 6xl:gap-10 lg:gap-5 gap-6 lg:px-0 md:px-10 px-5 w-full flex flex-wrap justify-center" >
                    @foreach($credits as $key => $credit)                    
                        <div class="bg-small-package border border-color-DF bg-white dark:border-color-47 dark:bg-[#3A3A39] rounded-xl p-5 h-max lg:w-[30.33%] pricing-width w-full">
                            <div class="flex flex-col justify-between gap-5 h-full">
                                <div>
                                    <p class="{{ $creditTextColorHead }} text-[14px] font-medium leading-[22px] font-Figtree wrap-anywhere">{{ $credit->name }}</p>
                                    <p class="{{ $creditTextColor }} text-[28px] font-medium font-RedHat leading-10 mt-0.5 mb-5 flex items-baseline gap-1"><span class="text-[36px] font-bold leading-[44px] wrap-anywhere ">{{ formatNumber($credit->price) }}</span> </p>
                                    <div class="flex flex-col gap-[14px]">
                                        @foreach($credit->features as $key => $value)
                                            <div class="flex gap-2 justify-start items-start">
                                                <span class="w-3 h-3 mt-1">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.7704 5.68257L10.0489 5.18953C9.27357 4.97049 8.56735 4.55572 7.99778 3.98491C7.4282 3.4141 7.01432 2.70635 6.79575 1.92939L6.30377 0.204063C6.27903 0.143699 6.23694 0.0920698 6.18285 0.0557349C6.12876 0.0194 6.06512 0 6 0C5.93488 0 5.87124 0.0194 5.81715 0.0557349C5.76306 0.0920698 5.72097 0.143699 5.69623 0.204063L5.20425 1.92939C4.98568 2.70635 4.5718 3.4141 4.00222 3.98491C3.43265 4.55572 2.72643 4.97049 1.95115 5.18953L0.229552 5.68257C0.163448 5.70138 0.105269 5.74128 0.0638414 5.79622C0.0224141 5.85116 0 5.91814 0 5.98701C0 6.05587 0.0224141 6.12285 0.0638414 6.1778C0.105269 6.23274 0.163448 6.27264 0.229552 6.29144L1.95115 6.78448C2.72643 7.00353 3.43265 7.4183 4.00222 7.98911C4.5718 8.55992 4.98568 9.26766 5.20425 10.0446L5.69623 11.7699C5.71499 11.8362 5.7548 11.8945 5.80962 11.936C5.86445 11.9775 5.93129 12 6 12C6.06872 12 6.13555 11.9775 6.19038 11.936C6.2452 11.8945 6.28501 11.8362 6.30377 11.7699L6.79575 10.0446C7.01432 9.26766 7.4282 8.55992 7.99778 7.98911C8.56735 7.4183 9.27357 7.00353 10.0489 6.78448L11.7704 6.29144C11.8366 6.27264 11.8947 6.23274 11.9362 6.1778C11.9776 6.12285 12 6.05587 12 5.98701C12 5.91814 11.9776 5.85116 11.9362 5.79622C11.8947 5.74128 11.8366 5.70138 11.7704 5.68257Z" fill="#E22861"/>
                                                    </svg>
                                                </span>
                                                <p class="{{ $creditTextColor }} font-Figtree font-normal text-[15px] leading-[22px] wrap-anywhere line-clamp-double">{{ ($value == -1 ? __('Unlimited') : $value) . ' ' . $key }}</p>
                                            </div>
                                        @endforeach
                                    </div>
                                </div>
                                @if (preference('apply_coupon_onetime'))
                                <form action="{{ route('user.subscription.checkout') }}" method="GET" class="button-need-disable">
                                @else
                                <form action="{{ route('user.credit.store') }}" method="POST" class="button-need-disable">
                                    @csrf
                                @endif
                                    <input type="hidden" name="package_id" value="{{ $credit->id }}">
                                    <input type="hidden" name="sending_url" value="{{ techEncrypt(route('user.credit.store')) }}">
                                    <input type="hidden" name="billing_cycle" value="onetime">
                                    <button type="submit" class="h-max w-max rounded-xl text-[14px] leading-[22px] font-semibold py-3 px-[25px] {{ $creditButtonColor }}">
                                        <span>{{ __('Buy Now') }}
                                         </span> 
                                     </button>
                                </form>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>

@doAction('handle_adsense_output_bottom', $component)

@push('scripts')
    <script>
        const is_onetime = "{{ request()->type == 'credit' }}";
    </script>
    <script src="{{ asset('public/assets/js/user/subscription.min.js') }}"></script>
@endpush
