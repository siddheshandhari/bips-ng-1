<?php 
namespace App\utils\Transformers;

class OrderTransformer extends Transformer {

  public function transform($order)
  {
    return [
      'id' => $order['id'],
      'name' => $order['name'],
      'date' => $order['date'],
      'quantity' => $order['quantity']
    ];
  }

}
