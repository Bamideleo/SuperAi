<?php
namespace Modules\OpenAI\Exports\v2;

use Modules\OpenAI\Entities\Archive;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\{
    FromCollection,
    WithHeadings,
    WithMapping
};

class ImageExport implements FromCollection, WithHeadings, WithMapping
{
    /**
     * [Here we need to fetch data from data source]
     * @return [Database Object] [Here we are fetching data from User table and also role table through Eloquent Relationship]
     */
    public function collection(): collection
    {
        return Archive::with('metas', 'imageCreator')->where('type', 'image_variant')->get();
    }

    /**
     * [Here we are putting Headings of The CSV]
     * @return [array] [Excel Headings]
     */
    public function headings(): array
    {
        return[
            'Name',
            'Creator',
            'Size',
            'Created At'
        ];
    }
    /**
     * [By adding WithMapping you map the data that needs to be added as row. This way you have control over the actual source for each column. In case of using the Eloquent query builder]
     * @param [object] $userList [It has users table info and roles table info]
     * @return [array]            [comma separated value will be produced]
     */
    public function map($imageList): array
    {
        return[
            $imageList->title,
            optional($imageList->imageCreator)->name,
            $imageList->generation_options['size'] ?? '-',
            timeZoneFormatDate($imageList->created_at),
        ];
    }
}
