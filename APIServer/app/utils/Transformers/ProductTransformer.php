<?php 
namespace App\utils\Transformers;
use App\utils\Transformers\ProductTransformer;
use App\Product;


class ProductTransformer extends Transformer {

  public function transform($product)
  {
    return [
      'id' => $product['id'],
      'name' => $product['name'],
      'image' => $product['image'],
      'sector' => $product['sector'],
      'shape' => $product['shape'],
      'model' => $product['model'],
      'details' => $product['details'],
      'technical_detail_link' => $product['technical_detail_link'],
      'description' => $product['description']
    ];
  }

}
