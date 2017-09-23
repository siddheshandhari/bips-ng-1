<?php 
namespace App\utils\Transformers;

class WarehouseTransformer extends Transformer {

  public function transform($warehouse)
  {
    return [
      'id' => $warehouse['id'],
      'location' => $warehouse['location'],
      'on_hold' => $warehouse['on_hold'],
      'incoming' => $warehouse['incoming'],
      'in_production' => $warehouse['in_production'],
      'on_purchase_order' => $warehouse['on_purchase_order'],
      'in_state' => $warehouse['in_state'],
      'total_quantity' => $warehouse['total_quantity'],
      'available_quantity' => $warehouse['available_quantity'],
      'stock_quantity' => $warehouse['stock_quantity'],
      'sold' => $warehouse['sold'],
      'comitted' => $warehouse['comitted'],
      'lot_number' => $warehouse['lot_number'],
      'eta' => $warehouse['eta'],
      'ready_in_china' => $warehouse['ready_in_china'],
      'date_ready' => $warehouse['date_ready'],
      'production_eta' => $warehouse['production_eta']
      
    ];
  }

}
