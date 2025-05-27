@extends('admin.layouts.list_pdf')

@section('pdf-title')
<title>{{ __(':x List', ['x' => __('FAQ')]) }}</title>
@endsection

@section('header-info')
<td colspan="2" class="tbody-td">
    <p class="title">
      <span class="title-text"></span><strong>{{ __(':x List', ['x' => __('FAQ')]) }}</strong>
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
            <td class="text-center list-th"> {{ __('Layout') }} </td>
            <td class="text-center list-th"> {{ __('Description') }} </td>
            <td class="text-center list-th"> {{ __('Status') }} </td>
            <td class="text-center list-th"> {{ __('Created At') }} </td>
        </tr>
    </thead>
    @foreach ($faqs as $key => $faq)
        <tr>
            <td class="text-center list-td"> {!! wrapIt($faq->title, 10, ['columns' => 2]) !!} </td>
            <td class="text-center list-td"> {{ ucfirst($layouts[$faq->layout_id]) }} </td>
            <td class="text-center list-td"> {!! wrapIt($faq->description, 100, ['columns' => 2 , 'trim' => true]) !!} </td>
            <td class="text-center list-td"> {{ ucfirst($faq->status) }} </td>
            <td class="text-center list-td"> {{ timeZoneFormatDate($faq->created_at) }} </td>
        </tr>
    @endforeach
</table>
@endsection
