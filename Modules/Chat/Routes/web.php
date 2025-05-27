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


Route::group(['prefix' => 'chatbot/chat', 'namespace' => 'Modules\Chat\Http\Controllers', 'middleware' => ['auth', 'locale', 'web', 'userPermission:hide_chat', 'teamAccess:chat']], function() {
    Route::get('/{path?}', 'ChatController@index')->name('chat.index');
});
