<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Potential extends Model
{
  protected $table = "potentials";
  protected $fillable = ['user_id', 'company_id', 'status', 'source', 'active'];

  public function user()
  {
    return $this->belongsTo('App\User');
  }

  public function company()
  {
    return $this->belongsTo('App\Company');
  }
}
