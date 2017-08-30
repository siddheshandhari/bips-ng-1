<?php namespace App\utils\Transformers;

abstract class Transformer {

  public function transformCollection($items)
  {
    return $items->map([$this, 'transform']);
  }

}
