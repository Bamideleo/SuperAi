<?php
/**
 * @package AudioFilter
 * @author TechVillage <support@techvill.org>
 * @contributor Md. Khayeruzzaman <shakib.techvill@gmail.com>
 * @created 31-08-2023
 */

namespace Modules\OpenAI\Filters;

use App\Filters\Filter;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;

class VoiceoverFilter extends Filter
{

    /**
     * Filter by userId query string
     *
     * @param  string  $id
     * @return EloquentBuilder|QueryBuilder
     */
    public function userId($value)
    {
        return $this->query->whereHas('metas', function($query) use ($value) {
            $query->where('key', 'voiceover_creator_id')->where('value', $value);
        });
    }

    /**
     * Filter by search query string
     *
     * @param  string  $value
     * @return EloquentBuilder|QueryBuilder
     */
    public function search($value)
    {
        $value = xss_clean($value['value']);

        return $this->query->where(function ($query) use ($value) {
            $query->where('title', 'like', '%'. $value . '%')
                ->orWhere('provider', 'like', '%'. $value . '%')
                ->orWhereHas('user', function($query) use ($value) {
                    $query->whereLike('name', $value);
                });
        });
      
    }
}
