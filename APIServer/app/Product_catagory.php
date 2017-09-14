<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product_catagory extends Model
{
    protected $table = "product_catagories";
    protected $fillable = ['catagory'];
}
