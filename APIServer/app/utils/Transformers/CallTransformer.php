<?php namespace App\utils\Transformers;

class CallTransformer extends Transformer {


  public function transform($call)
  {
    return [
      'id' => $call['id'],
      'subject' => $call['subject'],
      'call_purpose' => $call['call_purpose'],
      'contacts' => $call['contacts'],
      'accounts' => $call['accounts'],
      'current_call' => $call['current_call'],
      'completed_call' => $call['completed_call'],
      'schedule_call' => $call['schedule_call'],
      'call_start_time' => $call['call_start_time'],
      'call_duration' => $call['call_duration'],
      'description' => $call['description'],
      'billable' => $call['billable'],
      'call_result' => $call['call_result']
    ];
  }

}
