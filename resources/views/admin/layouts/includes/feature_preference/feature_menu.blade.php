<div class="card card-info shadow-none" id="nav">
    <div class="card-header pt-4 border-bottom mb-2">
        <h5>{{ __('Features') }}</h5>
    </div>

    <ul class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        @foreach (\App\Lib\Menus\Admin\FeaturePreferenceSettings::get() as $key => $preference)
            <li>
                <a class="accordion-heading position-relative text-start" data-bs-toggle="collapse"
                    data-bs-target="#{{ $preference['name'] }}-main-v-pills-tab"> {{ $preference['label'] }}
                    <span class="pull-right"><b class="caret"></b></span>
                    <span><i
                            class="fa fa-angle-down position-absolute arrow-icon end-0 me-2 top-0 fs-6"></i></span>
                </a>
                <ul class="nav nav-list flex-column flex-nowrap collapse ml-2 vertical-class side-nav" id="{{ $preference['name'] }}-main-v-pills-tab" role="tablist" aria-orientation="vertical">

                    @if (isset($sidebarLists[$preference['name']]))
                        @foreach ( $sidebarLists[$preference['name']] as $option)

                            @php
                                $str = str_replace('_', ' ', strtolower($option));
                                $optionName = ucwords($str);
                            @endphp

                            <li>
                                <a class="nav-link text-left tab-name {{ $key == 0 ? 'active' : '' }}" id="v-pills-{{ $option }}_{{ $preference['name'] }}-tab"
                                    data-bs-toggle="pill" href="#v-pills-{{ $option }}_{{ $preference['name'] }}" role="tab"
                                    aria-controls="v-pills-{{ $option }}_{{ $preference['name'] }}" aria-selected="true"
                                    data-id="{{ $preference['label'] }} >> {{ $optionName }}">{{ $optionName }}</a>
                            </li>

                        @endforeach
                    @else
                            <li>
                                <a class="nav-link text-left tab-name" id="v-pills-general_{{ $preference['name'] }}-tab"
                                    data-bs-toggle="pill" href="#v-pills-general_{{ $preference['name'] }}" role="tab"
                                    aria-controls="v-pills-general_{{ $preference['name'] }}" aria-selected="true"
                                    data-id="{{ __('Chatbot') }} >> {{ __('General') }}">{{ __('General Options') }}</a>
                            </li>
                    @endif
    
                </ul>
            </li>
        @endforeach
    </ul>

</div>
