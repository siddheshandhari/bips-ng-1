<?php 
namespace App\utils\Transformers;
use App\utils\Transformers\NeckfinishTransformer;
use App\Neckfinish;


class NeckfinishTransformer extends Transformer {
  // protected $neckfinishTransformer;

  // function __construct(NeckfinishTransformer $neckfinishTransformer)
  // {
  //   $this->neckfinishTransformer = $neckfinishTransformer;
  // }

  public function transform($neckfinish)
  {
    // $products = $neckfinish->products;
    // $products = $this->productTransformer->transformCollection($products);

    return [
      'id' => $neckfinish['id'],
      'neck_finish_type' => $neckfinish['neck_finish_type'],
      'inner_diameter' => $neckfinish['inner_diameter'],
      'outer_diameter' => $neckfinish['outer_diameter'],
      'ring' => $neckfinish['ring']
      // 'products' => $products
    ];
  }

}
