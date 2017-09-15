<?php 
namespace App\utils\Transformers;
use App\utils\Transformers;
use App\utils\Transformers\PriceTransformer;
use App\Price;
use League\Fractal\Resource\Collection;

class PriceTransformer extends Transformer {

  protected $priceTransformer;
  
    function __construct(PriceTransformer $priceTransformer)
    {
      $this->priceTransformer = $priceTransformer;
    }

  public function transform($price)
  {
    // return [
    //   'id' => $price['id'],
    //   'quantity' => $price['quantity'],
    //   'price' => $price['price']
    // ];
  }
}
