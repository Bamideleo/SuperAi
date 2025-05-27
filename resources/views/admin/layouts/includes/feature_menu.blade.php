<div class="card card-info shadow-none" id="nav">
    <div class="card-header p-t-20 border-bottom mb-2">
        @if (in_array('App\Http\Controllers\PreferenceController@index', $prms))
            <h5>{{ __('Features') }}</h5>
        @endif
    </div>
    <ul class="card-body nav nav-pills nav-stacked" id="mcap-tab" role="tablist">
        @foreach ($features as $feature)
            <li class="nav-item">
                <a class="nav-link h-lightblue text-left {{ isset($feature['key']) && $feature['key'] == $featureName ? 'active' : '' }}"
                    href="{{ route('admin.features.providers', $feature['key']) }}" role="tab" aria-controls="mcap-default"
                    aria-selected="true">{{ $feature['name'] }}</a>
            </li>
        @endforeach
    </ul>
</div>
