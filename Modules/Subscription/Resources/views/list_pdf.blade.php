@extends('admin.layouts.list_pdf')

@section('pdf-title')
<title>{{ __(':x List', ['x' => __('Subscription')]) }}</title>
@endsection

@section('header-info')
<td colspan="2" class="tbody-td">
    <p class="title">
      <span class="title-text"></span><strong>{{ __(':x List', ['x' => __('Subscription')]) }}</strong>
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
            <td class="text-center list-th"> {{ __('Package') }} </td>
            <td class="text-center list-th"> {{ __('Customer') }} </td>
            <td class="text-center list-th"> {{ __('Activation Date') }} </td>
            <td class="text-center list-th"> {{ __('Next Billing') }} </td>
            <td class="text-center list-th"> {{ __('Price') }} </td>
            <td class="text-center list-th"> {{ __('Billing Cycle') }} </td>
            <td class="text-center list-th"> {{ __('Payment Status') }} </td>
            <td class="text-center list-th"> {{ __('Status') }} </td>
            <td class="text-center list-th"> {{ __('Created At') }} </td>
        </tr>
    </thead>
    @foreach ($packageSubscriptions as $key => $subscription)
        <tr>
            <td class="text-center list-td"> 
                {{ (!is_null($subscription->package?->id)) ? wrapIt($subscription->package->name, 10, ['columns' => 2]) : wrapIt(__('Unknown'), 10, ['columns' => 2]) }}
            </td>
            <td class="text-center list-td"> 
                {{ !is_null($subscription->user?->id) ? wrapIt($subscription->user->name, 10, ['columns' => 2]) : wrapIt(__('Unknown'), 10, ['columns' => 2]) }}
            </td>
            <td class="text-center list-td"> {{ timeZoneFormatDate($subscription->activation_date) }} </td>
            <td class="text-center list-td"> 
                {{ !subscription('isTrialMode', $subscription->id) && $subscription->billing_cycle == 'lifetime' ? __('Not Applicable') : timeZoneFormatDate($subscription->next_billing_date) }}
            </td>
            <td class="text-center list-td"> {{ formatNumber($subscription->amount_billed) }} </td>
            <td class="text-center list-td"> {{ ucfirst($subscription->billing_cycle) }} </td>
            <td class="text-center list-td"> {{ ucfirst($subscription->payment_status) }} </td>
            <td class="text-center list-td"> {{ lcfirst($subscription->status) }} </td>
            <td class="text-center list-td"> {{ timeZoneFormatDate($subscription->created_at) }} </td>
        </tr>
    @endforeach
</table>
@endsection
