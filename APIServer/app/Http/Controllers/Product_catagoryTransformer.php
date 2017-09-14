<?php 
namespace App\utils\Transformers;
use App\utils\Transformers\Product_catagoryTransformer;
use App\Product_catagory;


class Product_catagoryTransformer extends Transformer {

  public function transform($product_catagories)
  {
    return [
      'id' => $product_catagories['id'],
      'catagory' => $product_catagories['catagory']
    ];
  }

}
