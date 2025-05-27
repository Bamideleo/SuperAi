<?php
namespace Modules\Subscription\Exports;

use Modules\Subscription\Entities\PackageSubscription;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\{
    FromCollection,
    WithHeadings,
    WithMapping
};

class PackageSubscriptionListExport implements FromCollection, WithHeadings, WithMapping
{
    /**
     * [Here we need to fetch data from data source]
     * @return [Database Object] [Here we are fetching data from User table and also role table through Eloquent Relationship]
     */
    public function collection(): collection
    {
        return PackageSubscription::with('user', 'user.metas', 'package')->filter()->get();
    }

    /**
     * [Here we are putting Headings of The CSV]
     * @return [array] [Excel Headings]
     */
    public function headings(): array
    {
        return[
            'Package',
            'Customer',
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
        return[
            (!is_null($packageSubscriptionList->package?->id)) ? wrapIt($packageSubscriptionList->package->name, 10, ['columns' => 2]) : wrapIt(__('Unknown'), 10, ['columns' => 2]),
            !is_null($packageSubscriptionList->user?->id) ? wrapIt($packageSubscriptionList->user->name, 10, ['columns' => 2]) : wrapIt(__('Unknown'), 10, ['columns' => 2]),
            timeZoneFormatDate($packageSubscriptionList->activation_date),
            !subscription('isTrialMode', $packageSubscriptionList->id) && $packageSubscriptionList->billing_cycle == 'lifetime' ? __('Not Applicable') : timeZoneFormatDate($packageSubscriptionList->next_billing_date),
            formatNumber($packageSubscriptionList->amount_billed),
            ucfirst($packageSubscriptionList->billing_cycle),
            ucfirst($packageSubscriptionList->payment_status),
            ucfirst($packageSubscriptionList->status),
            timeZoneFormatDate($packageSubscriptionList->created_at),
        ];
    }
}
