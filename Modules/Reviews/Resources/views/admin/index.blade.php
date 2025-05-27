@extends('admin.layouts.app')
@section('page_title', __('Reviews'))

@section('css')
    <link rel="stylesheet" href="{{ asset('Modules/Reviews/Resources/assets/css/review.min.css') }}">
@endsection

@section('content')

<div class="col-sm-12 list-container" id="reviews-list-container">
    <div class="card">
        <div class="card-header bb-none pb-0">
            <h5>{{ __('Reviews') }}</h5>
            <x-backend.group-filters :groups="$groups" :column="'status'" />
            <div class="card-header-right my-2 mx-md-0 mx-sm-4">
                <x-backend.button.batch-delete class="me-1" />
                @if (in_array('Modules\Reviews\Http\Controllers\ReviewsController@create', $prms))
                    <x-backend.button.add-new label="{{ __('Add Review') }}"  class="me-1" href="{{ route('admin.review.create') }}" />
                @endif
                <x-backend.button.export  class="me-1"/>
                <x-backend.button.filter class="me-0" />
            </div>
        </div>

        <x-backend.datatable.filter-panel class="mx-1">
            <div class="col-md-3">
                <x-backend.datatable.input-search />
            </div>
            <div class="col-md-3">
                <select class="select2-hide-search filter" name="rating">
                    <option value="">{{ __('All Rating') }}</option>
                    @for($i=1; $i<=5; $i++)
                    <option value="{{ $i }}">{{ $i }} Star</option>
                    @endfor
                </select>
            </div>
            <div class="col-md-3">
                <select class="select2-hide-search filter" name="status">
                    <option> {{ __('All Status') }} </option>
                    <option value="Active"> {{ __('Active') }} </option>
                    <option value="Inactive"> {{ __('Inactive') }} </option>
                </select>
            </div>
            <div class="col-md-3">
                <select class="filter select2" name="userId">
                    <option value="">{{ __('All Users') }}</option>
                    @foreach($users as $user)
                    <option value="{{ $user->id }}">{{ $user->name }}</option>
                    @endforeach
                </select>
            </div>
        </x-backend.datatable.filter-panel>

        <x-backend.datatable.table-wrapper class="user-list-wallet user-list-processing-message review-table need-batch-operation"
            data-namespace="Modules\Reviews\Entities\Review" data-column="id">
            @include('admin.layouts.includes.yajra-data-table')
        </x-backend.datatable.table-wrapper>

        @include('admin.layouts.includes.delete-modal')
    </div>
</div>
@endsection

@section('js')

<script type="text/javascript">
    'use strict';
    var pdf = "{{ in_array('Modules\Reviews\Http\Controllers\ReviewsController@pdf', $prms) ? '1' : '0' }}";
    var csv = "{{ in_array('Modules\Reviews\Http\Controllers\ReviewsController@csv', $prms) ? '1' : '0' }}";

    var listContaner = "reviews-list-container";
    var endRoute = "/reviews/";
</script>

    <script src="{{ asset('public/datta-able/plugins/select2/js/select2.full.min.js') }}"></script>
    <script src="{{ asset('public/dist/js/custom/yajra-export.min.js') }}"></script>
    <script src="{{ asset('public/dist/js/custom/document-list.min.js') }}"></script>
@endsection
