@extends('admin.layouts.app')
@section('page_title', __('Tickets'))
@section('css')
    <link rel="stylesheet" href="{{ asset('public/dist/plugins/bootstrap-daterangepicker/daterangepicker.min.css') }}">
    <link rel="stylesheet" href="{{ asset('Modules/Ticket/Resources/assets/css/style.min.css') }}">
    <link rel="stylesheet" href="{{ asset('public/dist/css/product.min.css') }}">
@endsection
@section('content')
    <!-- Main content -->
    <div class="col-sm-12 list-container" id="ticket-list-container">
        <div class="card">
            <div class="card-header bb-none pb-0 mb-2">
                <h5>{{ __('Tickets') }}</h5>
                <div class="card-header-right my-2 mx-md-0 mx-sm-4">
                    <x-backend.button.batch-delete class="me-1" />
                    @if (in_array('Modules\Ticket\Http\Controllers\TicketController@add', $prms))
                        <a href="{{ route('admin.threadAdd') }}" class="btn btn-outline-primary my-0 custom-btn-small">
                            <span class="fa fa-plus"> &nbsp;</span>{{ __('Add Ticket') }}
                        </a>
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
                    <div class="input-group">
                        <button type="button" class="form-control date-drop-down" id="daterange-btn">
                            <span class="{{ languageDirection() == 'ltr' ? 'float-left' : 'float-right' }}"><i class="fa fa-calendar"></i> {{ __('Date range picker') }}</span>
                            <i class="fa fa-caret-down {{ languageDirection() == 'ltr' ? 'float-right' : 'float-left' }} pt-1"></i>
                        </button>
                    </div>
                </div>
                <input class="form-control" id="startfrom" type="hidden" name="from">
                <input class="form-control" id="endto" type="hidden" name="to">
                <select class="filter display-none" name="start_date" id="start_date"></select>
                <select class="filter display-none" name="end_date" id="end_date"></select>
                 <div class="col-md-3">
                    <select class="form-control select2 filter" name="assignee" id="ticket-assignee">
                        <option value="">{{ __('All Assignee') }}</option>
                        @if (!empty($assignees))
                            @foreach ($assignees as $assignee)
                                <option value="{{ $assignee->id }}"
                                    {{ $assignee->id == $allassignee ? ' selected="selected"' : '' }} >
                                    {{ $assignee->name }}</option>
                            @endforeach
                        @endif
                    </select>
                </div>
                <div class="col-md-3">
                    <select class="select2-hide-search filter" name="status" id="status">
                        <option value="">{{ __('All Status') }}</option>
                        @foreach ($status as $data)
                            <option value="{{ $data->id }}"
                                {{ $data->id == $allstatus ? ' selected="selected"' : '' }}>
                                {{ $data->name }}</option>
                        @endforeach
                    </select>
                </div>
            </x-backend.datatable.filter-panel>
            <x-backend.datatable.table-wrapper class="user-list-wallet user-list-processing-message need-batch-operation"
                data-namespace="\Modules\Ticket\Http\Models\Thread" data-column="id">
                @include('admin.layouts.includes.yajra-data-table')
            </x-backend.datatable.table-wrapper>
            @include('admin.layouts.includes.delete-modal')
        </div>
    </div>
@endsection
@section('js')
    <script type="text/javascript">
    'use strict';
    var startDate = "{!! isset($from) ? $from : 'undefined' !!}";
    var endDate = "{!! isset($to) ? $to : 'undefined' !!}";
    var pdf = "{{ in_array('Modules\Subscription\Http\Controllers\PackageSubscriptionController@pdf', $prms) ? '1' : '0' }}";
    var csv = "{{ in_array('Modules\Subscription\Http\Controllers\PackageSubscriptionController@csv', $prms) ? '1' : '0' }}";
    var listContaner = "ticket-list-container";
    var endRoute = "/ticket/";
    </script>
     <script src="{{ asset('public/datta-able/plugins/sweetalert/js/sweetalert.min.js') }}"></script>
    <script src="{{ asset('public/dist/js/moment.min.js') }}"></script>
    <script src="{{ asset('public/dist/plugins/bootstrap-daterangepicker/daterangepicker.min.js') }}"></script>
    <script src="{{ asset('Modules/Ticket/Resources/assets/js/customerpanel.min.js') }}"></script>
    <script src="{{ asset('Modules/Ticket/Resources/assets/js/message.min.js') }}"></script>
    <script src="{{ asset('public/dist/js/custom/document-list.min.js') }}"></script>
@endsection
