<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use App\utils\Transformers\OrderTransformer;

class OrderController extends ApiController
{
    protected $orderTransformer;
    function __construct(OrderTransformer $orderTransformer)
    {
        $this->orderTransformer = $orderTransformer;
    }

    public function browse() 
    {
        $orders = order::all();
        return $this->respond(
            $this->orderTransformer->transformCollection($orders)
        );
    }
}
