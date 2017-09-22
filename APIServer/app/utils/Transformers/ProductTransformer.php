<?php 
namespace App\utils\Transformers;
use App\utils\Transformers\ColorTransformer;
use App\utils\Transformers\CapacityTransformer;
use App\utils\Transformers\NeckfinishTransformer;
use App\utils\Transformers\PackinginfoTransformer;
// use App\Product;


class ProductTransformer extends Transformer {
  protected $colorTransformer;
  protected $capacityTransformer;
  protected $neckfinishTransformer;
  protected $packinginfoTransformer;

  function __construct(ColorTransformer $colorTransformer, CapacityTransformer $capacityTransformer, NeckfinishTransformer $neckfinishTransformer, PackinginfoTransformer $packinginfoTransformer)
  {
    $this->colorTransformer = $colorTransformer;
    $this->capacityTransformer = $capacityTransformer;
    $this->neckfinishTransformer = $neckfinishTransformer;
    $this->packinginfoTransformer = $packinginfoTransformer;
  }

  public function transform($product)
  {
    $color = $product->color;
    $color = $this->colorTransformer->transform($color);
    $capacity = $product->capacity;
    $capacity = $this->capacityTransformer->transform($capacity);
    $neckfinish = $product->neckfinish;
    $neckfinish = $this->neckfinishTransformer->transform($neckfinish);
    $packinginfo = $product->packinginfo;
    $packinginfo = $this->packinginfoTransformer->transform($packinginfo);

    return [
      'id' => $product['id'],
      'name' => $product['name'],
      'image' => $product['image'],
      'shape' => $product['shape'],
      'model' => $product['model'],
      'details' => $product['details'],
      'technical_detail_link' => $product['technical_detail_link'],
      'description' => $product['description'],
      'color' => $color,
      'capacity' => $capacity,
      'neckfinish' => $neckfinish,
      'packinginfo' => $packinginfo
    ];
  }

}
