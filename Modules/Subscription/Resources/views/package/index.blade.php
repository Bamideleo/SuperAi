@extends('admin.layouts.app')
@section('page_title', __('Plan'))

@section('content')

<!-- Main content -->
<div class="col-sm-12 list-container" id="package-list-container">
    <div class="card">
        <div class="card-header bb-none pb-0">
            <h5>{{ __('Plan') }}</h5>
            <x-backend.group-filters :groups="$groups" :column="'status'" />
            <div class="card-header-right my-2 mx-md-0 mx-sm-4">
                <x-backend.button.batch-delete class="me-1" />
                @if (in_array('Modules\Subscription\Http\Controllers\PackageController@create', $prms))
                    <a href="{{ route('package.create') }}" class="btn mb-0 btn-outline-primary custom-btn-small">
                        <span class="fa fa-plus"> &nbsp;</span>{{ __('Add Plan') }}
                    </a>
                @endif
                <x-backend.button.export  class="me-1"/>
                <x-backend.button.filter class="me-0" />
            </div>
        </div>
        <x-backend.datatable.filter-panel class="mx-1">
            <div class="col-md-8">
                <x-backend.datatable.input-search />
            </div>
            <div class="col-md-4">
                <select class="select2-hide-search filter" name="status">
                    <option>{{ __('All Status') }}</option>
                    <option value="Active">{{ __('Active') }}</option>
                    <option value="Inactive">{{ __('Inactive') }}</option>
                    <option value="Pending">{{ __('Pending') }}</option>
                </select>
            </div>
        </x-backend.datatable.filter-panel>
        <x-backend.datatable.table-wrapper class="user-list-wallet user-list-processing-message need-batch-operation"
            data-namespace="Modules\Subscription\Entities\Package" data-column="id">
            @include('admin.layouts.includes.yajra-data-table')
        </x-backend.datatable.table-wrapper>
        @include('admin.layouts.includes.delete-modal')
    </div>
</div>
@endsection

@section('js')
    <script type="text/javascript">
        'use strict';
        var pdf = "{{ in_array('Modules\Subscription\Http\Controllers\PackageController@pdf', $prms) ? '1' : '0' }}";
        var csv = "{{ in_array('Modules\Subscription\Http\Controllers\PackageController@csv', $prms) ? '1' : '0' }}";
        var listContaner = "package-list-container";
        var endRoute = "/packages/";
    </script>
    <script src="{{ asset('public/datta-able/plugins/select2/js/select2.full.min.js') }}"></script>
    <script src="{{ asset('Modules/Subscription/Resources/assets/js/subscription.min.js') }}"></script>
    <script src="{{ asset('public/dist/js/custom/document-list.min.js') }}"></script>
@endsection
