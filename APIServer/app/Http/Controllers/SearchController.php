<?php

namespace App\Http\Controllers;

use App\Lead;
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
      return $this->setStatusCode(500)->respondWithError("Query keys not completed");
    }

    if($category == "lead"){
      
    } else {
      return $this->setStatusCode(500)->respondWithError("Doesn't support this category!");
    }
  }
}
