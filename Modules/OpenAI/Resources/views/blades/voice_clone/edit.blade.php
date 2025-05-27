@extends('layouts.user_master')
@section('page_title', __('Voice Clone'))

@section('css')
    <link rel="stylesheet" href="{{ asset('public/dist/css/site_custom.min.css') }}">
@endsection

@section('content')
    <div class="w-[68.9%] 6xl:w-[85.9%] dark:bg-[#292929] bg-[#F6F3F2] flex flex-col flex-1 border-l dark:border-[#474746] border-color-DF">
        <div class="9xl:px-[185px] 7xl:px-[140px] px-5 pt-[74px] 9xl:pb-[22px] pb-28">
            <div class="lg:w-[556px] mx-auto">
                <a href="{{ route('user.voiceClone.index') }}" class="flex justify-start items-center gap-3 text-color-14 dark:text-white text-[15px] leading-[22px] font-normal font-Figtree">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.875 9C16.875 8.68934 16.6232 8.4375 16.3125 8.4375H3.0455L6.58525 4.89775C6.80492 4.67808 6.80492 4.32192 6.58525 4.10225C6.36558 3.88258 6.00942 3.88258 5.78975 4.10225L1.28975 8.60225C1.07008 8.82192 1.07008 9.17808 1.28975 9.39775L5.78975 13.8977C6.00942 14.1174 6.36558 14.1174 6.58525 13.8977C6.80492 13.6781 6.80492 13.3219 6.58525 13.1023L3.0455 9.5625H16.3125C16.6232 9.5625 16.875 9.31066 16.875 9Z" fill="currentColor"/>
                    </svg>                    
                    <p>{{ __('Back')}}</p>
                </a>
                <form id="voiceCloneEditForm" 
                    class="form-horizontal col-sm-12" enctype="multipart/form-data">
                    @csrf
                    <div class="mt-4 bg-white dark:bg-color-3A md:p-7 p-4 rounded-xl">
                        <p class="text-color-14 dark:text-white font-semibold font-RedHat text-[24px] leading-[32px]">{{ __('Edit Voice Clone') }}</p>
        
                        
                        <div class="flex items-center gap-6 mt-6">
                            <span>
                                <img id="frame" class="rounded-full w-[108px] h-[108px] dark:bg-white" src="{{ $clone->fileUrl()  }}" alt="{{ __('Image') }}">
                            </span>
                            <div class="cursor-pointer overflow-hidden relative">
                                <button class="text-color-14 dark:text-white text-15 font-medium cursor-pointer"> {{ __('Add Actor Picture')  }} </button>
                                <input class="cursor-pointer w-28 h-6 text-[0px] absolute left-0 top-0 opacity-0" type="file" onchange="preview()" name="image" id="image">
                            </div>
                        </div>
                        
                        <input type="text" class="hidden" name="provider" id="provider" value="{{ $clone->provider ?? 'elevenlabs' }}">
                        <div class="relative flex flex-col mt-6">
                            <label class="text-color-14 dark:text-white font-Figtree text-14 font-normal">{{ __('Name')}}</label>
                            <input type="text" value="{{ $clone->name }}" class="w-full px-4 h-12 py-1.5 text-base mt-1.5 font-normal placeholder-color-89 text-color-14 dark:!text-white bg-white dark:bg-[#333332] bg-clip-padding bg-no-repeat border border-solid border-color-89 dark:!border-color-47 rounded-xl focus:text-color-14 focus:dark:!text-white focus:bg-white focus:border-color-89 focus:outline-none form-control"
                            name="name" id="name" required  oninvalid="this.setCustomValidity('This field is required.')">
                        </div>
                        <div class="flex flex-col mt-7">
                            <label class="require text-color-14 dark:text-white font-Figtree text-14 font-normal">{{  __('Gender') }}</label>
                            <div class="flex items-center space-x-4">
                                <label class="flex items-center space-x-2 text-color-14 dark:text-white">
                                <input type="radio" id="gender" {{  $clone->gender == 'Male' ? 'checked' : ''  }} name="gender" value="Male" class="form-radio text-blue-500">
                                <span>{{ __('Male') }}</span>
                                </label>
                                <label class="flex items-center space-x-2 text-color-14 dark:text-white">
                                <input type="radio" id="gender" {{  $clone->gender == 'Female' ? 'checked' : ''  }} name="gender" value="Female" class="form-radio text-blue-500">
                                <span>{{ __('Female') }}</span>
                                </label>
                            </div>
                        </div>

                        <div class="flex flex-col mt-7">
                            <label class="text-color-14 dark:text-white font-Figtree text-14 font-normal">{{  __('Audio') }}</label>
                            <div class="h-[92px] flex md:gap-5 gap-4 justify-start items-center">
                                <div class="siglePlay cursor-pointer" data-src="{{ $clone->googleAudioUrl() }}" onclick="playstop()">
                                    <svg id="playIcon" class="text-color-14 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M18.8176 14.0271L8.08059 20.7949C7.16938 21.3686 6 20.6739 6 19.5172V5.98176C6 4.82693 7.16769 4.13036 8.08059 4.70594L18.8176 11.4737C19.0249 11.6022 19.1972 11.788 19.317 12.0122C19.4369 12.2365 19.5 12.4911 19.5 12.7504C19.5 13.0097 19.4369 13.2643 19.317 13.4886C19.1972 13.7128 19.0249 13.8986 18.8176 14.0271Z" fill="currentColor"/>
                                    </svg>  
                                
                                    <svg id="pauseIcon" class="text-color-14 dark:text-white hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5 20.25H6.75V3.75H10.5V20.25ZM17.25 20.25H13.5V3.75H17.25V20.25Z" fill="currentColor"/>
                                    </svg>
                                </div>
                                <div class="flex md:gap-5 gap-4 items-center">
                                    <div id="waveform" class="lg:w-[320px] h-[60px] res-audio"></div>
                                    <div class="w-[70px]" id="waveform-time-indicator">
                                        <p class="font-medium text-color-14 font-Figtree leading-6 dark:text-white time">00:00:00</p>
                                    </div>
                                </div>
                                <div id="speakerButton" class="cursor-pointer">
                                    <svg  id="unmutedIcon" class="text-color-14 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_9805_6393)">
                                            <path d="M13.134 4.18446C13.2749 4.08389 13.4397 4.02196 13.612 4.00485C13.7844 3.98774 13.9582 4.01606 14.1161 4.08697C14.2741 4.15789 14.4106 4.26891 14.5121 4.40897C14.6136 4.54902 14.6765 4.7132 14.6946 4.88512L14.7 4.98752V19.0116C14.7001 19.1844 14.6547 19.3543 14.5684 19.5042C14.4821 19.654 14.3579 19.7787 14.2083 19.8657C14.0586 19.9527 13.8887 19.999 13.7155 20C13.5423 20.0009 13.3719 19.9565 13.2213 19.8712L13.1349 19.8155L7.212 15.5927H4.8C4.34588 15.5928 3.90849 15.4216 3.57551 15.1135C3.24252 14.8053 3.03856 14.3828 3.0045 13.9309L3 13.7961V10.203C2.99986 9.74972 3.17137 9.31316 3.48015 8.98081C3.78893 8.64846 4.21216 8.44488 4.665 8.41089L4.8 8.4064H7.212L13.134 4.18446ZM18.9003 7.31319C19.5615 7.90242 20.0904 8.62457 20.4523 9.43223C20.8142 10.2399 21.0008 11.1148 21 11.9995C21.0008 12.8843 20.8142 13.7592 20.4523 14.5669C20.0904 15.3745 19.5615 16.0967 18.9003 16.6859C18.8125 16.7659 18.7096 16.8277 18.5977 16.8677C18.4858 16.9078 18.367 16.9254 18.2483 16.9194C18.1296 16.9134 18.0132 16.884 17.9059 16.8328C17.7986 16.7817 17.7026 16.7098 17.6233 16.6214C17.5439 16.533 17.483 16.4298 17.4439 16.3177C17.4048 16.2057 17.3883 16.087 17.3954 15.9685C17.4025 15.8501 17.433 15.7342 17.4853 15.6276C17.5375 15.521 17.6104 15.4258 17.6997 15.3475C18.1724 14.9267 18.5504 14.4109 18.809 13.8338C19.0676 13.2568 19.2008 12.6317 19.2 11.9995C19.2 10.6701 18.6222 9.47536 17.6997 8.65163C17.6104 8.5733 17.5375 8.47809 17.4853 8.37148C17.433 8.26488 17.4025 8.14901 17.3954 8.03056C17.3883 7.9121 17.4048 7.79342 17.4439 7.68136C17.483 7.5693 17.5439 7.46608 17.6233 7.37767C17.7026 7.28926 17.7986 7.21741 17.9059 7.16627C18.0132 7.11513 18.1296 7.08571 18.2483 7.07971C18.367 7.07372 18.4858 7.09126 18.5977 7.13134C18.7096 7.17141 18.8125 7.23322 18.9003 7.31319ZM17.1003 9.32175C17.478 9.65838 17.7801 10.0709 17.9868 10.5322C18.1936 10.9935 18.3003 11.4933 18.3 11.9986C18.3006 12.5043 18.194 13.0044 17.9873 13.4661C17.7805 13.9278 17.4782 14.3405 17.1003 14.6773C16.9296 14.8286 16.7077 14.9095 16.4795 14.9037C16.2513 14.8978 16.0339 14.8056 15.8712 14.6458C15.7086 14.486 15.6128 14.2704 15.6034 14.0428C15.594 13.8151 15.6716 13.5924 15.8205 13.4197L15.8997 13.3389C16.2687 13.0083 16.5 12.5313 16.5 11.9995C16.5011 11.5395 16.3244 11.0968 16.0068 10.7635L15.8997 10.6602C15.8104 10.5819 15.7375 10.4867 15.6853 10.3801C15.633 10.2735 15.6025 10.1576 15.5954 10.0391C15.5883 9.92067 15.6048 9.80198 15.6439 9.68992C15.683 9.57786 15.7439 9.47465 15.8233 9.38624C15.9026 9.29783 15.9986 9.22598 16.1059 9.17483C16.2132 9.12369 16.3296 9.09428 16.4483 9.08828C16.567 9.08228 16.6858 9.09983 16.7977 9.1399C16.9096 9.17998 17.0125 9.24178 17.1003 9.32175Z" fill="currentColor"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_9805_6393">
                                            <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg> 

                                    <svg id="mutedIcon" class="text-color-14 dark:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_10964_6466)">
                                        <path d="M13.134 4.18446C13.2749 4.08389 13.4397 4.02196 13.612 4.00485C13.7844 3.98774 13.9582 4.01606 14.1161 4.08697C14.2741 4.15789 14.4106 4.26891 14.5121 4.40897C14.6136 4.54902 14.6765 4.7132 14.6946 4.88512L14.7 4.98752V19.0116C14.7001 19.1844 14.6547 19.3543 14.5684 19.5042C14.4821 19.654 14.3579 19.7787 14.2083 19.8657C14.0586 19.9527 13.8887 19.999 13.7155 20C13.5423 20.0009 13.3719 19.9565 13.2213 19.8712L13.1349 19.8155L7.212 15.5927H4.8C4.34588 15.5928 3.90849 15.4216 3.57551 15.1135C3.24252 14.8053 3.03856 14.3828 3.0045 13.9309L3 13.7961V10.203C2.99986 9.74972 3.17137 9.31316 3.48015 8.98081C3.78893 8.64846 4.21216 8.44489 4.665 8.41089L4.8 8.4064H7.212L13.134 4.18446Z" fill="#141414"/>
                                        <path d="M22 13.9995L20 12L22 10.0005L21.0014 9L19 10.9995L17 9L16 10.0005L18 12L16 13.9995L17 15L19 13.0005L21 15L22 13.9995Z" fill="currentColor"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_10964_6466">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6">
                            <button id="edit-voice-clone" class="cursor-pointer background-gradient-one magic-bg w-full rounded-xl text-16 text-white font-semibold py-3 flex justify-center items-center gap-3 mt-[23px]">
                                <span>{{ __('Update Voice Clone')}}</span>
                                <span class="items-center clone-loader hidden">
                                    <svg class="animate-spin h-5 w-5 m-auto" xmlns="http://www.w3.org/2000/svg" width="72"
                                        height="72" viewBox="0 0 72 72" fill="none">
                                        <mask id="path-1-inside-1_1032_3036" fill="white">
                                            <path
                                                d="M67 36C69.7614 36 72.0357 38.2493 71.6534 40.9841C70.685 47.9121 67.7119 54.4473 63.048 59.7573C57.2779 66.3265 49.3144 70.5713 40.644 71.6992C31.9736 72.8271 23.1891 70.761 15.9304 65.8866C8.67173 61.0123 3.4351 53.6628 1.19814 45.2104C-1.03881 36.7579 -0.123172 27.7803 3.77411 19.9534C7.67139 12.1266 14.2839 5.98568 22.3772 2.67706C30.4704 -0.631565 39.4912 -0.881694 47.7554 1.97337C54.4353 4.28114 60.2519 8.49021 64.5205 14.0322C66.2056 16.2199 65.3417 19.2997 62.9417 20.6656L60.8567 21.8524C58.4567 23.2183 55.4379 22.3325 53.5977 20.2735C50.9338 17.2927 47.5367 15.0161 43.7066 13.6929C38.2888 11.8211 32.3749 11.9851 27.0692 14.1542C21.7634 16.3232 17.4284 20.3491 14.8734 25.4802C12.3184 30.6113 11.7181 36.4969 13.1846 42.0381C14.6511 47.5794 18.0842 52.3975 22.8428 55.5931C27.6014 58.7886 33.3604 60.1431 39.0445 59.4037C44.7286 58.6642 49.9494 55.8814 53.7321 51.5748C56.4062 48.5302 58.2325 44.8712 59.0732 40.9628C59.6539 38.2632 61.8394 36 64.6008 36H67Z" />
                                        </mask>
                                        <path
                                            d="M67 36C69.7614 36 72.0357 38.2493 71.6534 40.9841C70.685 47.9121 67.7119 54.4473 63.048 59.7573C57.2779 66.3265 49.3144 70.5713 40.644 71.6992C31.9736 72.8271 23.1891 70.761 15.9304 65.8866C8.67173 61.0123 3.4351 53.6628 1.19814 45.2104C-1.03881 36.7579 -0.123172 27.7803 3.77411 19.9534C7.67139 12.1266 14.2839 5.98568 22.3772 2.67706C30.4704 -0.631565 39.4912 -0.881694 47.7554 1.97337C54.4353 4.28114 60.2519 8.49021 64.5205 14.0322C66.2056 16.2199 65.3417 19.2997 62.9417 20.6656L60.8567 21.8524C58.4567 23.2183 55.4379 22.3325 53.5977 20.2735C50.9338 17.2927 47.5367 15.0161 43.7066 13.6929C38.2888 11.8211 32.3749 11.9851 27.0692 14.1542C21.7634 16.3232 17.4284 20.3491 14.8734 25.4802C12.3184 30.6113 11.7181 36.4969 13.1846 42.0381C14.6511 47.5794 18.0842 52.3975 22.8428 55.5931C27.6014 58.7886 33.3604 60.1431 39.0445 59.4037C44.7286 58.6642 49.9494 55.8814 53.7321 51.5748C56.4062 48.5302 58.2325 44.8712 59.0732 40.9628C59.6539 38.2632 61.8394 36 64.6008 36H67Z"
                                            stroke="url(#paint0_linear_1032_3036)" stroke-width="24"
                                            mask="url(#path-1-inside-1_1032_3036)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_1032_3036" x1="46.8123" y1="63.1382" x2="21.8195"
                                                y2="6.73779" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stop-color="#E60C84" />
                                                <stop offset="1" stop-color="#FFCF4B" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
              </div>
          </div>
    </div>
@endsection


@section('js')
    <script>
        'use strict';
        var PROMPT_URL = '{{ route("user.voiceClone.update", ["id" => techEncrypt($clone->id)]) }}';
    </script>
    <script src="{{ asset('public/dist/js/custom/validation.min.js') }}"></script>
    <script src="{{ asset('Modules/OpenAI/Resources/assets/js/customer/voice_clone/script.min.js') }}"></script>
    <script src="{{ asset('public/assets/js/user/speech-view.min.js') }}"></script>
@endsection
