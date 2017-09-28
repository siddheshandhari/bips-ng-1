<?php namespace App\utils\Builder;
use App\Packinginfo;
use Symfony\Component\HttpKernel\Exception\HttpException;

class PackinginfoBuilder {
  public function build($data)
  {
    $packinginfo = new Packinginfo;
    $packinginfo->case_package = $data['case_package'];
    $packinginfo->cases_pallet = $data['cases_pallet'];
    $packinginfo->quantity_pallet = $data['quantity_pallet'];
    $packinginfo->pallet_height = $data['pallet_height'];
    $packinginfo->pallet_width = $data['pallet_width'];
    $packinginfo->pallet_length = $data['pallet_length'];
    $packinginfo->pallet_weight = $data['pallet_weight'];

    if($packinginfo->save()){
      return $packinginfo;
    }
  }

  public function update($data, $id)
  {
    $packinginfo = Packinginfo::find($id);
    $packinginfo->case_package = $data['case_package'];
    $packinginfo->cases_pallet = $data['cases_pallet'];
    $packinginfo->quantity_pallet = $data['quantity_pallet'];
    $packinginfo->pallet_height = $data['pallet_height'];
    $packinginfo->pallet_width = $data['pallet_width'];
    $packinginfo->pallet_length = $data['pallet_length'];
    $packinginfo->pallet_weight = $data['pallet_weight'];

    if($packinginfo->save()){
      return $packinginfo;
    }
  }
}
