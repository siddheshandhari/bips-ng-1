<?php 
namespace App\utils\Transformers;
use App\utils\Transformers\ProductTransformer;

// use League\Fractal\Resource\Collection;

class PriceTransformer extends Transformer {

  // protected $productTransformer;
  
  //   function __construct(ProductTransformer $productTransformer)
  //   {
  //     $this->productTransformer = $productTransformer;
  //   }

  public function transform($price)
  {
    // $product = $price->product;
    // $product = $this->productTransformer->transform($product);

    return [
      'id' => $price['id'],
      'quantity' => $price['quantity'],
      'price' => $price['price'],
      // 'product' => $product
    ];
  }
}
