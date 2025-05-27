<?php
namespace Modules\Subscription\Exports;

use Modules\Subscription\Entities\SubscriptionDetails;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\{
    FromCollection,
    WithHeadings,
    WithMapping
};

class SubscriptionPaymentListExport implements FromCollection, WithHeadings, WithMapping
{
    /**
     * [Here we need to fetch data from data source]
     * @return [Database Object] [Here we are fetching data from User table and also role table through Eloquent Relationship]
     */
    public function collection(): collection
    {
        return SubscriptionDetails::select('subscription_details.*')->with(['package:id,name', 'credit:id,name'])->filter()->get();
    }

    /**
     * [Here we are putting Headings of The CSV]
     * @return [array] [Excel Headings]
     */
    public function headings(): array
    {
        return[
            'Subscription Code',
            'Plan',
            'Activation Date',
            'Next Billing',
            'Price',
            'Billing Cycle',
            'Payment Status',
            'Status',
            'Created At'
        ];
    }
    /**
     * [By adding WithMapping you map the data that needs to be added as row. This way you have control over the actual source for each column. In case of using the Eloquent query builder]
     * @param [object] $userList [It has users table info and roles table info]
     * @return [array]            [comma separated value will be produced]
     */
    public function map($packageSubscriptionList): array
    {
        $plan =  __('Unknown');
        if ($packageSubscriptionList->billing_cycle) {
            if (!is_null($packageSubscriptionList->package?->id)) {
                $plan = $packageSubscriptionList->package->name;
            }
        } else {
            if (!is_null($packageSubscriptionList->credit?->id)) {
                $plan = $packageSubscriptionList->credit->name;
            }
        }

        if (!$packageSubscriptionList->billing_cycle) {
            $packageSubscriptionList->status = $packageSubscriptionList->status == 'Expired' ? $payStatus = 'Active' : $payStatus = $packageSubscriptionList->status; 
        } else {
            $payStatus = lcfirst($packageSubscriptionList->status);
        }
        return[
            $packageSubscriptionList->code,
            $plan,
            timeZoneFormatDate($packageSubscriptionList->activation_date),
            ($packageSubscriptionList->is_trial == 0 && in_array($packageSubscriptionList->billing_cycle, ['lifetime', ''])) ? __('Not Applicable') : timeZoneFormatDate($packageSubscriptionList->next_billing_date),
            formatNumber($packageSubscriptionList->amount_billed),
            ucfirst($packageSubscriptionList->billing_cycle ?? __('One time')),
            ucfirst($packageSubscriptionList->payment_status),
            $payStatus,
            timeZoneFormatDate($packageSubscriptionList->created_at),
        ];
    }
}
