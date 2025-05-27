<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'chatbot', 'namespace' => 'Modules\Chatbot\Http\Controllers'], function() {
    
    Route::get('/embed/{path6?}/{path7?}', 'ChatBotController@index');
    
    Route::get('/{path?}/{path2?}/{path3?}/{path4?}/{path5?}', 'ChatBotController@index')
        ->middleware(['auth', 'web', 'locale', 'teamAccess:chatbot', 'userPermission:hide_aichatbot'])
        ->name('aichatbot.index');
});
