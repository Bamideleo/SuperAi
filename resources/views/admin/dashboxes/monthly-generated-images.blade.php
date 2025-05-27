<a href="{{ route('admin.features.admin.image.index') }}" target="_blank">
    <div class="card mb-0">
        <div class="card-block">
            <div class="row d-flex align-items-center">
                <div class="col-auto">
                    <i class="fas fa-file-image f-30 text-c-yellow rides-icon"></i>
                </div>
                <div class="col text-left">
                    <h3 class="font-weight-500">{{ $imageGeneratedThisMonth }}
                        @include('admin.dashboxes.partials.compare', [
                            'change' => $imageGeneratedThisMonthCompare,
                        ])
                    </h3>
                    <span class="d-block text-uppercase font-weight-600 c-gray-5">{{ __('Generated Images') }} <small class="font-weight-600 c-gray-5">({{ __('last :x days', ['x' => 30]) }})</small></span>
                </div>
            </div>
        </div>
    </div>
</a>