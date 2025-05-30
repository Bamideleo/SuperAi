@extends('admin.layouts.app')
@section('page_title', __('View :x', ['x' => __('Voiceover')]))
@section('content')
    <div class="col-sm-12" id="page-container" data-val="edit">
        <div class="card">
            <div class="card-header">
                <h5><a href="{{ route('admin.features.textToSpeech.lists') }}">{{ __('Voiceover') }}</a> >> {{ __('View') }}</h5>
            </div>
            <div class="card-body px-3" id="no_shadow_on_card">
                <div class="col-sm-12 m-t-20 form-tabs">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link font-bold active text-uppercase" id="home-tab" data-bs-toggle="tab" href="#home"
                                role="tab" aria-controls="home"
                                aria-selected="true">{{ __(':x Information', ['x' => __('Voiceover')]) }}</a>
                        </li>
                    </ul>
                    <div class="col-sm-12 tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="row">
                                <div class="col-sm-9">
                                    <div class="form-group row">
                                        <label for="first_name"
                                            class="col-sm-2 col-form-label pe-0 fw-bold">{{ __('Prompt') }}
                                        </label>
                                        <div class="col-sm-10 fw-bold">
                                            <textarea class="blog_message form-control" readonly rows="5">{{ $audio->title }}</textarea>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="description"
                                            class="col-sm-2 col-form-label pe-0 fw-bold">{{ __('Audio') }}
                                        </label>
                                        <div class="col-sm-10 mt-2">
                                            <audio controls src="{{ $audio->googleAudioUrl() }}"></audio> 
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="description" class="col-sm-2 col-form-label pe-0 fw-bold">
                                            {{ __('User Name') }}
                                        </label>
                                        <div class="col-sm-10 mt-2">
                                            {{ optional($audio->voiceoverCreator)->name }}
                                        </div>
                                    </div>

                                    @foreach ($audio->generation_options as $key => $value)
                                        <div class="form-group row">
                                            <label for="description"
                                                class="col-sm-2 col-form-label pe-0 fw-bold">{{ ucfirst(str_replace('_', ' ', $key)) }}
                                            </label>
                                            <div class="col-sm-10 mt-2">
                                                @php
                                                    $config = moduleConfig('openai.voiceover.' . strtolower($audio->provider) . '.' . $key);
                                                @endphp
                                                {{ !is_null($value) && isset($config[$value]) ? $config[$value] : $value }}
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                        <div class="pt-4 pb-2">
                            <a href="{{ route('admin.features.textToSpeech.lists') }}"
                                class="btn all-cancel-btn custom-btn-cancel">{{ __('Back') }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection
