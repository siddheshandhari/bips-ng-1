<?php 
namespace App\utils\Transformers;
use App\utils\Transformers\ColorTransformer;
use App\Color;


class ColorTransformer extends Transformer {

  public function transform($color)
  {
    return [
      'id' => $color['id'],
      'color' => $color['color']
    ];
  }

}
