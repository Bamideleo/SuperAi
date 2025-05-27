<!DOCTYPE html>
<html lang="{{ App::getLocale() }}" dir="{{ languageDirection() }}" class="{{ \Illuminate\Support\Facades\Cookie::get('theme_preference') }}">

{{-- Only common codeblocks (html, css, js, php) between site and user namespaces can be included in this master file.
This file acts as the only parent master file for site_master and user_master layout files. --}}

@php
$favicon = App\Models\Preference::getFavicon();
@endphp

<head>
    <title>{{ trimWords(preference('company_name'), 17) }} | @yield('page_title', env('APP_NAME', ''))</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    @if (!empty($favicon))
    <link rel='shortcut icon' href="{{ $favicon }}" type='image/x-icon' />
    @endif

    @yield('child-head')

    <!-- Required CSS -->

    <link rel="stylesheet" href="{{ asset('public/assets/chat/css/chat-widget.min.css') }}">
    <link rel="stylesheet" href="{{ asset('public/assets/plugin/jquery-ui/jquery-ui.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('public/assets/plugin/jquery-ui/jquery-ui-theme.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('public/assets/plugin/Magnific-Popup/magnific-popup.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('public/assets/css/common/tailwind-custom.min.css') }}">
    <link rel="stylesheet" href="{{ asset('public/assets/tailwind/css/app.min.css') }}">
    <link rel="stylesheet" href="{{ asset('public/dist/css/site_custom.min.css') }}">
    

    @yield('child-css')

    <!-- User define custom dynamic css file -->
    @if (File::exists('Modules/CMS/Resources/assets/css/user-custom.css'))
    <link rel="stylesheet" href="{{ asset('Modules/CMS/Resources/assets/css/user-custom.css?v=' . time()) }}">
    @endif
</head>

<body class="flex flex-col justify-between">
    
<div class="fixed top-3 right-0 left-0 text-center z-[999]">
    @include('partials.flash-message')
 </div>
    @yield('child-content')

    <!-- Required JS -->
    <script>
        'use strict';

        var SITE_URL = "{{ url('/') }}";
        var CSRF_TOKEN = "{{ csrf_token() }}";
        var loginNeeded = false;
        const SWITCH_THEME_URL = "{{ route('theme.switch') }}";
        var themePreference = "{{ Cookie::get('theme_preference') }}";
        var txLnSts = {!! $json !!};
        var ACCESS_TOKEN = "{{ !empty($accessToken) ? $accessToken : '' }}";
        const is_demo = "{!! config('openAI.is_demo') !!}";
        const open_ai = @json(config('openAI'));
        const user_ip = "{{ str_replace('.', '_', getIpAddress()) }}";
    </script>
    
    <script src="{{ asset('public/assets/plugin/jquery-ui/jquery-3.6.3.min.js') }}"></script>
    <script src="{{ asset('public/assets/plugin/jquery-ui/jquery-ui.min.js') }}"></script>
    <script src="{{ asset('public/datta-able/plugins/bootstrap-v5/js/slim.min.js') }}"></script>
    <script src="{{ asset('public/assets/plugin/Magnific-Popup/magnific-popup.min.js') }}"></script>
    <script src="{{ asset('public/assets/plugin/Magnific-Popup/magnific-modal.min.js') }}"></script>
    <script src="{{ asset('public/frontend/assets/js/sweet-alert2.min.js') }}"></script>
    <script src="{{ asset('public/assets/chat/js/chat.min.js') }}"></script>
    <script src="{{ asset('public/assets/plugin/tailwind-components/tailwind-component.min.js') }}"></script>
    <script src="{{ asset('public/dist/js/custom/site/login.min.js')}}"></script>
    <script src="{{ asset('public/assets/js/shared/theme-preference.min.js') }}"></script>
    <script src="{{ asset('public/dist/js/custom/site/lang.min.js') }}"></script>
    <script src="{{ asset('public/dist/js/custom/site/package_switch.min.js') }}"></script>
    <script src="{{ asset('public/dist/js/custom/validation.min.js') }}"></script>
    <script src="{{ asset('public/dist/js/xss.min.js') }}"></script>

    @yield('child-js')

    @includeIf('gdpr::widget')

    <!-- User define custom dynamic js file -->
    @if (File::exists('Modules/CMS/Resources/assets/css/user-custom.js'))
    <script src="{{ asset('Modules/CMS/Resources/assets/js/user-custom.js?v=' . time()) }}"></script>
    @endif
</body>

</html>

