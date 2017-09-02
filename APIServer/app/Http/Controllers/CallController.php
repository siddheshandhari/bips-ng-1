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
      
      //store other into table
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
      $call->active = $request->input('active');
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
      $lead = Lead::find($id);

      if(!$lead)
      {
        return $this->respondNotFound('Lead does not exist');
      }

      return $this->respond(
        $this->leadTransformer->transform($lead)
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
        return $this->setStatusCode(400)->respondWithError("Please provide the Lead id to update");
      }
      $lead = Lead::find($id);

      $error = "";
      $company_id = $lead['company_id'];
      $companyData = $request->input('company');
      try{
        $company = $this->companyBuilder->update($companyData, $company_id);
      }
      catch(\Exception $e){
        $error = $e->getMessage();
        return $this->setStatusCode(500)->respondWithError($error);
      }

      //update other info
      $lead->user_id = $user = $request->input('user.id');
      $lead->status = $request->input('status');
      $lead->source = $request->input('source');
      if($lead->save())
      {
        return $this->respondUpdated('Lead successfully updated!');
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
        return $this->setStatusCode(400)->respondWithError("Please provide the Lead id to delete");
      }
      $lead = Lead::find($id);
      $lead->active = false;
      if($lead->save()){
        return $this->respondDeleted('Lead successfully deleted!');
      }
    }
}
