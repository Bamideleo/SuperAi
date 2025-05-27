<?php
namespace Modules\Reviews\Exports;

use Modules\Reviews\Entities\Review;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\{
    FromCollection,
    WithHeadings,
    WithMapping
};
use Modules\CMS\Http\Models\ThemeOption;

class ReviewsListExport implements FromCollection, WithHeadings, WithMapping
{
    /**
     * [Here we need to fetch data from data source]
     * @return [Database Object] [Here we are fetching data from User table and also role table through Eloquent Relationship]
     */
    public function collection(): collection
    {
        return Review::with(['user', 'user.metas'])->get();
    }

    /**
     * [Here we are putting Headings of The CSV]
     * @return [array] [Excel Headings]
     */
    public function headings(): array
    {
        return[
            'Title',
            'Comments',
            'Ratings',
            'User Name',
            'Status',
            'Created At'
        ];
    }
    /**
     * [By adding WithMapping you map the data that needs to be added as row. This way you have control over the actual source for each column. In case of using the Eloquent query builder]
     * @param [object] $userList [It has users table info and roles table info]
     * @return [array]            [comma separated value will be produced]
     */
    public function map($reviewList): array
    {
        $options = '';
        for ($i = 1; $i <=5 ; $i++) {
            $options .=  $i <= $reviewList->rating ? '*' : '';
        };
        
        return[
            $reviewList->title,
            $reviewList->comments,
            $options,
            optional($reviewList->user)->name,
            $reviewList->status,
            timeZoneFormatDate($reviewList->created_at),
        ];
    }
}
