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

  Route::get('search/{category}', 'SearchController@search');

  //AuthToken
  Route::post('authtoken', 'AuthTokenController@add');

  //Account Collections Routes
  Route::get('account', 'AccountController@browse');
  Route::delete('account/{id}', 'AccountController@destroy');

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

  //Call Collections Routes
  Route::get('call', 'CallController@browse');
  Route::post('call', 'CallController@add');

  //Specific Call
  Route::get('call/{id}', 'CallController@read');
  Route::delete('call/{id}', 'CallController@destroy');
  Route::put('call/{id}', 'CallController@edit');

  //Notes
  Route::get('note', 'NoteController@browse');
  Route::post('note', 'NoteController@add');

  //Specific Note
  Route::get('note/{id}', 'NoteController@read');
  Route::put('note/{id}', 'NoteController@edit');
  Route::delete('note/{id}', 'NoteController@destroy');

  //Product Collections Routes
  Route::get('product', 'ProductController@browse');
  Route::post('product', 'ProductController@add');

  //Specific Product
  Route::get('product/{id}', 'ProductController@read');
  Route::delete('product/{id}', 'ProductController@destroy');
  Route::put('product/{id}', 'ProductController@edit');

  //Price Collections Routes
  Route::get('price', 'PriceController@browse');

  //Color Collections Routes
  Route::get('color', 'ColorController@browse');

  //Capacities Collections Routes
  Route::get('capacity', 'CapacityController@browse');

  //Neckfinishes Collections Routes
  Route::get('neckfinish', 'NeckfinishController@browse');

  //Packinginfos Collections Routes
  Route::get('packinginfo', 'PackinginfoController@browse');

  //Orders Collections Routes
  Route::get('order', 'OrderController@browse');

  //Warehouses Collections Routes
  Route::get('warehouse', 'WarehouseController@browse');

  //Potential Collections Routes
  Route::get('potential', 'PotentialController@browse');
  Route::get('potential/{id}', 'PotentialController@read');
  Route::delete('potential/{id}', 'PotentialController@destroy');
  Route::post('potential', 'PotentialController@add');
  Route::put('potential/{id}', 'PotentialController@edit');


});


Route::get('/', function () {
    return view('welcome');
});
