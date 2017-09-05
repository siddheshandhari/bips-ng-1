<?php

namespace App\Http\Controllers;

use App\Company;
use Illuminate\Http\Request;

class SearchController extends ApiController
{
  public function search(Request $request)
  {
    if($request->has('category') && $request->has('context') && $request->has('value')) {
      $category = $request->input('category');
      $context = $request->input('context');
      $value = $request->input('value');
    } else {
      return $this->setStatusCode(400)->respondWithError("Query keys haven't completed");
    }

    if($category == "company"){
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
