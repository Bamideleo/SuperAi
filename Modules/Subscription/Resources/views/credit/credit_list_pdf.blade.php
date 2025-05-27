@extends('admin.layouts.list_pdf')

@section('pdf-title')
<title>{{ __(':x List', ['x' => __('Credit')]) }}</title>
@endsection

@section('header-info')
<td colspan="2" class="tbody-td">
    <p class="title">
      <span class="title-text"></span><strong>{{ __(':x List', ['x' => __('Credit')]) }}</strong>
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
            <td class="text-center list-th"> {{ __('Code') }} </td>
            <td class="text-center list-th"> {{ __('Price') }} </td>
            <td class="text-center list-th"> {{ __('Status') }} </td>
            <td class="text-center list-th"> {{ __('Created At') }} </td>
        </tr>
    </thead>
    @foreach ($credits as $key => $credit)
        <tr>
            <td class="text-center list-td"> {{ wrapIt($credit->name, 10, ['columns' => 2]) }} </td>
            <td class="text-center list-td"> {{ $credit->code }} </td>
            <td class="text-center list-td"> {{ formatNumber($credit->price) }} </td>
            <td class="text-center list-td"> {{ lcfirst($credit->status) }} </td>
            <td class="text-center list-td"> {{ timeZoneFormatDate($credit->created_at) }} </td>
        </tr>
    @endforeach
</table>
@endsection
