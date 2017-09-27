<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\utils\Transformers\ProductTransformer;
use App\utils\Builder\ColorBuilder;
use App\utils\Builder\CapacityBuilder;
use App\utils\Builder\NeckfinishBuilder;
use App\utils\Builder\PackinginfoBuilder;

class ProductController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
     protected $productTransformer;
     protected $colorBuilder;
     protected $capacityBuilder;
     protected $neckfinishBuilder;
     protected $packinginfoBuilder;
     function __construct(ProductTransformer $productTransformer, ColorBuilder $colorBuilder, CapacityBuilder $capacityBuilder, NeckfinishBuilder $neckfinishBuilder, PackinginfoBuilder $packinginfoBuilder)
     {
       $this->productTransformer = $productTransformer;
       $this->colorBuilder = $colorBuilder;
       $this->capacityBuilder = $capacityBuilder;
       $this->neckfinishBuilder = $neckfinishBuilder;
       $this->packinginfoBuilder = $packinginfoBuilder;
     }
    public function browse()
    {
        $products = Product::all();
        return $this->respond(
          $this->productTransformer->transformCollection($products)
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function read($id)
    {
        $product = Product::find($id);

        if (!$product)
        {
            return $this->respondNotFound('Product does not exist');
        }

        return $this->respond(
            $this->productTransformer->transform($product)
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        if(!$id)
        {
            return $this->setStatusCode(400)->respondWithError("please provide the Product id to update");
        }

        $product = Product::find($id);
        $error = "error";
        $color_id = $product['color_id'];
        $colorData = $request->input('color');
        $capacity_id = $product['capacity_id'];
        $capacityData = $request->input('capacity');
        $neckfinish_id = $product['neckfinish_id'];
        $neckfinishData = $request->input('neckfinish');
        $packinginfo_id = $product['packinginfo_id'];
        $packinginfoData = $request->input('packinginfo');
        try 
        {
            $color = $this->colorBuilder->update($colorData, $color_id);
            $capacity = $this->capacityBuilder->update($capacityData, $capacity_id);
            $neckfinish = $this->neckfinishBuilder->update($neckfinishData, $neckfinish_id);
            $packinginfo = $this->packinginfoBuilder->update($packinginfoData, $packinginfo_id);
        }
        catch(\Exception $e)
        {
            $error = $e->getMessage();
            return $this->setStatusCode(500)->respondWithError($error);
        }

        //update other info in product itself table
        if($request->input('serial_number'))
        {
            $product->serial_number = $request->input('serial_number');
        }
        if($request->input('showcase_id'))
        {
            $product->showcase_id = $request->input('showcase_id');
        }
        if($request->input('name'))
        {
            $product->name = $request->input('name');
        }
        if($request->input('image'))
        {
            $product->image = $request->input('image');
        }
        if($request->input('catagory'))
        {
            $product->catagory = $request->input('catagory');
        }
        if($request->input('type'))
        {
            $product->type = $request->input('type');
        }
        if($request->input('style'))
        {
            $product->style = $request->input('style');
        }
        if($request->input('model'))
        {
            $product->model = $request->input('model');
        }
        if($request->input('description'))
        {
            $product->description = $request->input('description');
        }
        if($request->input('shape'))
        {
            $product->shape = $request->input('shape');
        }
        if($request->input('material'))
        {
            $product->material = $request->input('material');
        }
        if($request->input('details'))
        {
            $product->details = $request->input('details');
        }
        if($request->input('technical_detail_link'))
        {
            $product->technical_detail_link = $request->input('technical_detail_link');
        }
        if($request->input('batch_number'))
        {
            $product->batch_number = $request->input('batch_number');
        }
        if($request->input('unit_measure'))
        {
            $product->unit_measure = $request->input('unit_measure');
        }
        if($request->input('msrp'))
        {
            $product->msrp = $request->input('msrp');
        }
        if($request->input('drawing'))
        {
            $product->drawing = $request->input('drawing');
        }
        if($request->input('heavy_metal'))
        {
            $product->heavy_metal = $request->input('heavy_metal');
        }
        if($request->input('fda_report'))
        {
            $product->fda_report = $request->input('fda_report');
        }
        if($request->input('msds'))
        {
            $product->msds = $request->input('msds');
        }
        if($request->input('certificate'))
        {
            $product->certificate = $request->input('certificate');
        }
        if($request->input('qc_report'))
        {
            $product->qc_report = $request->input('qc_report');
        }
        if($request->input('status'))
        {
            $product->status = $request->input('status');
        }
        

        if($product->save())
        {
            return $this->respondUpdated('Product successfully updated!');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(!$id)
        {
            return $this->setStatusCode(400)->responseWithError('Please provide the Product id to delete');
        }
        $product = Product::find($id);
        $product->active = false;
        if($product->save())
        {
            return $this->respondDeleted('Product successfully deleted!');
        }

    }
}
