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

Route::group(['prefix' => 'api/v1'], function()
{

  Route::get('search', 'SearchController@search');

  //Account Collections Routes
  Route::get('account', 'AccountController@browse');

  //Lead Collections Routes
  Route::get('lead', 'LeadController@browse');
  Route::post('lead', 'LeadController@add');

  //Specific Lead
  Route::get('lead/{id}', 'LeadController@read');
  Route::delete('lead/{id}', 'LeadController@destroy');
  Route::put('lead/{id}', 'LeadController@edit');

  //Company Collections Routes
  Route::get('company', 'CompanyController@browse');
  Route::post('company', 'CompanyController@add');
  //Specific Company
  Route::get('company/{id}', 'CompanyController@read');
  Route::delete('company/{id}', 'CompanyController@destroy');
  Route::put('company/{id}', 'CompanyController@edit');

});

Route::get('/', function () {
    return view('welcome');
});
