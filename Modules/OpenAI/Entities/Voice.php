<?php

namespace Modules\OpenAI\Entities;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\ModelTraits\Filterable;
use App\Traits\ModelTraits\hasFiles;
use App\Traits\ModelTraits\Metable;
use App\Traits\ModelTrait;

class Voice extends Model
{
    use HasFactory;
    use hasFiles;
    use Metable;
    use ModelTrait;
    use Filterable;

    protected $fillable = [
        'name',
        'voice_name',
        'language_code',
        'gender',
        'file_name',
        'status',
        'providers',
        'user_id'
    ];

    public function uploadData($data)
    {
        try {
            \DB::beginTransaction();
            $dbPreference = \DB::table('voices')->where('voice_name', $data['voice_name'])->first();

            if ($dbPreference) {
                \DB::rollBack();
                throw new \Exception (__("This voice actor, ':x', already exists. Please remove it first, then try again.", ['x' => $data['name'] ]));
            }

            Voice::create($data);

            if (isset($data['image']) && !empty($data['image'])) {
                $this->uploadFilesFromUrl($data['image'], ['isUploaded' => false, 'isOriginalNameRequired' => true, 'thumbnail' => false, 'isSavedInObjectFiles' => true]);
            }

            \DB::commit();

            return true;
            
        } catch (\Exception $e) {
            \DB::rollBack();
            throw new \Exception ($e->getMessage());
        }

    }

    public function fileUpload($audio)
    {
        return $this->uploadFile($audio);
    }

    /**
     * Relation with User Model
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    }
}
