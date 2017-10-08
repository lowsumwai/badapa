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

Route::get('/', function () {
    return view('welcome');
});
Auth::routes();
Route::get('/verifyemail/{token}', 'Auth\RegisterController@verify');
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/board', 'BoardController@index');
Route::get('/board/search', 'BoardController@search');
Route::get('/board/add', 'BoardController@add');
Route::get('/board/profile/{id}', 'BoardController@profile')->name('board.profile');
Route::post('/board/store', 'BoardController@store');


