<?php namespace App\utils\Transformers;

abstract class Transformer {

  public function transformCollection($items)
  {
    return array_map([$this,'transform'], $items);
  }

}
