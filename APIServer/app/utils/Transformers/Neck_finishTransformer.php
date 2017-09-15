<?php 
namespace App\utils\Transformers;
use App\utils\Transformers\Neck_finishTransformer;
use App\Neck_finish;


class Neck_finishTransformer extends Transformer {

  public function transform($neck_finishes)
  {
    return [
      'id' => $neck_finishes['id'],
      'product_id' => $neck_finishes['product_id'],
      'neck_finish_type' => $neck_finishes['neck_finish_type'],
      'inner_diameter' => $neck_finishes['inner_diameter'],
      'outer_diameter' => $neck_finishes['outer_diameter'],
      'ring' => $neck_finishes['ring'],
      'active' => $neck_finishes['active'],
      
    ];
  }

}
