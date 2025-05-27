<?php

namespace Modules\OpenAI\Http\Controllers\Admin;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

use Modules\OpenAI\Entities\Archive;
use Modules\OpenAI\Services\v2\VoiceoverService;
use Modules\OpenAI\DataTables\{
    VoiceoverDataTable,
    VoiceDataTable
};
use Modules\OpenAI\Entities\Voice;
use Session;
use DB;
use Modules\OpenAI\Entities\Audio;
use Maatwebsite\Excel\Facades\Excel;
use Modules\OpenAI\Exports\VoiceoverExport;
use Modules\OpenAI\Exports\VoiceExport;

class VoiceoverController extends Controller
{
    /**
     * Service
     *
     * @var object
     */
    protected $voiceoverService;

    /**
     * @param VoiceoverService $voiceoverService
     */
    public function __construct(VoiceoverService $voiceoverService)
    {
        $this->voiceoverService = $voiceoverService;
    }

    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index(VoiceoverDataTable $voiceoverDataTable)
    {
        $data['audios'] = (new Archive)->voiceovers('voiceover')->orderBy('id', 'desc')->get();
        $data['users'] = $this->voiceoverService->users();
        $data['omitLanguages'] = moduleConfig('openai.text_to_speech_language');
        $data['languages'] = $this->voiceoverService->languages();
        return $voiceoverDataTable->render('openai::admin.voiceover.index', $data);
    }


    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        $value = techDecrypt($id);
        $data['audio'] = $this->voiceoverService->audioById($value);
        return view('openai::admin.voiceover.view', $data);
    }

     /**
     * Delete
     *
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function delete($id)
    {
        $data = [
            'status' => 'failed',
            'message' => __('The data you are looking for is not found')
        ];

        $service = $this->voiceoverService->delete($id);
        if ($service) {
            $data = [
                'status' => 'success',
                'message' => __('The :x has been deleted successfully.', ['x' => __('Voiceover')])
            ];
        }
        Session::flash($data['status'], $data['message']);
        return redirect()->route('admin.features.textToSpeech.lists');
    }

    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function allVoices(VoiceDataTable $voiceDataTable)
    {
        $data['audios'] = (new Archive)->voiceovers('voiceover')->orderBy('id', 'desc')->get();
        $data['users'] = $this->voiceoverService->users();
        $data['languages'] = $this->voiceoverService->languages();
        $data['providers'] = moduleConfig('openai.providers');
        $data['omitLanguages'] = moduleConfig('openai.text_to_speech_language');
        return $voiceDataTable->render('openai::admin.voice.index', $data);
    }

     /**
     * Show the form for editing the specified resource.
     *
     * @param  int|string  $id
     * @return mixed
     */
    public function voiceEdit($id)
    {
        if (!is_numeric($id)) {
            abort(404);
        }

        if (request()->isMethod('POST')) {
            
            $this->update($id);
            return to_route('admin.features.textToSpeech.voice.lists');
            
        }

        if ($voice = Voice::find($id)) {
            return view('openai::admin.voice.edit', compact('voice'));
        }

        abort(404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return mixed
     */
    public function update($id)
    {
        $response = ['status' => 'fail', 'message' => __('The :x has not been saved. Please try again.', ['x' => __('Use case')])];

        $request = app('Modules\OpenAI\Http\Requests\VoiceRequest')->safe();
        $voice = Voice::find($id);

        try {
            DB::beginTransaction();
            if ($this->voiceoverService->updateVoice($request->only('name', 'status'), $id)) {
                $response['status'] = 'success';
                $response['message'] = __('The :x has been successfully updated.', ['x' => __('Voice')]);
            }
    
            DB::commit();

        } catch (\Exception $e) {
            DB::rollBack();
            $response['message'] = $e->getMessage();
        }

        Session::flash($response['status'], $response['message']);
    }

    /**
     * Text To Speech list pdf
     *
     * @return mixed
     */
    public function pdf()
    {
        $data['voiceovers'] = (new Archive)->voiceovers('voiceover')->orderBy('id', 'desc')->get();

        return printPDF($data, 'voiceover_list_' . time() . '.pdf', 'openai::admin.voiceover.pdf', view('openai::admin.voiceover.pdf', $data), 'pdf');
    }

    /**
     * Text To Speech list csv
     *
     * @return mixed
     */
    public function csv()
    {
        return Excel::download(new VoiceoverExport(), 'voiceover_list_' . time() . '.csv');
    }

    /**
     * Voices list pdf
     *
     * @return mixed
     */
    public function voicePdf()
    {
        $data['AiVoices'] = Voice::get();

        return printPDF($data, 'voice_list_' . time() . '.pdf', 'openai::admin.voice.voice_pdf', view('openai::admin.voice.voice_pdf', $data), 'pdf');
    }

    /**
     * Voices list csv
     *
     * @return mixed
     */
    public function voiceCsv()
    {
        return Excel::download(new VoiceExport(), 'voice__list_' . time() . '.csv');
    }
    
}
