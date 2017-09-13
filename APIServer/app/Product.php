<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = "products";
    protected $fillable = ['name', 'image', 'sector', 'shape', 'model', 'details', 'technical_detail_link', 'description', 'active'];
}
