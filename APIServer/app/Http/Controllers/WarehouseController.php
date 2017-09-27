<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Warehouse;
use App\utils\Transformers\WarehouseTransformer;

class WarehouseController extends ApiController
{
    protected $warehouseTransformer;
    function __construct(WarehouseTransformer $warehouseTransformer)
    {
        $this->warehouseTransformer = $warehouseTransformer;
    }

    public function browse()
    {
        $warehouses = warehouse::all();
        return $this->respond(
            $this->warehouseTransformer->transformCollection($warehouses)
        );
    }
}
