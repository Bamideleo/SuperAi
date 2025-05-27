@extends('admin.layouts.app')
@section('page_title', __('Payment'))
@section('content')
<!-- Main content -->
<div class="col-sm-12 list-container" id="payment-list-container">
    <div class="card">
        <div class="card-header bb-none pb-0">
            <h5>{{ __('Payments') }}</h5>
            <x-backend.group-filters :groups="$groups" :column="'status'" />
            <div class="card-header-right my-2 mx-md-0 mx-sm-4">
                <x-backend.button.batch-delete class="me-1" />
                <x-backend.button.export  class="me-1"/>
                <x-backend.button.filter class="me-0" />
            </div>
        </div>
        <x-backend.datatable.filter-panel class="mx-1">
            <div class="col-md-6">
                <x-backend.datatable.input-search />
            </div>
            <div class="col-md-3">
                <select class="select2-hide-search filter" name="status">
                    <option>{{ __('All Status') }}</option>
                    <option value="Active">{{ __('Active') }}</option>
                    <option value="Inactive">{{ __('Inactive') }}</option>
                    <option value="Pending">{{ __('Pending') }}</option>
                    <option value="Expired">{{ __('Expired') }}</option>
                    <option value="Cancel">{{ __('Cancel') }}</option>
                </select>
            </div>
            <div class="col-md-3">
                <select class="select2-hide-search filter" name="type">
                    <option>{{ __('All Type') }}</option>
                    <option value="subscription">{{ __('Subscription') }}</option>
                    <option value="onetime">{{ __('Onetime') }}</option>
                </select>
            </div>
        </x-backend.datatable.filter-panel>
        <x-backend.datatable.table-wrapper class="user-list-wallet user-list-processing-message need-batch-operation payment-table">
            @include('admin.layouts.includes.yajra-data-table')
        </x-backend.datatable.table-wrapper>
        @include('admin.layouts.includes.delete-modal')
    </div>
</div>
@endsection

@section('js')
    <script type="text/javascript">
        'use strict';
        var pdf = "{{ in_array('Modules\Subscription\Http\Controllers\PackageSubscriptionController@pdf', $prms) ? '1' : '0' }}";
        var csv = "{{ in_array('Modules\Subscription\Http\Controllers\PackageSubscriptionController@csv', $prms) ? '1' : '0' }}";
        var listContaner = "payment-list-container";
        var endRoute = "/payments/";
    </script>
    <script src="{{ asset('Modules/Subscription/Resources/assets/js/subscription.min.js') }}"></script>
    <script src="{{ asset('public/dist/js/custom/document-list.min.js') }}"></script>
@endsection
