<?php namespace App\utils\Builder;
use App\Warehouse;
use Symfony\Component\HttpKernel\Exception\HttpException;

class WarehouseBuilder {
  public function build($data)
  {
    $warehouse = new Warehouse;
    $warehouse->location = $data['location'];
    $warehouse->on_hold = $data['on_hold'];
    $warehouse->incoming = $data['incoming'];
    $warehouse->in_production = $data['in_production'];
    $warehouse->on_purchase_order = $data['on_purchase_order'];
    $warehouse->in_state = $data['in_state'];
    $warehouse->total_quantity = $data['total_quantity'];
    $warehouse->available_quantity = $data['available_quantity'];
    $warehouse->stock_quantity = $data['stock_quantity'];
    $warehouse->sold = $data['sold'];
    $warehouse->comitted = $data['comitted'];
    $warehouse->lot_number = $data['lot_number'];
    $warehouse->eta = $data['eta'];
    $warehouse->ready_in_china = $data['ready_in_china'];
    $warehouse->date_ready = $data['date_ready'];
    $warehouse->production_eta = $data['production_eta'];


    if($warehouse->save()){
      return $warehouse;
    }
  }

  public function update($data, $id)
  {
    $company = Warehouse::find($id);
    $warehouse->location = $data['location'];
    $warehouse->on_hold = $data['on_hold'];
    $warehouse->incoming = $data['incoming'];
    $warehouse->in_production = $data['in_production'];
    $warehouse->on_purchase_order = $data['on_purchase_order'];
    $warehouse->in_state = $data['in_state'];
    $warehouse->total_quantity = $data['total_quantity'];
    $warehouse->available_quantity = $data['available_quantity'];
    $warehouse->stock_quantity = $data['stock_quantity'];
    $warehouse->sold = $data['sold'];
    $warehouse->comitted = $data['comitted'];
    $warehouse->lot_number = $data['lot_number'];
    $warehouse->eta = $data['eta'];
    $warehouse->ready_in_china = $data['ready_in_china'];
    $warehouse->date_ready = $data['date_ready'];
    $warehouse->production_eta = $data['production_eta'];

    if($warehouse->save()){
      return $warehouse;
    }
  }
}
