@extends('admin.layouts.list_pdf')

@section('pdf-title')
<title>{{ __(':x List', ['x' => __('Blog Category')]) }}</title>
@endsection

@section('header-info')
<td colspan="2" class="tbody-td">
    <p class="title">
      <span class="title-text"></span><strong>{{ __(':x List', ['x' => __('Blog Category')]) }}</strong>
    </p>
    <p class="title">
      <span class="title-text">{{ __('Print Date') }}: </span> {{ formatDate(date('d-m-Y')) }}
    </p>
</td>
@endsection

@section('list-table')
<table class="list-table">
    <thead class="list-head">
        <tr>
            <td class="text-center list-th"> {{ __('Name') }} </td>
            <td class="text-center list-th"> {{ __('Status') }} </td>
            <td class="text-center list-th"> {{ __('Created At') }} </td>
        </tr>
    </thead>
    @foreach ($blogCategories as $key => $blogCategory)
        <tr>
            <td class="text-center list-td"> {{ ucfirst($blogCategory->name) }} </td>
            <td class="text-center list-td"> {{ lcfirst($blogCategory->status) }} </td>
            <td class="text-center list-td"> {{ timeZoneFormatDate($blogCategory->created_at) }} </td>
        </tr>
    @endforeach
</table>
@endsection
