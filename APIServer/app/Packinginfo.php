<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Packinginfo extends Model
{
    protected $table = 'packinginfos';
    protected $fillable = ['case_package', 'cases_pallet', 'quantity_pallet', 'pallet_height', 'pallet_width', 'pallet_length', 'pallet_weight', 'active'];
    
}
