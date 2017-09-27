<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Ytest;
use App\utils\Transformers\YtestTransformer;

class YtestController extends ApiController
{
    protected $ytestTransformer;
    function __construct(YtestTransformer $ytestTransformer)
    {
        $this->ytestTransformer = $ytestTransformer;
    }
    

     public function browse()
    {
      $ytests = Ytest::all();
      return $this->respond(
        $this->ytestTransformer->transformCollection($ytests)
      );
    }
}
