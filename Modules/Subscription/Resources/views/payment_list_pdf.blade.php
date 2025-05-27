@extends('admin.layouts.list_pdf')

@section('pdf-title')
<title>{{ __(':x List', ['x' => __('Payments')]) }}</title>
@endsection

@section('header-info')
<td colspan="2" class="tbody-td">
    <p class="title">
      <span class="title-text"></span><strong>{{ __(':x List', ['x' => __('Payments')]) }}</strong>
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
            <td class="text-center list-th"> {{ __('Subscription Code') }} </td>
            <td class="text-center list-th"> {{ __('Plan') }} </td>
            <td class="text-center list-th"> {{ __('Activation Date') }} </td>
            <td class="text-center list-th"> {{ __('Next Billing') }} </td>
            <td class="text-center list-th"> {{ __('Price') }} </td>
            <td class="text-center list-th"> {{ __('Billing Cycle') }} </td>
            <td class="text-center list-th"> {{ __('Payment Status') }} </td>
            <td class="text-center list-th"> {{ __('Status') }} </td>
            <td class="text-center list-th"> {{ __('Created At') }} </td>
        </tr>
    </thead>
    @foreach ($subscriptionPayments as $key => $subscription)
        <tr>
            <td class="text-center list-td"> {{ $subscription->code }}</td>
            <td class="text-center list-td"> 
                @php
                $plan =  __('Unknown');
                if ($subscription->billing_cycle) {
                    if (!is_null($subscription->package?->id)) {
                        $plan = $subscription->package->name;
                    }
                } else {
                    if (!is_null($subscription->credit?->id)) {
                        $plan = $subscription->credit->name;
                    }
                }
                @endphp
                {{ $plan }}
            </td>
            <td class="text-center list-td"> {{ timeZoneFormatDate($subscription->activation_date) }} </td>
            <td class="text-center list-td"> 
                {{ ($subscription->is_trial == 0 && in_array($subscription->billing_cycle, ['lifetime', ''])) ? __('Not Applicable') : timeZoneFormatDate($subscription->next_billing_date) }}
            </td>
            <td class="text-center list-td"> {{ formatNumber($subscription->amount_billed) }} </td>
            <td class="text-center list-td"> {{ ucfirst($subscription->billing_cycle ?? __('One time')) }} </td>
            <td class="text-center list-td"> {{ ucfirst($subscription->payment_status) }} </td>
            <td class="text-center list-td"> 
                @php
                if (!$subscription->billing_cycle) {
                    $subscription->status = $subscription->status == 'Expired' ? $payStatus = 'Active' : $payStatus = $subscription->status; 
                } else {
                    $payStatus = lcfirst($subscription->status);
                }
                @endphp
                {{ $payStatus }} 
            </td>
            <td class="text-center list-td"> {{ timeZoneFormatDate($subscription->created_at) }} </td>
        </tr>
    @endforeach
</table>
@endsection
