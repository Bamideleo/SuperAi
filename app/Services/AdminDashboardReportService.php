<?php

/**
* @package AdminDashboardReportService
* @author TechVillage <support@techvill.org>
* @contributor Muhammad AR Zihad <[zihad.techvill@gmail.com]>
* @contributor Al Mamun <[almamun.techvill@gmail.com]>
* @created 11-04-2022
*/

namespace App\Services;

use App\Traits\{ApiResponse, ReportHelperTrait};
use Illuminate\Support\Facades\DB;

use App\Models\{ User};

Use Modules\Subscription\Entities\{
    SubscriptionDetails,
    PackageSubscription
    };
Use Modules\OpenAI\Entities\{Archive, Content, Image, Code, Chat};

class AdminDashboardReportService
{
   
    use ApiResponse, ReportHelperTrait;

    /**
     * New users registered in last 30 days
     *
     * @param string|null $key
     * @return mixed
     */
    public function newUsersCount($key = 'newUsersCount', $returnSelf = true)
    {
        if ($key == '') {
            $key = 'newUsers';
        }

        $count = User::where('created_at', '>=', $this->offsetDate('-30'))
            ->where('status', 'Active')
            ->count();

        if ($returnSelf) {
            return $this->complete($count, $key);
        }

        $this->setReturn($count, $key);
        return $count;
    }

    /**
     * Compare new users count against last 30 days
     *
     * @param string|null $key
     * @return mixed
     */
    public function newUsersCompare($key = 'newUsersCompare')
    {
        $totalLastMonth = User::where('created_at', '>=', $this->offsetDate('-60'))->where('created_at', '<', $this->offsetDate('-30'))
            ->where('status', 'Active')
            ->count();
        $totalThisMonth = $this->getValue('newUsers') ??  $this->newUsersCount('', false);

        return $this->complete($this->growthRate($totalThisMonth, $totalLastMonth), $key);
    }

    /**
     * Calculates total Subscribers in this month
     *
     * @param string|null $key
     * @param bool $returnSelf
     * @return mixed
     */
    public function thisMonthSubscribersCount($key = 'thisMonthSubscribersCount', $returnSelf = true)
    {
        if ($key == '') {
            $key = 'thisMonthSubscribersCount';
        }
        $total = SubscriptionDetails::whereIn('status', ['Active', 'Expired'])->where('billing_date', '>=', $this->offsetDate("-30"))->count();

        return $this->complete($total, $key, $returnSelf);
    }

    /**
     * Compare this month Subscribers count against last month Subscribers count
     *
     * @param string|null $key
     * @return mixed
     */
    public function thisMonthSubscribersCompare($key = 'thisMonthSubscribersCompare')
    {
        $totalLastMonth = SubscriptionDetails::whereIn('status', ['Active', 'Expired'])->where('billing_date', '>=', $this->offsetDate('-60'))->where('billing_date', '<', $this->offsetDate('-30'))->count();
        $totalThisMonth = $this->getValue('thisMonthSubscribersCount') ?? $this->thisMonthSubscribersCount('', false);

        return $this->complete($this->growthRate($totalThisMonth, $totalLastMonth), $key);
    }


    /**
     * Get income of the month
     *
     * @param string|null $key
     * @return mixed
     */
    public function incomeThisMonth($key = 'incomeThisMonth', $returnSelf = true)
    {
        $key = $key ?? 'incomeThisMonth';
        $income = SubscriptionDetails::whereIn('status', ['Active', 'Expired', 'Cancel'])
            ->where('created_at', '>=', $this->offsetDate('-30'))
            ->sum('billing_price');

        return $this->complete($income, $key, $returnSelf);
    }

    /**
     * Compare income of the month
     *
     * @param string|null $key
     * @return mixed
     */
    public function incomeThisMonthCompare($key = 'incomeThisMonthCompare')
    {

        $totalLastMonth = SubscriptionDetails::whereIn('status', ['Active', 'Expired', 'Cancel'])->where('billing_date', '>=', $this->offsetDate('-60'))->where('billing_date', '<', $this->offsetDate('-30'))->sum('billing_price');
        $totalThisMonth = $this->getValue('incomeThisMonth') ?? $this->incomeThisMonth(null, false);

        return $this->complete($this->growthRate($totalThisMonth, $totalLastMonth), $key);
    }

    /**
     * Get total code generated of the month
     *
     * @param string|null $key
     * @return mixed
     */
    public function codeGeneratedThisMonth($key = 'codeGeneratedThisMonth', $returnSelf = true)
    {
        $key = $key ?? 'codeGeneratedThisMonth';
        $codeGenerated = Archive::where('created_at', '>=', $this->offsetDate('-30'))->where('type', 'code')->count();

        return $this->complete($codeGenerated, $key, $returnSelf);
    }

    /**
     * Compare code generated of the month
     *
     * @param string|null $key
     * @return mixed
     */
    public function codeGeneratedThisMonthCompare($key = 'codeGeneratedThisMonthCompare')
    {

        $totalLastMonth = Archive::where('created_at', '>=', $this->offsetDate('-60'))->where('created_at', '<', $this->offsetDate('-30'))->where('type', 'code')->count();
        $totalThisMonth = $this->getValue('codeGeneratedThisMonth') ?? $this->codeGeneratedThisMonth(null, false);

        return $this->complete($this->growthRate($totalThisMonth, $totalLastMonth), $key);
    }

    /**
     * Get word generated of the month
     *
     * @param string|null $key
     * @return mixed
     */
    public function wordGeneratedThisMonth($key = 'wordGeneratedThisMonth', $returnSelf = true)
    {
        $key = $key ?? 'wordGeneratedThisMonth';

        $wordGenerated = DB::table('archives')
            ->join('archives_meta', 'archives.id', '=', 'archives_meta.owner_id')
            ->where('archives.created_at', '>=', $this->offsetDate('-30'))
            ->where('archives_meta.key', 'total_words')
            ->whereIn('archives.type', [
                'code_chat_reply', 'template', 'long_article', 
                'chat_reply', 'vision_chat_reply', 'file_chat_reply', 'url_chat_reply'
            ])
            ->selectRaw("
                SUM(CASE WHEN archives.type IN ('code_chat_reply', 'template', 'long_article') THEN archives_meta.value ELSE 0 END) +
                SUM(CASE WHEN archives.user_id IS NULL AND archives.type IN ('chat_reply', 'vision_chat_reply', 'file_chat_reply', 'url_chat_reply') THEN archives_meta.value ELSE 0 END) AS word_generated
            ")
            ->value('word_generated');
 
        $wordGenerated = $wordGenerated ?? 0;
        
        $wordGenerated = $wordGenerated ?? 0;
        
        return $this->complete($wordGenerated, $key, $returnSelf);
    }

    /**
     * Compare word generated of the month
     *
     * @param string|null $key
     * @return mixed
     */
    public function wordGeneratedThisMonthCompare($key = 'wordGeneratedThisMonthCompare')
    {

        $totalLastMonth = DB::table('archives')
            ->join('archives_meta', 'archives.id', '=', 'archives_meta.owner_id')
            ->whereBetween('archives.created_at', [$this->offsetDate('-60'), $this->offsetDate('-30')])
            ->where('archives_meta.key', 'total_words')
            ->whereIn('archives.type', [
                'code_chat_reply', 'template', 'long_article', 
                'chat_reply', 'vision_chat_reply', 'file_chat_reply', 'url_chat_reply'
            ])
            ->selectRaw("
                SUM(CASE WHEN archives.type IN ('code_chat_reply', 'template', 'long_article') THEN archives_meta.value ELSE 0 END) +
                SUM(CASE WHEN archives.user_id IS NULL AND archives.type IN ('chat_reply', 'vision_chat_reply', 'file_chat_reply', 'url_chat_reply') THEN archives_meta.value ELSE 0 END) AS word_generated
            ")
            ->value('word_generated');

        $totalThisMonth = $this->getValue('wordGeneratedThisMonth') ?? $this->wordGeneratedThisMonth(null, false);

        return $this->complete($this->growthRate($totalThisMonth, $totalLastMonth), $key);
    }

    /**
     * Get image generated of the month
     *
     * @param string|null $key
     * @return mixed
     */
    public function imageGeneratedThisMonth($key = 'imageGeneratedThisMonth', $returnSelf = true)
    {
        $key = $key ?? 'imageGeneratedThisMonth';
        $imageGenerated = Archive::where('created_at', '>=', $this->offsetDate('-30'))->where('type', 'image_variant')->count();

        return $this->complete($imageGenerated, $key, $returnSelf);
    }

    /**
     * Compare image generated of the month
     *
     * @param string|null $key
     * @return mixed
     */
    public function imageGeneratedThisMonthCompare($key = 'imageGeneratedThisMonthCompare')
    {

        $totalLastMonth = Archive::where('created_at', '>=', $this->offsetDate('-60'))->where('created_at', '<', $this->offsetDate('-30'))->where('type', 'image_variant')->count();
        $totalThisMonth = $this->getValue('imageGeneratedThisMonth') ?? $this->imageGeneratedThisMonth(null, false);

        return $this->complete($this->growthRate($totalThisMonth, $totalLastMonth), $key);
    }

    /**
     * Get image generated of the month
     *
     * @param string|null $key
     * @return mixed
     */
    public function documentCreatedThisMonth($key = 'documentGeneratedThisMonth', $returnSelf = true)
    {
        $key = $key ?? 'documentCreatedThisMonth';
        $documentCreated = Archive::where('created_at', '>=', $this->offsetDate('-30'))->where('type', 'template')->count();

        return $this->complete($documentCreated, $key, $returnSelf);
    }

    /**
     * Compare image generated of the month
     *
     * @param string|null $key
     * @return mixed
     */
    public function documentCreatedThisMonthCompare($key = 'documentCreatedThisMonthCompare')
    {

        $totalLastMonth = Archive::where('created_at', '>=', $this->offsetDate('-60'))->where('created_at', '<', $this->offsetDate('-30'))->where('type', 'template')->count();
        $totalThisMonth = $this->getValue('documentCreatedThisMonth') ?? $this->documentCreatedThisMonth(null, false);

        return $this->complete($this->growthRate($totalThisMonth, $totalLastMonth), $key);
    }

    /**
     * Get transactions of the month
     *
     * @param string|null $key
     * @return mixed
     */
    public function transactionsThisMonth($key = 'transactionsThisMonth', $returnSelf = true)
    {
        $key = $key ?? 'transactionsThisMonth';
        $transactions = SubscriptionDetails::where(function ($query) {
            $query->where('status', 'Active')
                ->orWhere('status', 'Expired')
                ->orWhere('status', 'Cancel');
        })->where('created_at', '>=', $this->offsetDate('-30'))->count();

        return $this->complete($transactions, $key, $returnSelf);
    }

    /**
     * Compare transactions of the month
     *
     * @param string|null $key
     * @return mixed
     */
    public function transactionsThisMonthCompare($key = 'transactionsThisMonthCompare')
    {

        $totalLastMonth = SubscriptionDetails::whereIn('status', ['Active', 'Expired', 'Cancel'])->where('billing_date', '>=', $this->offsetDate('-60'))->where('billing_date', '<', $this->offsetDate('-30'))->count();
        $totalThisMonth = $this->getValue('transactionsThisMonth') ?? $this->transactionsThisMonth(null, false);

        return $this->complete($this->growthRate($totalThisMonth, $totalLastMonth), $key);
    }

     /**
     * Get sales comparison
     *
     * @param string|null $key
     * @return mixed
     */
    public function salesOfTheMonth($key = 'salesComparison')
    {
        $range = $this->getDay($this->offsetDate());
        $dates = range(1, 31);

        $currentMonth = $this->getMonth($this->offsetDate());
        $values[$currentMonth - 2] = array_fill(0, 31, 0);
        $values[$currentMonth - 1] = array_fill(0, 31, 0);
        $values[$currentMonth] = array_fill(0, $range - 1, 0);


        SubscriptionDetails::select('id', 'billing_date', DB::raw('sum(billing_price) as total'))
            ->whereIn('status', ['Active', 'Expired', 'Cancel'])
            ->where('payment_status', 'Paid')
            ->where('billing_date', '>=', $this->offsetDate('-' . 60 + $range - 1))
            ->where('billing_date', '<', $this->tomorrow())
            ->groupBy('billing_date')
            ->get()
            ->map(function ($sale) use (&$values, $currentMonth) {
                $month = $this->getMonth($sale->billing_date);
                if ($currentMonth < 3 && $month > 10) {
                    $month -= 12;
                }

                $values[$month][$this->getDay($sale->billing_date) - 1] = $sale->total;
            });

        return $this->complete([
            'dates' => $dates,
            'values' => $values,
            'thisMonth' => date('M Y')
        ], $key);
    }

    /**
     * Orders of different statuses
     *
     * @param string|null $key
     * @return mixed
     */
    public function newUsersWithCount($key = 'newRegisterUsers')
    {
        $data = [];
        User::select(DB::raw("COUNT(*) as count"), DB::raw("MONTHNAME(created_at) as month_name"))
                    ->where('status', 'Active')
                    ->whereYear('created_at', date('Y'))
                    ->groupBy(DB::raw("Month(created_at)"))
                    ->get()
                    ->map(function ($user) use (&$data) {
                        $data['status'][] = $user->month_name;
                        $data['count'][] = $user->count;
                    });

        return $this->complete($data, $key);

    }

    /**
     * latest Registration
     *
     * @param string|null $key
     * @return mixed
     */
    public function latestRegistration($key = 'latestRegistration')
    {

        $user = User::take($this->getLimit())
                ->where('status', 'Active')
                ->orderByDesc('created_at')
                ->get()
                ->map(function ($user) {
                    return [
                        'id' => $user->id,
                        'name' => $user->name,
                        'status' => $user->status,
                        'created_at' => formatDate($user->created_at),
                        'view' => route('users.edit', ['id' => $user->id]),
                    ];
                });

        return $this->complete($user , $key);
    }

    /**
     * latest Transaction
     *
     * @param string|null $key
     * @return mixed
     */
    public function latestTransaction($key = 'latestTransaction')
    {
        $data = SubscriptionDetails::with(['user' => function ($q){
            $q->select('id', 'name');
        }, 'package' => function($q) {
            $q->select('id', 'name as packageName');
        }, 'credit' => function($q) {
            $q->select('id', 'name as packageName');
        }])->whereIn('subscription_details.status', ['Active', 'Expired', 'Cancel'])->take($this->getLimit())
                ->groupBy('subscription_details.id')
                ->select(
                    'subscription_details.id as id',
                    'subscription_details.user_id',
                    'subscription_details.package_id',
                    'subscription_details.status as status',
                    'subscription_details.billing_price as price',
                    'subscription_details.created_at as date',
                )
                ->orderByDesc('subscription_details.created_at')
                ->get()
                ->map(function ($transaction) {
                    return [
                        'id' => $transaction->id,
                        'user_name' => $transaction?->user?->name,
                        'package_name' =>  $transaction?->package?->packageName ?? $transaction?->credit?->packageName,
                        'price' => formatNumber($transaction->price),
                        'status' =>  $transaction->status,
                        'date' => formatDate($transaction->date),
                    ];
                });
        return $this->complete($data , $key);
    }

    /**
     * Get Chat generated of the month
     *
     * @param string|null $key
     * @return mixed
     */
    public function chatGeneratedThisMonth($key = 'chatGeneratedThisMonth', $returnSelf = true)
    {
        $key = $key ?? 'chatGeneratedThisMonth';
        $chatGenerated = Archive::where('created_at', '>=', $this->offsetDate('-30'))->whereIn('type', ['chat_reply', 'vision_chat_reply', 'file_chat_reply', 'url_chat_reply'])->whereNull('user_id')->count();

        return $this->complete($chatGenerated, $key, $returnSelf);
    }

    /**
     * Compare chat generated of the month
     *
     * @param string|null $key
     * @return mixed
     */
    public function chatGeneratedThisMonthCompare($key = 'chatGeneratedThisMonthCompare')
    {

        $totalLastMonth = Archive::where('created_at', '>=', $this->offsetDate('-60'))->where('created_at', '<', $this->offsetDate('-30'))->whereIn('type', ['chat_reply', 'vision_chat_reply', 'file_chat_reply', 'url_chat_reply'])->whereNull('user_id')->count();
        $totalThisMonth = $this->getValue('chatGeneratedThisMonth') ?? $this->chatGeneratedThisMonth(null, false);

        return $this->complete($this->growthRate($totalThisMonth, $totalLastMonth), $key);
    }

    /**
     * Dashboard widget element
     *
     * @param string|null $key
     * @param bool $returnSelf
     * @return array
     */
    public function dashboardWidgetElement($key = 'dashboardWidgetElement', $returnSelf = true)
    {
        if ($key == '') {
            $key = 'dashboardWidgetElement';
        }
        $data = json_decode(cache()->get('dashboard-widget-element.' . auth()->user()->id), true);
        return $this->complete($data, $key, $returnSelf);
    }
    
    /**
     * Dashboard widget option
     *
     * @param string|null $key
     * @param bool $returnSelf
     * @return array
     */
    public function dashboardWidgetOption($key = 'dashboardWidgetOption', $returnSelf = true)
    {
        if ($key == '') {
            $key = 'dashboardWidgetOption';
        }
        $data = json_decode(cache()->get('dashboard-widget-option.' . auth()->user()->id), true);
        return $this->complete($data, $key, $returnSelf);
    }
    
    /**
     * Admin dashboard widget
     * 
     * 'label', 'visibility' and 'gs' are optional
     * default 'visibility' is true
     */
    public function widget($key = 'widget', $returnSelf = true)
    {
        if ($key == '') {
            $key = 'widget';
        }
        
        $data = [
            'monthly_users' => [
                'label' => __('Users'),
                'visibility' => true,
                'content' => 'admin.dashboxes.monthly-users',
                'gs' => ['x' => 0, 'y' => 0, 'width' => 4, 'height' => 1]
            ],
            'monthly_subscriptions' => [
                'label' => __('Subscriptions'),
                'content' => 'admin.dashboxes.monthly-subscriptions',
                'gs' => ['x' => 4, 'y' => 0, 'width' => 4, 'height' => 1 ]
            ],
            'monthly_income' => [
                'label' => __('Total Income'),
                'content' => 'admin.dashboxes.monthly-income',
                'gs' => ['x' => 8, 'y' => 0, 'width' => 4, 'height' => 1],
            ],
            'monthly_generated_codes' => [
                'label' => __('Generated Codes'),
                'content' => 'admin.dashboxes.monthly-generated-codes',
                'gs' => ['x' => 0, 'y' => 1, 'width' => 4, 'height' => 1]
            ],
            'monthly_generated_documents' => [
                'label' => __('Generated Documents'),
                'content' => 'admin.dashboxes.monthly-generated-documents',
                'gs' => ['x' => 4, 'y' => 1, 'width' => 4, 'height' => 1]
            ],
            'monthly_generated_images' => [
                'label' => __('Generated Images'),
                'content' => 'admin.dashboxes.monthly-generated-images',
                'gs' => ['x' => 8, 'y' => 1, 'width' => 4, 'height' => 1]
            ],
            'monthly_generated_words' => [
                'label' => __('Generated Words'),
                'content' => 'admin.dashboxes.monthly-generated-words',
                'gs' => ['x' => 0, 'y' => 2, 'width' => 4, 'height' => 1]
            ],
            'monthly_generated_transactions' => [
                'label' => __('Transactions'),
                'content' => 'admin.dashboxes.monthly-generated-transactions',
                'gs' => ['x' => 4, 'y' => 2, 'width' => 4, 'height' => 1]
            ],
            'monthly_generated_chats' => [
                'label' => __('Total Chat Generated'),
                'content' => 'admin.dashboxes.monthly-generated-chats',
                'gs' => ['x' => 8, 'y' => 2, 'width' => 4, 'height' => 1]
            ],
            'bar_chart' => [
                'label' => __('Total New Users'),
                'content' => 'admin.dashboxes.bar-chart',
                'gs' => ['x' => 0, 'y' => 3, 'width' => 5, 'height' => 5]
            ],
            'heatmap' => [
                'label' => __('Sales Per Day'),
                'content' => 'admin.dashboxes.heatmap',
                'gs' => ['x' => 5, 'y' => 3, 'width' => 7, 'height' => 5]
            ],
            'latest_registration' => [
                'label' => __('Latest Registration'),
                'content' => 'admin.dashboxes.latest-registration',
                'gs' => ['x' => 0, 'y' => 8, 'width' => 5, 'height' => 4]
            ],
            'latest_transaction' => [
                'label' => __('Latest Transaction'),
                'content' => 'admin.dashboxes.latest-transaction',
                'gs' => ['x' => 6, 'y' => 8, 'width' => 7, 'height' => 4]
            ],
        ];
        
        $data = apply_filters('admin_dashboard_widget', $data);
        
        return $this->complete($data, $key, $returnSelf);
    }
}
