<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
  protected $table = "accounts";

  public function user()
  {
    return $this->belongsTo('App\User');
  }

  public function company()
  {
    return $this->belongsTo('App\Company');
  }
}
