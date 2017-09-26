<?php 
namespace App\utils\Transformers;

class YtestTransformer extends Transformer {

  public function transform($ytest)
  {
    return [
      'name' => $ytest['name'],
      'email' => $ytest['email'],
      'password' => $ytest['password']
    ];
  }

}
