<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Neck_finish extends Model
{
    protected $table = "neck_finishes";
    protected $fillable = ['product_id','neck_finish_type', 'inner_diameter', 'outer_diameter', 'ring', 'active'];
}
