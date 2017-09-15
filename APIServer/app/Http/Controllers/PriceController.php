<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Price;
use app\utils\Transformers\PriceTransformer;
use App\utils\Builder\CompanyBuilder;
use League\Fractal\Resource\Collection;

class PriceController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // protected $priceTransformer;
    // function __construct(PriceTransformer $priceTransformer)
    // {
    // //     $this->priceTransformer = $priceTransformer;
    // }
    public function index()
    {
        $prices = price::all();
        // echo $prices;
        return $this->respond(
            $prices
        //   $this->priceTransformer->transformCollection($prices)
        );
    }
}
