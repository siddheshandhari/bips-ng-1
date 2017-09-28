<?php 
namespace App\utils\Transformers;

class PackinginfoTransformer extends Transformer {

  public function transform($packinginfo)
  {
    return [
      'id' => $packinginfo['id'],
      'case_package' => $packinginfo['case_package'],
      'cases_pallet' => $packinginfo['cases_pallet'],
      'quantity_pallet' => $packinginfo['quantity_pallet'],
      'pallet_height' => $packinginfo['pallet_height'],
      'pallet_width' => $packinginfo['pallet_width'],
      'pallet_length' => $packinginfo['pallet_length'],
      'pallet_weight' => $packinginfo['pallet_weight'],
      
    ];
  }

}
