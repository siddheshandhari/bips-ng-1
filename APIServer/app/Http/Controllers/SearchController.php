<?php

namespace App\Http\Controllers;

use App\Company;
use App\Lead;

use App\utils\Transformers\CompanyTransformer;
use Illuminate\Http\Request;

class SearchController extends ApiController
{
  private $query = '';
  private $filter = '';
  private $with = '';
  private $company_filters = ["name", "website", "industry"];
  private $contact_filters = ["first_name", "last_name", "email", "title", "position", "phone", "department", "home_phone", "other_phone", "fax", "mobile", "birthday", "assistant", "asst_phone", "reports_to", "skype", "customer_type", "twitter"];
  private $lead_filters = ["source", "status", "active"];
  private $address_filters = ["country", ""];

  protected $companyTransformer;

  function __construct(CompanyTransformer $companyTransformer)
  {
    $this->companyTransformer = $companyTransformer;
  }
  // http:// localhost/api/v1/search/{category}?f=&q=
  //q is required.
  public function search(Request $request, $category) {
    //if query string does not show up in the url, throw the error
    if(!$request->has('q')) {
      return $this->setStatusCode(400)->respondWithError("Must specified query!");
    };

    $this->query = $request->input('q');
    $this->filter = '';
    $this->with = '';
    //if filter exist, apply the filter
    if($request->has('f')){
      $this->filter = $request->input('f');
    }
    if($request->has('w')){
      $this->with = $request->input('w');
    }

    switch ($category){
      case 'company':
        return $this->searchCompany();
        break;
      case 'lead':
        return $this->searchLead();
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

  private function searchCompany(){
    //if filter has not been set, use default value "company_name"
    if(!$this->filter){
      $this->filter = "name";
    };
    //if with not set, use company fields directly
    if(!$this->with){
      //if filter does not available, throw the error
      if(!in_array($this->filter, $this->company_filters)){
        return $this->setStatusCode(400)->respondWithError("Company search does not support this filter: ".$this->filter);
      };
      $companies = Company::where($this->filter, 'like', '%'.$this->query.'%')->get();
      return $this->setStatusCode(200)->respond(
        $this->companyTransformer->transformCollection($companies)
      );
    };

    if($this->with == "contact"){
      return Company::with(['contacts' => function($q){
        $q->where($this->filter, 'like', '%'.$this->query.'%');
      }])->get();
    } else if($with == "address"){

    } else {
      return $this->setStatusCode(400)->respondWithError("Does not support search company with ".$this->with);
    }

  }

  private function searchLead($filter, $query){

  }

}
