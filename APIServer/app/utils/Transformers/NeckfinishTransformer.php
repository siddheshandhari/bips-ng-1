<?php 
namespace App\utils\Transformers;
use App\utils\Transformers\ProductTransformer;
use App\Neckfinish;


class NeckfinishTransformer extends Transformer {
  protected $productTransformer;

  function __construct(ProductTransformer $productTransformer)
  {
    $this->productTransformer = $productTransformer;
  }

  public function transform($neckfinish)
  {
    $products = $neckfinish->products;
    $products = $this->productTransformer->transformCollection($products);

    return [
      'id' => $neckfinish['id'],
      'neck_finish_type' => $neckfinish['neck_finish_type'],
      'inner_diameter' => $neckfinish['inner_diameter'],
      'outer_diameter' => $neckfinish['outer_diameter'],
      'ring' => $neckfinish['ring'],
      'products' => $products
    ];
  }

}
