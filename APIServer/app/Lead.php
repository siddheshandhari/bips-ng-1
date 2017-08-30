<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
  protected $table = "leads";
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
