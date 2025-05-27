<?php
namespace Modules\Subscription\Exports;

use Modules\Subscription\Entities\Package;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\{
    FromCollection,
    WithHeadings,
    WithMapping
};

class PackageListExport implements FromCollection, WithHeadings, WithMapping
{
    /**
     * [Here we need to fetch data from data source]
     * @return [Database Object] [Here we are fetching data from User table and also role table through Eloquent Relationship]
     */
    public function collection(): collection
    {
        return Package::with('user')->filter()->get();
    }

    /**
     * [Here we are putting Headings of The CSV]
     * @return [array] [Excel Headings]
     */
    public function headings(): array
    {
        return[
            'Name',
            'Author',
            'Code',
            'Sale Price',
            'Discount Price',
            'Billing Cycle',
            'Status',
            'Created At'
        ];
    }
    /**
     * [By adding WithMapping you map the data that needs to be added as row. This way you have control over the actual source for each column. In case of using the Eloquent query builder]
     * @param [object] $userList [It has users table info and roles table info]
     * @return [array]            [comma separated value will be produced]
     */
    public function map($packageList): array
    {
        $cycle = $price = $disPrice = '';
        foreach ($packageList->billing_cycle as $key => $value) {
            if ($value) {
                $cycle .= ucfirst($key) . "\n";
                $price .= formatNumber($packageList->sale_price[$key]) . "\n";
                $disPrice .= ($packageList->discount_price[$key] ? formatNumber($packageList->discount_price[$key]) : __('Unavailable')) . "\n";
            }
        }
        return[
            $packageList->name,
            (!is_null($packageList->user?->id)) ? $packageList->user->name : __('Guest'),
            $packageList->code,
            $price,
            $disPrice,
            $cycle,
            lcfirst($packageList->status),
            timeZoneFormatDate($packageList->created_at),
        ];
    }
}
