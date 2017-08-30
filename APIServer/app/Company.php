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

    public function addresses()
    {
      return $this->hasMany('App\Address');
    }
}
