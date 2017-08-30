<?php namespace App\utils\Transformers;

abstract class Transformer {

  public function transformCollection($items)
  {
    return $items->filter(function($item){
      return $item->active == 1;
    })->values()->map([$this, 'transform']);
  }

}
