<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
  public function company()
  {
    return $this->belongsTo('App\Company');
  }

  public function order()
  {
    return $this->belongsTo('App\Order');
  }

  public function author()
  {
    return $this->belongsTo('App\User');
  }
}
