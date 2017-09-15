<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Capacity extends Model
{
    protected $table = "capacities";
    protected $fillable = ['product_id','capacity', 'weight', 'height', 'diameter', 'punt', 'active'];
}
