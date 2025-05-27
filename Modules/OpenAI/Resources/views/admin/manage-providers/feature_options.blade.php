
@extends('admin.layouts.app')
@section('page_title', __('Provider Options'))

@section('content')

    <!-- Main content -->
    <div class="col-sm-12" id="company-settings-container">
        <div class="card">
            <div class="card-body row">
                <div class="col-lg-3 col-12 z-index-10 pe-0 ps-0 ps-md-3">
                    @include('admin.layouts.includes.feature_menu')
                </div>
                <div class="col-lg-9 col-12 ps-0">
                    <div class="card card-info shadow-none mb-0">
                        <div class="card-header p-t-20 border-bottom">
                            <h5>{{ __(':x Options', ['x' => ucwords($providerName)]) }}</h5>
                            <div class="card-header-right">

                            </div>
                        </div>
                        

                        <div class="card-body">
                            @if ($featureOptions)
                            <div class="d-flex justify-content-start alert alert-warning">
                                <b>{{ __('Fields left blank or has single value won\'t be appear on the user panel.') }}</b>
                            </div>
                            @endif
                            <form method="post" action="{{ route('admin.features.provider_manage', [$featureName, $providerName]) }}" id="aiSettings">
                                @csrf
                                <div class="tab-content p-0 box-shadow-unset" id="topNav-v-pills-tabContent">
                                    @if (isset($fields) && !empty($fields))
                                        @foreach ($featureOptions as $option)
                                            @foreach ($fields as $field)
                                                @if ($option['name'] == $field['name'])

                                                    @if($option['type'] == 'checkbox')
                                                        <div class="form-group row">
                                                            <label for="rating"
                                                                class="col-sm-2 control-label text-left">{{ $field['label'] }}</label>
                                                            <div class="col-9 d-flex mt-neg-2">
                                                                <div class="ltr:me-3 rtl:ms-3">
                                                                    <div class="switch switch-bg d-inline m-r-10">
                                                                        <input type="checkbox" name="{{ $field['name'] }}"
                                                                            class="checkActivity" id="{{ $field['name'] }}"
                                                                             {{ $field['value'] == 'on' ? 'checked' : '' }} >
                                                                        <label for="{{ $field['name'] }}" class="cr"></label>
                                                                    </div>
                                                                </div>
                                                                <div class="mt-2">
                                                                    <span>{{ __('Enable :x for :y generation.', ['x' => ucwords($providerName), 'y' => ucwords($featureName)]) }}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    @endif
                                                    
                                                    @if ($option['type'] == 'textarea')
                                                        <div class="form-group row">
                                                            <div class="col-12">
                                                                <label for="{{ $option['name'] }}" class="control-label">{{ $option['label'] }}</label>
                                                                <textarea class="form-control inputFieldDesign" rows="2" name="{{ $option['name'] }}" placeholder="{{ $option['placeholder'] }}"
                                                                @if(isset($option['tooltip_limit'])) maxlength="{{ $option['tooltip_limit'] }}" @endif>{{ $field['value'] ?? $option['value'] }}</textarea>
                                                            </div>
                                                        
                                                            <div class="d-flex align-items-start mt-2">
                                                                <span class="badge badge-danger">{{ __('Note') }}!</span>
                                                                <div class="d-flex flex-column col-sm-12">
                                                                    <span class="px-4">{{ __('Kindly note that this value will only be displayed in the user panel.') }}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    @endif

                                                    @if ($option['type'] == 'dropdown')
                                                        <div class="form-group row">
                                                            <div class="col-12">
                                                                <label for="{{ $option['name'] . '[]' }}" class="control-label">
                                                                    {{ $option['label'] }}

                                                                    @if(!empty($option['note']))
                                                                            <div
                                                                                class="tooltips cursor-pointer neg-transition-scale ms-2">
                                                                                <svg width="12" height="12" viewBox="0 0 12 12"
                                                                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                                        d="M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6.66667 10C6.66667 10.3682 6.36819 10.6667 6 10.6667C5.63181 10.6667 5.33333 10.3682 5.33333 10C5.33333 9.63181 5.63181 9.33333 6 9.33333C6.36819 9.33333 6.66667 9.63181 6.66667 10ZM6 1.33333C4.52724 1.33333 3.33333 2.52724 3.33333 4H4.66667C4.66667 3.26362 5.26362 2.66667 6 2.66667H6.06287C6.76453 2.66667 7.33333 3.23547 7.33333 3.93713V4.27924C7.33333 4.62178 7.11414 4.92589 6.78918 5.03421C5.91976 5.32402 5.33333 6.13765 5.33333 7.05409V8.66667H6.66667V7.05409C6.66667 6.71155 6.88586 6.40744 7.21082 6.29912C8.08024 6.00932 8.66667 5.19569 8.66667 4.27924V3.93713C8.66667 2.49909 7.50091 1.33333 6.06287 1.33333H6Z"
                                                                                        fill="#898989" />
                                                                                </svg>
                                                                                <span   
                                                                                    class="porvider-manager-tooltip-text">{!! $option['note'] !!}</span>
                                                                            </div>
                                                                        
                                                                    @endif
                                                                </label>
                                                               
                                                                <select class="form-control select2 inputFieldDesign sl_common_bx @if($option['label'] == 'Languages') language-tags @endif" name="{{ $option['name'] . '[]' }}" multiple @if(isset($option['required']) && $option['required']) required @endif>
                                                                    @foreach ($option['value'] as $value)
                                                                        <option value="{{ $value }}" {{ in_array($value, $field['value']) ? 'selected' : '' }}> {{ $value }} </option>
                                                                    @endforeach
                                                                </select>
                                                            </div>
                                                        </div>
                                                    @endif

                                                    @if ($option['type'] == 'number')
                                                        <div class="form-group row">
                                                            <div class="col-12">
                                                                <label for="{{ $option['name'] }}" class="control-label">{{ $option['label'] }}</label>
                                                                <input class="form-control inputFieldDesign positive-int-number" type="{{ $option['type'] }}" name="{{ $option['name'] }}"
                                                                    @if(isset($option['required']) && $option['required']) required @endif
                                                                    @if (isset($option['min'])) min="{{ $option['min'] }}" data-min="{{ __('The value must be :x than or equal to :y', ['x' => __('greater'), 'y' => $option['min']]) }}" @endif
                                                                    @if (isset($option['max'])) max="{{ $option['max'] }}" data-max="{{ __('The value must be :x than or equal to :y.', ['x' => __('less'), 'y' => $option['max']]) }}" @endif
                                                                    id="{{ $option['name'] }}" value="{{ $field['value'] }}" >
                                                            </div>
                                                        </div>
                                                    @endif
                                                    
                                                    @if ($option['type'] == 'slider')
                                                        <div class="form-group row">
                                                            <div class="col-12">
                                                                <label for="{{ $option['name'] }}" class="control-label">{{ $option['label'] }}</label>
                                                                <input class="form-control inputFieldDesign positive-int-number" type="number" name="{{ $option['name'] }}"
                                                                    @if(isset($option['required']) && $option['required']) required @endif
                                                                    @if (isset($option['min'])) min="{{ $option['min'] }}" data-min="{{ __('The value must be :x than or equal to :y', ['x' => __('greater'), 'y' => $option['min']]) }}" @endif
                                                                    @if (isset($option['max'])) max="{{ $option['max'] }}" data-max="{{ __('The value must be :x than or equal to :y.', ['x' => __('less'), 'y' => $option['max']]) }}" @endif
                                                                    id="{{ $option['name'] }}" value="{{ $field['value'] }}" >
                                                            </div>
                                                        </div>
                                                    @endif

                                                    @if ($option['type'] == 'dropdown-with-image')
                                                        <div class="form-group row d-none">
                                                            <div class="col-12">
                                                                <label for="{{ $option['name'] . '[]' }}" class="control-label">{{ $option['label'] }}</label>
                                                                <select class="form-control select2 imageStyle inputFieldDesign sl_common_bx" name="{{ $option['name'] . '[]' }}" multiple>
                                                                    @foreach ($option['value'] as $value)
                                                                        <option value="{{ json_encode($value) }}" data-image="{{ objectStorage()->url($value['url']) }}" selected> {{ $value['label'] }} </option>
                                                                    @endforeach
                                                                </select>
                                                            </div>
                                                        </div>
                                                    @endif
                                                @endif
                                            @endforeach
                                        @endforeach
                                    @else
                                        @foreach ($featureOptions as $option)

                                            @if($option['type'] == 'checkbox')
                                                <div class="form-group row">
                                                    <label for="rating"
                                                        class="col-sm-2 control-label text-left">{{ $option['label'] }}</label>
                                                    <div class="col-9 d-flex mt-neg-2">
                                                        <div class="ltr:me-3 rtl:ms-3">
                                                            <div class="switch switch-bg d-inline m-r-10">
                                                                <input type="checkbox" name="{{ $option['name'] }}"
                                                                    class="checkActivity" id="{{ $option['name'] }}" {{ $option['value'] == 'on' ? 'checked' : '' }} >
                                                                <label for="{{ $option['name'] }}" class="cr"></label>
                                                            </div>
                                                        </div>
                                                        <div class="mt-2">
                                                            <span>{{ __('Enable :x for :y generation.', ['x' => ucwords($providerName), 'y' => ucwords($featureName)]) }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            @endif

                                            @if ($option['type'] == 'dropdown')
                                                <div class="form-group row">
                                                    <div class="col-12">
                                                        <label for="{{ $option['name'] }}" class="control-label">{{ $option['label'] }}</label>
                                                        <select class="form-control select2 inputFieldDesign sl_common_bx @if($option['label'] == 'Languages') language-tags @endif"
                                                            name="{{ $option['name'] . '[]' }}" multiple>
                                                            @foreach ($option['value'] as $value)
                                                                <option value="{{ $value }}" selected> {{ $value }} </option>
                                                            @endforeach
                                                        </select>
                                                    </div>
                                                </div>
                                            @endif

                                            @if ($option['type'] == 'number')
                                                <div class="form-group row">
                                                    <div class="col-12">
                                                        <label for="{{ $option['name'] }}" class="control-label">{{ $option['label'] }}</label>
                                                        <input class="form-control inputFieldDesign positive-int-number" type="{{ $option['type'] }}" name="{{ $option['name'] }}"
                                                            @if(isset($option['required']) && $option['required']) required @endif
                                                            @if (isset($option['min'])) min="{{ $option['min'] }}" data-min="{{ __('The value must be :x than or equal to :y', ['x' => __('greater'), 'y' => $option['min']]) }}" @endif
                                                            @if (isset($option['max'])) max="{{ $option['max'] }}" data-max="{{ __('The value must be :x than or equal to :y.', ['x' => __('less'), 'y' => $option['max']]) }}" @endif
                                                            id="{{ $option['name'] }}" value="{{ $option['value'] }}" >
                                                    </div>
                                                </div>
                                            @endif
                                            
                                            @if ($option['type'] == 'dropdown-with-image')
                                                <div class="form-group row d-none">
                                                    <div class="col-12">
                                                        <label for="{{ $option['name'] . '[]' }}" class="control-label">{{ $option['label'] }}</label>
                                                        <select class="form-control select2 imageStyle inputFieldDesign sl_common_bx" name="{{ $option['name'] . '[]' }}" multiple>
                                                            @foreach ($option['value'] as $value)
                                                                <option value="{{ json_encode($value) }}" data-image="{{ objectStorage()->url($value['url']) }}" selected> {{ $value['label'] }} </option>
                                                            @endforeach
                                                        </select>
                                                    </div>
                                                </div>
                                            @endif
                                            
                                            @if ($option['type'] == 'slider')
                                                <div class="form-group row">
                                                    <div class="col-12">
                                                        <label for="{{ $option['name'] }}" class="control-label">{{ $option['label'] }}</label>
                                                        <input class="form-control inputFieldDesign positive-int-number" type="number" name="{{ $option['name'] }}"
                                                            @if(isset($option['required']) && $option['required']) required @endif
                                                            @if (isset($option['min'])) min="{{ $option['min'] }}" data-min="{{ __('The value must be :x than or equal to :y', ['x' => __('greater'), 'y' => $option['min']]) }}" @endif
                                                            @if (isset($option['max'])) max="{{ $option['max'] }}" data-max="{{ __('The value must be :x than or equal to :y.', ['x' => __('less'), 'y' => $option['max']]) }}" @endif
                                                            id="{{ $option['name'] }}" value="{{ $option['value'] }}">
                                                    </div>
                                                </div>
                                            @endif

                                            @if ($option['type'] == 'textarea')
                                                <div class="form-group row">
                                                    <div class="col-12">
                                                        <label for="{{ $option['name'] }}" class="control-label">{{ $option['label'] }}</label>
                                                        <textarea class="form-control inputFieldDesign" rows="2" name="{{ $option['name'] }}" placeholder="{{ $option['placeholder'] }}"
                                                        @if(isset($option['tooltip_limit'])) maxlength="{{ $option['tooltip_limit'] }}" @endif>{{ $field['value'] ?? $option['value'] }}</textarea>
                                                    </div>
                                                
                                                    <div class="d-flex align-items-start mt-2">
                                                        <span class="badge badge-danger">{{ __('Note') }}!</span>
                                                        <div class="d-flex flex-column col-sm-12">
                                                            <span class="px-4">{{ __('Kindly note that this value will only be displayed in the user panel.') }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            @endif
                                        @endforeach
                                    @endif
                                <div class="footer py-0">
                                    <div class="form-group row">
                                        <label for="btn_save" class="col-sm-3 control-label"></label>
                                        <div class="m-auto">
                                            <button type="submit"
                                                class="btn form-submit custom-btn-submit float-right package-submit-button"
                                                id="footer-btn">{{ __('Save') }}</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    @include('mediamanager::image.modal_image')

@endsection

@section('js')
    <script src="{{ asset('Modules/OpenAI/Resources/assets/js/admin/feature-options.min.js') }}"></script>
    <script src="{{ asset('Modules/OpenAI/Resources/assets/js/feature-options.min.js') }}"></script>
    <script src="{{ asset('public/dist/js/custom/validation.min.js') }}"></script>
@endsection
