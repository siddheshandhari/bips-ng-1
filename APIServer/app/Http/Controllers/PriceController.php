<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Price;
use App\utils\Transformers\PriceTransformer;
// use League\Fractal\Resource\Collection;

class PriceController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    protected $priceTransformer;
    function __construct(PriceTransformer $priceTransformer)
    {
        $this->priceTransformer = $priceTransformer;
    }
    public function browse()
    {
        $prices = price::all();
        return $this->respond(
            $this->priceTransformer->transformCollection($prices)
        );
    }
}
