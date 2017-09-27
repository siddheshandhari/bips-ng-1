<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = "products";

    public function color()
    {
        return $this->belongsTo('App\Color');
    }

    public function capacity()
    {
        return $this->belongsTo('App\Capacity');
    }

    public function neckfinish()
    {
        return $this->belongsTo('App\Neckfinish');
    }

    public function packinginfo()
    {
        return $this->belongsTo('App\Packinginfo');
    }

    public function prices()
    {
        return $this->hasMany('App\Price');
    }

    public function orders()
    {
        return $this->belongsToMany('App\Order', 'productsorders');
    }

    public function warehouses()
    {
        return $this->belongsToMany('App\Warehouse', 'productswarehouses');
    }

    protected $hidden = [
        'active'
    ];

}
