<?php

namespace Database\seeders\versions\v1_2_1;

use Illuminate\Database\Seeder;

class PermissionTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run() {

        addPermission('Modules\\OpenAI\\Http\\Controllers\\Api\\V1\\User\\OpenAIPreferenceController@contentPreferences')->assignToCustomer();
        addPermission('Modules\\OpenAI\\Http\\Controllers\\Api\\V1\\User\\OpenAIPreferenceController@imagePreferences')->assignToCustomer();
        addPermission('Modules\\OpenAI\\Http\\Controllers\\Api\\V1\\User\\OpenAIPreferenceController@codePreferences')->assignToCustomer();
        addPermission('Modules\\OpenAI\\Http\\Controllers\\Api\\V1\\User\\UserController@index')->assignToCustomer();
        addPermission('Modules\\OpenAI\\Http\\Controllers\\Api\\V1\\User\\OpenAIController@contentTogglebookmark')->assignToCustomer();
        addPermission('Modules\\OpenAI\\Http\\Controllers\\Api\\V1\\User\\UseCasesController@useCaseToggleFavorite')->assignToCustomer();
        addPermission('Modules\\OpenAI\\Http\\Controllers\\Api\\V1\\User\\OpenAIPreferenceController@chatPreferences')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\\Controllers\\Api\\V1\\User\\PackageSubscriptionController@setting')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\\Controllers\\Api\\V1\\User\\PackageSubscriptionController@store')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\\Controllers\\Api\\V1\\User\\PackageSubscriptionController@plan')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\\Controllers\\Api\\V1\\User\\PackageSubscriptionController@cancel')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\\Controllers\\Api\\V1\\User\\PackageSubscriptionController@downloadBill')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\Controllers\\Api\\V1\\User\\PackageSubscriptionController@payBill')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\\Controllers\\Api\\V1\\User\\PackageSubscriptionController@viewBill')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\\Controllers\\Api\\V1\\User\\PackageSubscriptionController@history')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\\Controllers\\Api\\V1\\User\\PackageSubscriptionController@detail')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\\Controllers\\PackageSubscriptionController@invoiceEmail')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\\Controllers\\PackageSubscriptionController@invoicePdf')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\\Controllers\\PackageSubscriptionController@invoice')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\\Controllers\\PackageSubscriptionController@payment')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\\Controllers\\PackageSubscriptionController@setting')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\\Controllers\\PackageSubscriptionController@destroy')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\\Controllers\\PackageSubscriptionController@update')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\\Controllers\\PackageSubscriptionController@edit')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\\Controllers\\PackageSubscriptionController@show')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\\Controllers\\PackageSubscriptionController@store')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\\Controllers\\PackageSubscriptionController@create')->assignToCustomer();
        addPermission('Modules\\Subscription\\Http\\Controllers\\PackageSubscriptionController@index')->assignToCustomer();
    }   
}
