<?php 
namespace App\utils\Transformers;

class CapacityTransformer extends Transformer {

  public function transform($capacity)
  {
    return [
      'id' => $capacity['id'],
      'capacity' => $capacity['capacity'],
      'weight' => $capacity['weight'],
      'height' => $capacity['height'],
      'diameter' => $capacity['diameter'],
      'punt' => $capacity['punt']
    ];
  }

}
