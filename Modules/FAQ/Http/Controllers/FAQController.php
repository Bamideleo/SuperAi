<?php

namespace Modules\FAQ\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Maatwebsite\Excel\Facades\Excel;
use Modules\FAQ\DataTables\FaqDataTable;
use Modules\FAQ\Entities\Faq;
use Modules\FAQ\Http\Requests\{FaqStoreRequest, FaqUpdateRequest};
use Modules\FAQ\Services\FaqService;
use Modules\CMS\Http\Models\ThemeOption;
use Modules\FAQ\Exports\FaqListExport;

class FAQController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index(FaqDataTable $dataTable)
    {
        return $dataTable->render('faq::index');
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        $data['layouts'] = ThemeOption::faqLayout();
        return view('faq::create', $data);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(FaqStoreRequest $request)
    {
        $response = (new FaqService)->store($request->only('title', 'layout_id', 'description', 'status'));
        $this->setSessionValue($response);

        return redirect()->route('admin.faq');
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('faq::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        $data['faq'] = Faq::find($id);
        $data['layouts'] = ThemeOption::faqLayout();

        if (is_null($data['faq'])) {
            return redirect()->route('faq')->withFail(__('The :x does not found.', ['x' => __('Faq')]));
        }

        return view('faq::edit', $data);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(FaqUpdateRequest $request, $id)
    {
        $response = (new FaqService)->update($request->all(), $id);
        $this->setSessionValue($response);

        return redirect()->route('admin.faq');
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        $response = (new FaqService)->delete($id);
        $this->setSessionValue($response);

        return redirect()->route('admin.faq');
    }

    /**
     * FAQ list pdf
     *
     * @return mixed
     */
    public function pdf()
    {
        $data['layouts'] = ThemeOption::faqLayout();
        $data['faqs'] = Faq::orderBy('id', 'desc')->get();

        return printPDF($data, 'faq_list_' . time() . '.pdf', 'faq::list_pdf', view('faq::list_pdf', $data), 'pdf');
    }

    /**
     * FAQ list csv
     *
     * @return mixed
     */
    public function csv()
    {
        return Excel::download(new FaqListExport(), 'faq_list_' . time() . '.csv');
    }
}
