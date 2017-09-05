<?php

namespace App;
use App\Call;

use Illuminate\Database\Eloquent\Model;

class Call extends Model
{
   protected $table = "calls";
   protected $fillable = ['subject', 'call_purpose', 'contacts', 'accounts', 'current_call', 'completed_call', 'schedule_call', 'call_start_time', 'call_duration', 'description', 'billable', 'call_result', 'active'];
}
