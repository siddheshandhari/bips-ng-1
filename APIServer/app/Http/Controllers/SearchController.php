<?php

namespace App\Http\Controllers;

use App\Lead;
use App\utils\Builder\CompanyBuilder;
use Illuminate\Http\Request;

class SearchController extends ApiController
{
  // http:// localhost/api/v1/category=lead&context=name&value=xxx
  public function search(Request $request)
  {
    if($request->has('category') && $request->has('context') && $request->has('value')) {
      $category = $request->input('category');
      $context = $request->input('context');
      $value = $request->input('value');
    } else {
      return $this->setStatusCode(400)->respondWithError("category or context or value not specified!");
    }

    if($category == "lead"){
      if($context == "name"){
        $companies = Company::where('name', 'like', '%'.$value.'%')->get();
        return $this->respond($companies);
      } else {
        return $this->setStatusCode(400)->respondWithError("Context doesn't support");
      }
    } else {
      return $this->setStatusCode(400)->respondWithError("Category doesn't support");
    }
  }
}
