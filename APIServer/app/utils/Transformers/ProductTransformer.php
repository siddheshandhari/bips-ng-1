<?php 
namespace App\utils\Transformers;
use App\utils\Transformers\ColorTransformer;
use App\utils\Transformers\CapacityTransformer;
use App\utils\Transformers\NeckfinishTransformer;
use App\utils\Transformers\PackinginfoTransformer;
use App\utils\Transformers\PriceTransformer;
use App\utils\Transformers\OrderTransformer;
use App\utils\Transformers\WarehouseTransformer;

class ProductTransformer extends Transformer {
  protected $colorTransformer;
  protected $capacityTransformer;
  protected $neckfinishTransformer;
  protected $packinginfoTransformer;
  protected $priceTransformer;
  protected $orderTransformer;
  protected $warehouseTransformer;

  function __construct(ColorTransformer $colorTransformer, CapacityTransformer $capacityTransformer, NeckfinishTransformer $neckfinishTransformer, PackinginfoTransformer $packinginfoTransformer, PriceTransformer $priceTransformer, OrderTransformer $orderTransformer, WarehouseTransformer $warehouseTransformer)
  {
    $this->colorTransformer = $colorTransformer;
    $this->capacityTransformer = $capacityTransformer;
    $this->neckfinishTransformer = $neckfinishTransformer;
    $this->packinginfoTransformer = $packinginfoTransformer;
    $this->priceTransformer = $priceTransformer;
    $this->orderTransformer = $orderTransformer;
    $this->warehouseTransformer = $warehouseTransformer;
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
    $prices = $product->prices;
    $prices = $this->priceTransformer->transformCollection($prices);
    $orders = $product->orders;
    $orders = $this->orderTransformer->transformCollection($orders);
    $warehouses = $product->warehouses;
    $warehouses = $this->warehouseTransformer->transformCollection($warehouses);

    return [
      'id' => $product['id'],
      'serial_number' => $product['serial_number'],
      'color' => $color,
      'capacity' => $capacity,
      'neckfinish' => $neckfinish,
      'packinginfo' => $packinginfo,
      'prices' => $prices,
      'orders' => $orders,
      'warehouses' => $warehouses,
      'showcase_id' => $product['showcase_id'],
      'name' => $product['name'],
      'image' => $product['image'],
      'catagory' => $product['catagory'],
      'type' => $product['type'],
      'model' => $product['model'],
      'description' => $product['description'],
      'shape' => $product['shape'],
      'material' => $product['material'],
      'details' => $product['details'],
      'technical_detail_link' => $product['technical_detail_link'],
      'batch_number' => $product['batch_number'],
      'unit_measure' => $product['unit_measure'],
      'msrp' => $product['msrp'],
      'drawing' => $product['drawing'],
      'heavy_mental' => $product['heavy_mental'],
      'fda_report' => $product['fda_report'],
      'msds' => $product['msds'],
      'certificate' => $product['certificate'],
      'qc_report' => $product['qc_report'],
      'status' => $product['status']
      
    ];
  }

}
