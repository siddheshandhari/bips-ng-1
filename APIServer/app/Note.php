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

  public function update_author()
  {
    return $this->belongsTo('App\User', 'update_author_id');
  }

  public function create_author()
  {
    return $this->belongsTo('App\User', 'create_author_id');
  }

  protected $hidden = [
    'active'
  ];
}
