@extends('admin.layouts.app')
@section('page_title', __('Coupons'))
@section('css')
    <link rel="stylesheet" href="{{ asset('public/dist/css/marketing.min.css') }}">
@endsection
@section('content')
    <!-- Main content -->
    <div class="col-sm-12 list-container" id="coupon-list-container">
        <div class="card">
            <div class="card-header bb-none pb-0">
                <h5>{{ __('Coupons') }}</h5>
                <x-backend.group-filters :groups="$groups" :column="'status'" />
                <div class="card-header-right my-2 mx-md-0 mx-sm-4">
                    <x-backend.button.batch-delete class="me-1" />
                    @if (in_array('Modules\Coupon\Http\Controllers\CouponController@create', $prms))
                        <x-backend.button.add-new label="{{ __('Add Coupon') }}"  class="me-1" href="{{ route('coupon.create') }}" />
                    @endif
                    @if (hasPermission('Modules\Coupon\Http\Controllers\CouponRedeemController@index'))
                        <a href="{{ route('couponRedeem.index') }}" class="btn mb-0 btn-outline-primary custom-btn-small">
                            {{ __('Coupon Redeems') }}
                        </a>
                    @endif
                    <x-backend.button.export  class="me-1"/>
                    <x-backend.button.filter class="me-0" />
                </div>
            </div>
            <x-backend.datatable.filter-panel class="mx-1">
                <div class="col-md-9">
                    <x-backend.datatable.input-search />
                </div>
                <div class="col-md-3">
                    <select class="select2-hide-search filter" name="status">
                        <option> {{ __('All Status') }} </option>
                        <option value="Active"> {{ __('Active') }} </option>
                        <option value="Inactive"> {{ __('Inactive') }} </option>
                    </select>
                </div> 
            </x-backend.datatable.filter-panel>
            <x-backend.datatable.table-wrapper class="user-list-wallet user-list-processing-message review-table need-batch-operation"
                data-namespace="\Modules\Coupon\Http\Models\Coupon" data-column="id">
                @include('admin.layouts.includes.yajra-data-table')
            </x-backend.datatable.table-wrapper>
            @include('admin.layouts.includes.delete-modal')
        </div>
    </div>
@endsection
@section('js')
    <script type="text/javascript">
        'use strict';
        var pdf = "{{ in_array('Modules\Coupon\Http\Controllers\CouponController@downloadPdf', $prms) ? '1' : '0' }}";
        var csv = "{{ in_array('Modules\Coupon\Http\Controllers\CouponController@downloadCsv', $prms) ? '1' : '0' }}";
        var listContaner = "coupon-list-container";
        var endRoute = "/coupon/";
    </script>
    <script src="{{ asset('Modules/Coupon/Resources/assets/js/coupon.min.js') }}"></script>
    <script src="{{ asset('public/dist/js/custom/permission.min.js') }}"></script>
    <script src="{{ asset('public/dist/js/custom/document-list.min.js') }}"></script>
@endsection
