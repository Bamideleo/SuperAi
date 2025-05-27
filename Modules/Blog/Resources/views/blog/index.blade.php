@extends('admin.layouts.app')
@section('page_title', __('Blogs'))
@section('css')
<link rel="stylesheet" href="{{ asset('Modules/Blog/Resources/assets/css/blog.min.css') }}">
@endsection
@section('content')
<!-- Main content -->
<div class="col-sm-12 list-container" id="blog-list-container">
    <div class="card">
        <div class="card-header bb-none pb-0">
            <h5>{{ __('Blogs') }}</h5>
            <x-backend.group-filters :groups="$groups" :column="'status'" />
            <div class="card-header-right my-2 mx-md-0 mx-sm-4">
                <x-backend.button.batch-delete class="me-1" />
                @if (in_array('Modules\Blog\Http\Controllers\BlogController@create', $prms))
                <a href="{{ route('blog.create') }}" class="btn mb-0 btn-outline-primary custom-btn-small">
                    <span class="fa fa-plus"> &nbsp;</span>{{ __('Add Blog') }}</a>
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
                <select class="select2 filter" name="category_id">
                    <option value="">{{ __('All Category') }}</option>
                    @foreach ($categorize as $category)
                        <option value="{{ $category->id }}">{{ $category->name }}</option>
                    @endforeach
                </select>
            </div>
            <div class="col-md-3">
                <select class="select2 filter" name="author_id">
                    <option value="">{{ __('All Author') }}</option>
                    @foreach ($authors as $author)
                        <option value="{{ $author->id }}">{{ $author->name }}</option>
                    @endforeach
                </select>
            </div>
            <div class="col-md-3">
                <select class="select2-hide-search filter" name="status">
                    <option value="">{{ __('All Status') }}</option>
                    <option value="Active">{{ __('Active') }}</option>
                    <option value="Inactive">{{ __('Inactive') }}</option>
                </select>
            </div>
        </x-backend.datatable.filter-panel>
        <x-backend.datatable.table-wrapper class="user-list-wallet user-list-processing-message need-batch-operation"
            data-namespace="\Modules\Blog\Http\Models\Blog" data-column="id">
            @include('admin.layouts.includes.yajra-data-table')
        </x-backend.datatable.table-wrapper>
        @include('admin.layouts.includes.delete-modal')
    </div>
</div>
@endsection
@section('js')
    <script type="text/javascript">
        'use strict';
        var pdf = "{{ in_array('Modules\Blog\Http\Controllers\BlogController@pdf', $prms) ? '1' : '0' }}";
        var csv = "{{ in_array('Modules\Blog\Http\Controllers\BlogController@csv', $prms) ? '1' : '0' }}";
        var listContaner = "blog-list-container";
        var endRoute = "/blog/";
    </script>
    <script src="{{ asset('public/dist/js/moment.min.js') }}"></script>
    <script src="{{ asset('Modules/Blog/Resources/assets/js/blog.min.js') }}"></script>
    <script src="{{ asset('public/dist/js/custom/yajra-export.min.js') }}"></script>
    <script src="{{ asset('public/dist/js/custom/document-list.min.js') }}"></script>
@endsection
