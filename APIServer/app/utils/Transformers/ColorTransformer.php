<?php 
namespace App\utils\Transformers;

class ColorTransformer extends Transformer {

  public function transform($color)
  {
    return [
      'id' => $color['id'],
      'color' => $color['color']
    ];
  }

}
