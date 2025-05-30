<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\{Auth, Cache, Session};
use App\Services\AdminDashboardReportService;
use App\Http\Requests\Common\DashboardRequest;

class DashboardController extends Controller
{

    /**
     * Report Service
     *
     * @var AdminDashboardReportService
     */
    private $reportService;

    /**
     * Dashboard Controller Constructor
     *
     * @param AdminDashboardReportService $reportService
     * @return void
     */
    public function __construct(AdminDashboardReportService $reportService)
    {
        $this->reportService = $reportService;
    }
    /**
     * Display all Information on Dashboard.
     *
     * @return \Illuminate\Contracts\View\View|\Illuminate\Contracts\View\Factory
     */
    public function index()
    {

        return view('admin.dashboard', $this->reportService
            ->newUsersCount('newUsers')
            ->thisMonthSubscribersCount()
            ->incomeThisMonth()
            ->codeGeneratedThisMonth()
            ->wordGeneratedThisMonth()
            ->imageGeneratedThisMonth()
            ->documentCreatedThisMonth()
            ->transactionsThisMonth()
            ->chatGeneratedThisMonth()
            ->newUsersWithCount()
            ->newUsersCompare()
            ->thisMonthSubscribersCompare()
            ->incomeThisMonthCompare()
            ->codeGeneratedThisMonthCompare()
            ->wordGeneratedThisMonthCompare()
            ->imageGeneratedThisMonthCompare()
            ->documentCreatedThisMonthCompare()
            ->transactionsThisMonthCompare()
            ->chatGeneratedThisMonthCompare()
            ->dashboardWidgetElement()
            ->dashboardWidgetOption()
            ->widget()
            ->getArray());

    }

    /**
     * Get user details
     * @param DashboardRequest $request
     * @return Response
     */
    public function salesOfTheMonth(DashboardRequest $request)
    {
        return $this->reportService->salesOfTheMonth()->getResponse();
    }

    /**
     * Get the latest registration
     * @param DashboardRequest $request
     * @return mixed
     */
    public function latestRegistration(DashboardRequest $request)
    {
        return $this->response($this->reportService->latestRegistration()->get());
    }

    /**
     * Get the latest transaction
     * @param DashboardRequest $request
     * @return mixed
     */
    public function latestTransaction(DashboardRequest $request)
    {
        return $this->response($this->reportService->latestTransaction()->get());
    }

    /**
     * Change Language function
     *
     * @return boolean
     */
    public function switchLanguage(Request $request)
    {
        if ($request->lang) {
            if (!empty(Auth::user()->id) && isset(Auth::user()->id)) {
                Cache::put(config('cache.prefix') . '-user-language-' . Auth::user()->id, $request->lang, 5 * 365 * 86400);
                return true;
            }
        }
        return false;
    }

    /**
     * Set Widget Data
     */
    public function setWidgetData(Request $request)
    {
        cache()->put('dashboard-widget-element.' . auth()->user()->id, $request->data, 86400 * 30);
        
        return response()->json([
            'status' => 'success',
            'message' => __('Dashboard widget data saved successfully')
        ]);
    }
    
    /**
     * Set Widget Option
     */
    public function setWidgetOption(Request $request)
    {
        cache()->put('dashboard-widget-option.' . auth()->user()->id, $request->data, 86400 * 30);
        
        return response()->json([
            'status' => 'success',
            'message' => __('Dashboard widget option saved successfully')
        ]);
    }
    
    /**
     * Forget Widget
     */
    public function forgetWidget()
    {
        cache()->forget('dashboard-widget-element.' . auth()->user()->id);
        cache()->forget('dashboard-widget-option.' . auth()->user()->id);
        
        return back()->withSuccess('Dashboard successfully reset.');
    }
}
