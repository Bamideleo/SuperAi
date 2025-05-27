<?php

namespace Modules\Reviews\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use App\Http\Controllers\Controller;
use App\Models\User;
use Modules\Reviews\DataTables\ReviewDataTable;
use Modules\Reviews\Http\Requests\{
    ReviewStoreRequest,
    ReviewUpdateRequest
};
use Modules\Reviews\Services\ReviewService;
use Modules\CMS\Http\Models\ThemeOption;
use Modules\Reviews\Exports\ReviewsListExport;
use Maatwebsite\Excel\Facades\Excel;
use Modules\Reviews\Entities\Review;

class ReviewsController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index(ReviewDataTable $dataTable)
    {
        $data['users'] = User::all();
        return $dataTable->render('reviews::admin.index',$data);
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        $data['users'] = User::where('status', 'Active')->get();
        return view('reviews::admin.create', $data);
    }

    /**
     * Store a newly created resource in storage.
     * @param ReviewStoreRequest $request
     */
    public function store(ReviewStoreRequest $request)
    {
        $response = (new ReviewService)->store($request->all());
        $this->setSessionValue($response);

        return to_route('admin.review');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        $data['review'] = (new ReviewService)->find($id);
        $data['users'] = User::where('status', 'Active')->get();

        if (is_null($data['review'])) {
            return redirect()->route('admin.review')->withFail(__('The :x does not found.', ['x' => __('Review')]));
        }
        return view('reviews::admin.edit', $data);
    }

    /**
     * Update the specified resource in storage.
     * @param ReviewUpdateRequest $request
     * @param int $id
     */
    public function update(ReviewUpdateRequest $request, $id)
    {
        $response = (new ReviewService)->update($request->all(), $id);
        $this->setSessionValue($response);

        return to_route('admin.review');
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     */
    public function destroy($id)
    {
        $response = (new ReviewService)->delete($id);
        $this->setSessionValue($response);

        return back();
    }

    /**
     * Reviews list pdf
     *
     * @return mixed
     */
    public function pdf()
    {
        $data['reviews'] = Review::with(['user', 'user.metas'])->get();
        return printPDF($data, 'review_list_' . time() . '.pdf', 'reviews::admin.list_pdf', view('reviews::admin.list_pdf', $data), 'pdf');
    }

    /**
     * Reviews list csv
     *
     * @return mixed
     */
    public function csv()
    {
        return Excel::download(new ReviewsListExport(), 'review_list_' . time() . '.csv');
    }
}
