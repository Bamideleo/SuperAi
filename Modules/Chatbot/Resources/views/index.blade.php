<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ env('APP_NAME', 'Artifism') }} | {{ __('ChatBot') }} </title>
        <link rel="shortcut icon" href="{{ $favicon }}" type="image/x-icon">
        {{-- Laravel Mix - CSS File --}}
        <link rel="stylesheet" href="{{ asset('Modules/Chatbot/Resources/assets/css/app.css') }}">
    </head>
    <body>
        <div id="root"></div>
        {{-- Laravel Mix - JS File --}}
        <script>
            // App config
            const BASE_URL= '{{ $base_url }}';
            const BASE_API_URL= '{{ $base_api_url }}';
            const BASE_PATH = '{{ $base_path }}';
            const BASE_PATH_HOST = '{{ $base_path_host }}';

            const accessToken = `{!! $access_token !!}`;
            const isLocal = '{{ $is_local }}';
            const logout = '{{ route('users.logout') }}';
            const userId = '{{ auth()->user()->id ?? 1 }}';
            const lang = '{{ $lang }}';
            
            // Website meta config
            const WEBSITE_NAME = '{{ $website_name }}';
            const WEBSITE_URL = '{{ $base_url }}';
            const WEBSITE_DOMAIN = "{{ $base_path_host }}";
            const OG_IMAGE_URL = `${BASE_URL}/Modules/Chatbot/images/img-robot-face.png`;
            const DEFAULT_THEME_COLOR = "9163DD";
        </script>
        <script src="{{ asset('Modules/Chatbot/Resources/assets/js/app.js') }}"></script>
    </body>
</html>
