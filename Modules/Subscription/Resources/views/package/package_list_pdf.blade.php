@extends('admin.layouts.list_pdf')

@section('pdf-title')
<title>{{ __(':x List', ['x' => __('Plan')]) }}</title>
@endsection

@section('header-info')
<td colspan="2" class="tbody-td">
    <p class="title">
      <span class="title-text"></span><strong>{{ __(':x List', ['x' => __('Plan')]) }}</strong>
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
            <td class="text-center list-th"> {{ __('Author') }} </td>
            <td class="text-center list-th"> {{ __('Code') }} </td>
            <td class="text-center list-th"> {{ __('Sale Price') }} </td>
            <td class="text-center list-th"> {{ __('Discount Price') }} </td>
            <td class="text-center list-th"> {{ __('Billing Cycle') }} </td>
            <td class="text-center list-th"> {{ __('Status') }} </td>
            <td class="text-center list-th"> {{ __('Created At') }} </td>
        </tr>
    </thead>
    @foreach ($packages as $key => $package)
        <tr>
            <td class="text-center list-td"> {{ wrapIt($package->name, 10, ['columns' => 2]) }} </td>
            <td class="text-center list-td"> 
                {{ (!is_null($package->user?->id)) ? wrapIt($package->user->name, 10, ['columns' => 2]) : wrapIt(__('Guest'), 10, ['columns' => 2]) }}
            </td>
            <td class="text-center list-td"> {{ $package->code }} </td>
            <td class="text-center list-td"> 
                @php
                $price = '<div>';
                foreach ($package->sale_price as $key => $value) {
                    if ($package->billing_cycle[$key]) {
                        $price .= "<p>" . formatNumber($value) . "</p>";
                    }
                }
                $price .= '</div>';
                @endphp
                {!! $price !!} 
            </td>
            <td class="text-center list-td"> 
                @php
                $disPrice = '<div>';
                foreach ($package->discount_price as $key => $value) {
                    if ($package->billing_cycle[$key]) {
                        $disPrice .= "<p>" . ($value ? formatNumber($value) : __('Unavailable')) . "</p>";
                    }
                }
                $disPrice .= '</div>';
                @endphp
                {!! $disPrice !!} 
            </td>
            <td class="text-center list-td"> 
                @php
                $cycle = '<div>';
                foreach ($package->billing_cycle as $key => $value) {
                    if ($value) {
                        $cycle .= "<p><span>" . ucfirst($key) . "</span></p>";
                    }
                }
                $cycle .= '</div>';
                @endphp
                {!! $cycle !!} 
            </td>
            <td class="text-center list-td"> {{ lcfirst($package->status) }} </td>
            <td class="text-center list-td"> {{ timeZoneFormatDate($package->created_at) }} </td>
        </tr>
    @endforeach
</table>
@endsection
