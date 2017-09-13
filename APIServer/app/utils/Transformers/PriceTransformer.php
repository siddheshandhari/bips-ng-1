<?php 
namespace App\utils\Transformers;
use App\utils\Transformers\PriceTransformer;
use App\Price;


class PriceTransformer extends Transformer {

  public function transform($price)
  {
    return [
      'id' => $price['id'],
      'quantity' => $price['quantity'],
      'price' => $price['price']
    ];
  }

}
