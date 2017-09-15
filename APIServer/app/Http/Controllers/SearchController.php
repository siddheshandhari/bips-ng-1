<?php

namespace App\Http\Controllers;

use App\Company;
use App\Lead;
use Illuminate\Support\Facades\Schema;
use App\utils\Builder\CompanyBuilder;
use Illuminate\Http\Request;

class SearchController extends ApiController
{
  // http:// localhost/api/v1/search/{category}?f=&q=
  //q is required.
  public function search(Request $request, $category) {
    //if query string does not show up in the url, throw the error
    if(!$request->has('q')) {
      return $this->setStatusCode(400)->respondWithError("Must specified query!");
    };

    $query = $request->input('q');
    $filter = '';
    //if filter exist, apply the filter
    if($request->has('f')){
      $filter = $request->input('f');
    }

    switch ($category){
      case 'company':
        return $this->searchCompany($filter, $query);
        break;
      case 'lead':
        return $this->searchLead($filter, $query);
        break;
      case 'account':
        return $this->setStatusCode(400)->respondWithError("This category does not support!");
        break;
      case 'potential':
        return $this->setStatusCode(400)->respondWithError("This category does not support!");
        break;
      default:
        return $this->setStatusCode(400)->respondWithError("This category does not support!");
        break;
    }
  }

  public function searchCompany($filter, $query){
    //if filter does not available, throw the error
    if(!in_array($filter, ["", "name", "website", "industry"])){
      return $this->setStatusCode(400)->respondWithError("Does not support this filter: ".$filter);
    };
    //if filter has not been set, use default value "company_name"
    if(!$filter){
      $filter = "name";
    };
    return Company::where($filter, 'like', '%'.$query.'%')->get();
  }

  public function searchLead($filter, $query){

  }

}
