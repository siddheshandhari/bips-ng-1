<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = ['name', 'website', 'employees', 'rating', 'industry', 'annual_revenue', 'tier', 'is_active'];
}
