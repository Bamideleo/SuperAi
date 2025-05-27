@extends('admin.layouts.list_pdf')

@section('pdf-title')
<title>{{ __(':x List', ['x' => __('Blogs')]) }}</title>
@endsection

@section('header-info')
<td colspan="2" class="tbody-td">
    <p class="title">
      <span class="title-text"></span><strong>{{ __(':x List', ['x' => __('Blogs')]) }}</strong>
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
            <td class="text-center list-th"> {{ __('Title') }} </td>
            <td class="text-center list-th"> {{ __('Category') }} </td>
            <td class="text-center list-th"> {{ __('Author') }} </td>
            <td class="text-center list-th"> {{ __('Status') }} </td>
            <td class="text-center list-th"> {{ __('Created At') }} </td>
        </tr>
    </thead>
    @foreach ($blogs as $key => $blog)
        <tr>
            <td class="text-center list-td"> {{ $blog->title }} </td>
            <td class="text-center list-td"> {!! wrapIt(optional($blog->blogCategory)->name, 10,  ['columns' => 3,'trim' => true]) !!} </td>
            <td class="text-center list-td"> {{ wrapIt(optional($blog->user)->name, 10,  ['columns' => 3,'trim' => true]) }} </td>
            <td class="text-center list-td"> {{ lcfirst($blog->status) }} </td>
            <td class="text-center list-td"> {{ timeZoneFormatDate($blog->created_at) }} </td>
        </tr>
    @endforeach
</table>
@endsection
