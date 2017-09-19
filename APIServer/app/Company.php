<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = ['name', 'website', 'employees', 'rating', 'industry', 'annual_revenue', 'tier', 'is_active'];

    public function contacts()
    {
      return $this->hasMany('App\Contact');
    }

    public function billingAddress()
    {
      return $this->belongsTo('App\Address', 'billing_address_id');
    }

    public function shippingAddress()
    {
      return $this->belongsTo('App\Address', 'shipping_address_id');
    }
    
    protected $hidden = [
      'active'
    ];
}
