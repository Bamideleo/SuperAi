<?php
namespace Modules\Blog\Exports;

use Modules\Blog\Http\Models\Blog;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\{
    FromCollection,
    WithHeadings,
    WithMapping
};

class BlogListExport implements FromCollection, WithHeadings, WithMapping
{
    /**
     * [Here we need to fetch data from data source]
     * @return [Database Object] [Here we are fetching data from User table and also role table through Eloquent Relationship]
     */
    public function collection(): collection
    {
        return Blog::with('user', 'blogCategory', 'user.metas')->select('blogs.*')->orderBy('created_at', 'desc')->get();
    }

    /**
     * [Here we are putting Headings of The CSV]
     * @return [array] [Excel Headings]
     */
    public function headings(): array
    {
        return[
            'Title',
            'Category',
            'Author',
            'Status',
            'Created At'
        ];
    }
    /**
     * [By adding WithMapping you map the data that needs to be added as row. This way you have control over the actual source for each column. In case of using the Eloquent query builder]
     * @param [object] $userList [It has users table info and roles table info]
     * @return [array]            [comma separated value will be produced]
     */
    public function map($blogList): array
    {

        return[
            $blogList->title,
            optional($blogList->blogCategory)->name,
            optional($blogList->user)->name,
            $blogList->status,
            timeZoneFormatDate($blogList->created_at),
        ];
    }
}
