@extends('admin.layouts.app')
@section('page_title', __('FAQ'))
@section('css')
    <link rel="stylesheet" href="{{ asset('Modules/FAQ/Resources/assets/css/faq.min.css') }}">
@endsection
@section('content')
<div class="col-sm-12 list-container" id="faq-list-container">
    <div class="card">
        <div class="card-header bb-none pb-0">
            <h5>{{ __('FAQ') }}</h5>
            <x-backend.group-filters :groups="$groups" :column="'status'" />
            <div class="card-header-right my-2 mx-md-0 mx-sm-4">
                <x-backend.button.batch-delete class="me-1" />
                @if (in_array('Modules\FAQ\Http\Controllers\FAQController@create', $prms))
                    <x-backend.button.add-new label="{{ __('Add FAQ') }}"  class="me-1" href="{{ route('admin.faq.create') }}" />
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
        <x-backend.datatable.table-wrapper class="user-list-wallet user-list-processing-message faq-table need-batch-operation"
            data-namespace="Modules\FAQ\Entities\Faq" data-column="id" data-cache="faq">
            @include('admin.layouts.includes.yajra-data-table')
        </x-backend.datatable.table-wrapper>
        @include('admin.layouts.includes.delete-modal')
    </div>
</div>
@endsection
@section('js')
    <script type="text/javascript">
        'use strict';
        var pdf = "{{ in_array('Modules\FAQ\Http\Controllers\FAQController@pdf', $prms) ? '1' : '0' }}";
        var csv = "{{ in_array('Modules\FAQ\Http\Controllers\FAQController@csv', $prms) ? '1' : '0' }}";
        var listContaner = "faq-list-container";
        var endRoute = "/faq/";
    </script>
    <script src="{{ asset('public/datta-able/plugins/select2/js/select2.full.min.js') }}"></script>
    <script src="{{ asset('public/dist/js/custom/yajra-export.min.js') }}"></script>
    <script src="{{ asset('public/dist/js/custom/document-list.min.js') }}"></script>
@endsection
