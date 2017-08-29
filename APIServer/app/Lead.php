<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
  protected $fillable = ['user_id', 'company_id', 'status', 'source', 'active'];
}
