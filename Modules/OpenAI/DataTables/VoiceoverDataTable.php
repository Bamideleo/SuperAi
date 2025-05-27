<?php

namespace Modules\OpenAI\DataTables;

use Illuminate\Http\JsonResponse;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Facades\DataTables;
use App\DataTables\DataTable;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Illuminate\Database\Eloquent\Builder as QueryBuilder;
use Modules\OpenAI\Entities\Archive;

class VoiceoverDataTable extends DataTable
{
    /**
     * Display ajax response
     *
     * @return JsonResponse
     */
    public function ajax(): JsonResponse
    {
        $audio = $this->query();

        return DataTables::eloquent($audio)
            ->editColumn('prompt', function ($audio) {
                return '<a data-bs-toggle="tooltip" data-bs-placement="top" title="' . e($audio->title) . '" href="' . route('admin.features.textToSpeech.view', ['id' => techEncrypt($audio->id)]) . '">' . trimWords(ucfirst($audio->title), 60) . '</a>';
            })
            ->editColumn('user_id', function ($audio) {
                return '<a href="' . route('users.edit', ['id' => $audio->voiceover_creator_id]) . '">' . optional($audio->voiceoverCreator)->name . '</a>';
            })
            ->editColumn('provider', function ($audio) {
                return ucfirst($audio->provider);
            })
            ->editColumn('created_at', function ($audio) {
                return timeZoneFormatDate($audio->created_at);
            })
            ->addColumn('action', function ($audio) {
                $html = '<a data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="' . __('View') . '" title="' . __('View') . '" href="' . route('admin.features.textToSpeech.view', ['id' => techEncrypt($audio->id)]) . '" class="action-icon"><i class="feather icon-eye"></i></a>&nbsp;';
                if ($this->hasPermission(['Modules\OpenAI\Http\Controllers\Admin\TextToSpeechController@delete'])) {
                    $html  .= '<form method="POST" action="' . route('admin.features.textToSpeech.delete', ['id' => $audio->id]) . '" id="delete-archive-' . $audio->id . '" accept-charset="UTF-8" class="display_inline">
                            ' . csrf_field() . '
                            ' . method_field('DELETE') . '
                            <a class="action-icon confirm-delete" type="button" data-id=' . $audio->id . ' data-delete="archive" data-label="Delete" data-bs-toggle="modal" data-bs-target="#confirmDelete" data-title="' . __('Delete :x', ['x' => __('Voiceover')]) . '" data-message="' . __('Are you sure to delete this?') . '">
                                <span data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="' . __('Delete') . '" title="' . __('Delete') . '">  
                                    <i class="feather icon-trash"></i>
                                </span> 
                            </button>
                            </form>';
                }
                return $html;
            })
            ->rawColumns(['prompt', 'slug', 'user_id', 'created_at', 'action'])
            ->make(true);
    }

    /**
     * Get query source of dataTable.
     *
     * @return QueryBuilder
     */
    public function query(): QueryBuilder
    {
        $audio = Archive::with(['metas', 'voiceoverCreator:id,name', 'voiceoverCreator.metas'])
            ->leftJoin('archives_meta as meta_language', function ($join) {
                $join->on('archives.id', '=', 'meta_language.owner_id')
                    ->where('meta_language.key', '=', 'language');
            })
            ->leftJoin('archives_meta as meta_creator', function ($join) {
                $join->on('archives.id', '=', 'meta_creator.owner_id')
                    ->where('meta_creator.key', '=', 'voiceover_creator_id');
            })
            ->leftJoin('users as creators', 'meta_creator.value', '=', 'creators.id')
            ->select([
                'archives.id',
                'archives.title as title',
                'archives.provider as provider',
                'archives.created_at',
                'meta_language.value as language',
                'creators.name as creator_name'
            ])
            ->where('archives.type', 'voiceover_chat_reply')
            ->whereNull('user_id')
            ->filter('Modules\\OpenAI\\Filters\\VoiceoverFilter');
        return $this->applyScopes($audio);
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return HtmlBuilder
     */
    public function html(): HtmlBuilder
    {
        return $this->builder()
            ->setTableId('dataTableBuilder')
            ->minifiedAjax()
            ->selectStyleSingle()
            ->columns($this->getColumns())
            ->parameters(dataTableOptions(['dom' => 'Bfrtip']));
    }

     /**
     * Get the dataTable columns definition.
     *
     * @return array
     */
    public function getColumns(): array
    {
        return [
            new Column(['data'=> 'id', 'name' => 'id', 'title' => '', 'visible' => false, 'width' => '0%' ]),   
            new Column(['data'=> 'prompt', 'name' => 'title', 'title' => __('Prompt'), 'searchable' => true, 'orderable' => true, 'width' => '40%' ]),
            (new Column(['data'=> 'provider', 'name' => 'provider', 'title' => __('Provider'), 'searchable' => false, 'orderable' => true, 'width' => '15%']))->addClass('text-center'),
            (new Column(['data'=> 'user_id', 'name' => 'creators.name', 'title' => __('Created By'), 'orderable' => true, 'searchable' => true, 'width' => '15%' ]))->addClass('text-center'),
            (new Column(['data'=> 'created_at', 'name' => 'created_at', 'title' => __('Created At'), 'orderable' => true, 'searchable' => false, 'width' => '15%' ]))->addClass('text-center'),
            new Column(['data'=> 'action', 'name' => 'action', 'title' => '', 'width' => '15%', 'visible' => true, 'orderable' => false, 'searchable' => false, 'className' => 'text-right align-middle']),
        ];
    }
}
