<?php

namespace App\Http\Controllers;

use App\Call;
use App\utils\Transformers\CallTransformer;
use App\utils\Transformers\LeadTransformer;
use App\utils\Builder\CompanyBuilder;
use Illuminate\Http\Request;

class CallController extends ApiController
{

    protected $leadTransformer;
    protected $companyBuilder;
    function __construct(CallTransformer $callTransformer, CompanyBuilder $companyBuilder)
    {
      $this->callTransformer = $callTransformer;
      $this->companyBuilder = $companyBuilder;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function browse()
    {
      $calls = call::all();
      return $this->respond(
        $this->callTransformer->transformCollection($calls)
      );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function add(Request $request)
    {
      $error = "";
      $call = new Call;
      
      //store call info table
      $call->subject = $request->input('subject');
      $call->call_purpose = $request->input('call_purpose');
      $call->contacts = $request->input('contacts');
      $call->accounts = $request->input('accounts');
      $call->current_call = $request->input('current_call');
      $call->completed_call = $request->input('completed_call');
      $call->schedule_call = $request->input('schedule_call');
      $call->call_start_time = $request->input('call_start_time');
      $call->call_duration = $request->input('call_duration');
      $call->description = $request->input('description');
      $call->billable = $request->input('billable');
      $call->call_result = $request->input('call_result');
      if($call->save())
      {
        return $this->respondCreated('Lead successfully created!');
      }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function read($id)
    {
      $call = Call::find($id);

      if(!$call)
      {
        return $this->respondNotFound('Call does not exist');
      }

      return $this->respond(
        $this->callTransformer->transform($call)
      );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
      if(!$id) {
        return $this->setStatusCode(400)->respondWithError("Please provide the Call id to update");
      }
      $call = Call::find($id);

      //update call info
      if($request->input('subject')){
        $call->subject = $request->input('subject');}
      if($request->input('call_purpose')){
      $call->call_purpose = $request->input('call_purpose');}
      if($request->input('contacts')){
      $call->contacts = $request->input('contacts');}
      if($request->input('accounts')){
      $call->accounts = $request->input('accounts');}
      if($request->input('current_call')){
      $call->current_call = $request->input('current_call');}
      if($request->input('completed_call')){
      $call->completed_call = $request->input('completed_call');}
      if($request->input('schedule_call')){
      $call->schedule_call = $request->input('schedule_call');}
      if($request->input('call_start_time')){
      $call->call_start_time = $request->input('call_start_time');}
      if($request->input('call_duration')){
      $call->call_duration = $request->input('call_duration');}
      if($request->input('description')){
      $call->description = $request->input('description');}
      if($request->input('billable')){
      $call->billable = $request->input('billable');}
      if($request->input('call_result')){
      $call->call_result = $request->input('call_result');}
      if($call->save())
      {
        return $this->respondUpdated('Call successfully updated!');
      }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      if(!$id){
        return $this->setStatusCode(400)->respondWithError("Please provide the Call id to delete");
      }
      $call = Call::find($id);
      $call->active = false;
      if($call->save()){
        return $this->respondDeleted('Call successfully deleted!');
      }
    }
}
