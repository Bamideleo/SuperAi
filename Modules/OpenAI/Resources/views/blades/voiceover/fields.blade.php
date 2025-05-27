
<div class="pt-5 flex justify-start flex-wrap gap-4 items-center text-speech">
    <div
        class="{{ count($voices) <= 1 ? "hidden" : "" }}  font-normal custom-dropdown-arrow font-Figtree text-14 text-color-14 dark:text-white flex flex-col gap-1.5">
        <label>{{ __('Voice') }}</label>
        <div class="relative img-option md:w-[225px] w-[170px]">
            <select id="data-attr">
                @foreach ($voices as $voice)
                    <option data-language="{{ $voice->language_code }}" data-gender="{{ $voice->gender }}"
                        data-name="{{ $voice->name }}" data-src="{{ $voice->fileUrl() }}"
                        value="{{ $voice->voice_name }}">{{ $voice->name }}</option>
                @endforeach
            </select>
        </div>
    </div>
    @foreach ($voiceover as $option)
        @if ($option['visibility'] && isset($option['name']) && $option['name'] != 'provider')
            @if ($option['type'] === 'dropdown')
                <!-- Default dropdown for other labels -->
                <div
                    class=" {{ count($option['value']) <= 1 ? "hidden" : "" }} font-normal custom-dropdown-arrow text-14 text-color-14 dark:text-white flex flex-col gap-1.5">
                    <div class="flex gap-2 justify-start items-center">
                        <label>{{ __($option['label']) }}</label>
                        @if (isset($option['tooltip']))
                            <div class="flex tooltips items-center text-color-14 dark:text-white bg-white dark:bg-color-3A dark:bg-color-47 justify-center">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_18565_11277)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M7.99935 2.00033C4.68564 2.00033 1.99935 4.68662 1.99935 8.00033C1.99935 11.314 4.68564 14.0003 7.99935 14.0003C11.3131 14.0003 13.9993 11.314 13.9993 8.00033C13.9993 4.68662 11.3131 2.00033 7.99935 2.00033ZM0.666016 8.00033C0.666016 3.95024 3.94926 0.666992 7.99935 0.666992C12.0494 0.666992 15.3327 3.95024 15.3327 8.00033C15.3327 12.0504 12.0494 15.3337 7.99935 15.3337C3.94926 15.3337 0.666016 12.0504 0.666016 8.00033ZM7.33268 5.33366C7.33268 4.96547 7.63116 4.66699 7.99935 4.66699H8.00602C8.37421 4.66699 8.67268 4.96547 8.67268 5.33366C8.67268 5.70185 8.37421 6.00033 8.00602 6.00033H7.99935C7.63116 6.00033 7.33268 5.70185 7.33268 5.33366ZM7.99935 7.33366C8.36754 7.33366 8.66602 7.63214 8.66602 8.00033V10.667C8.66602 11.0352 8.36754 11.3337 7.99935 11.3337C7.63116 11.3337 7.33268 11.0352 7.33268 10.667V8.00033C7.33268 7.63214 7.63116 7.33366 7.99935 7.33366Z"
                                            fill="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_18565_11277">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span class="voiceover-tooltip-text z-50  text-white items-center font-medium text-12 text-center rounded-lg px-2.5 py-[7px] absolute z-1 top-[27%] left-[50%] -ml-[57px]">
                                    {{ __($option['tooltip']) }}
                                </span>
                            </div>
                        @endif
                    </div>
                    <select
                        class="selectg block text-base leading-6 font-medium text-color-14 bg-white bg-clip-padding bg-no-repeat rounded-xl dark:bg-[#333332] m-0 focus:text-color-14 focus:bg-white focus:border-color-89 focus:outline-none md:w-[225px] w-[170px]"
                        id="{{ $option['name'] }}" name="{{ $option['name'] }}">
                        @foreach ($option['value'] as $key => $data)
                            @php
                                $languages = getShortLanguageName(true);
                                $isLanguageOption = ($option['name'] == 'language');

                                $value = $isLanguageOption ? array_search($data, $languages) : $data;
                                $show = moduleConfig('openai.voiceover.' . $provider . '.' . $option['name'])[$data] ?? ucfirst($data);
                            @endphp
                            <option value="{{ $value }}" {{ $data == ($option['default_value'] ?? '') ? 'selected' : '' }}>
                                {{ $show }}
                            </option>
                        @endforeach
                    </select>
                </div>
            @endif
        @elseif ($option['type'] === 'text' && $option['name'] != 'provider')
            <div class="font-normal text-14 text-color-14 dark:text-white flex flex-col gap-1.5">
                <label>{{ __($option['label']) }}</label>
                <input type="text" id="{{ $option['name'] }}" name="{{ $option['name'] }}"
                    value="{{ $option['value'] }}"
                    class="block text-base leading-6 font-medium text-color-14 bg-white bg-clip-padding bg-no-repeat rounded-xl dark:bg-[#333332] focus:text-color-14 focus:bg-white focus:border-color-89 focus:outline-none md:w-[225px] w-[170px]">
            </div>
        @endif

    @endforeach
</div>
<div class="mt-6">
    <div class="flex justify-between items-center">
        <p class="font-Figtree text-color-14 font-medium leading-6 text-base dark:text-white"> {{ __('Your Text') }}
        </p>
        <p class="text-color-89 font-Figtree font-medium text-[13px] leading-5">
            {{ __('Words Limit: :x', ['x' => preference('long_desc_length')]) }} </p>
    </div>
    <div id="textFieldsContainer">
        <div class="flex gap-3 w-full text-area-content">
            <div class="relative valid-parent border grow border-color-89 dark:border-color-47 dark:bg-[#333332] rounded-xl p-2 flex gap-3 mt-1.5"
                id="text-area">
                <img class="w-8 h-8 object-cover rounded-full" src="{{ objectStorage()->url(defaultImage('user')) }}" alt="{{ __('Image') }}">
                <textarea maxlength="{{ preference('long_desc_length') }}" id="textToSpeech-0" required
                    class="py-1 text-base overflow-y-scroll middle-sidebar-scroll leading-6 font-light !text-color-14 dark:!text-white bg-white dark:bg-[#333332] bg-clip-padding bg-no-repeat border border-none dark:!border-none mx-auto focus:text-color-14 focus:bg-white focus:border-none focus:dark:!border-none focus:outline-none px-0 outline-none form-control w-full textToSpeechInput"
                    placeholder="{{ __('Write down the text you want to voiceover..') }}" rows="4" name="prompt[]"></textarea>
            </div>
        </div>
    </div>
</div>
<div class="mt-7 lg:mt-3 flex justify-end items-center gap-2">
    <input class="hidden conversation-limit" value="{{ $conversationLimit }}" />
    <a id="addTextField"
        class="flex justify-end items-center text-color-14 dark:text-white font-Figtree text-[13px] leading-5 font-normal gap-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6 1.5C6.20711 1.5 6.375 1.66789 6.375 1.875V5.625H10.125C10.3321 5.625 10.5 5.79289 10.5 6C10.5 6.20711 10.3321 6.375 10.125 6.375H6.375V10.125C6.375 10.3321 6.20711 10.5 6 10.5C5.79289 10.5 5.625 10.3321 5.625 10.125V6.375H1.875C1.66789 6.375 1.5 6.20711 1.5 6C1.5 5.79289 1.66789 5.625 1.875 5.625H5.625V1.875C5.625 1.66789 5.79289 1.5 6 1.5Z"
                fill="currentColor" />
        </svg>
        <p> {{ __('Text Block') }}</p>
    </a>
</div>


<script src="{{ asset('public/assets/js/user/text-to-speech.min.js') }}"></script>
<script src="{{ asset('Modules/OpenAI/Resources/assets/js/custom-tom-select.min.js') }}"></script>
