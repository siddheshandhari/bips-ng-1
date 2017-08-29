<?php

namespace App\Http\Controllers;

use App\Lead;
use App\utils\Transformers\LeadTransformer;
use App\utils\Builder\CompanyBuilder;
use Illuminate\Http\Request;

class LeadController extends ApiController
{

    protected $leadTransformer;
    protected $companyBuilder;
    function __construct(LeadTransformer $leadTransformer, CompanyBuilder $companyBuilder)
    {
      $this->leadTransformer = $leadTransformer;
      $this->companyBuilder = $companyBuilder;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function browse()
    {
      $leads = Lead::all()->toArray();
      return $this->respond(
        $this->leadTransformer->transformCollection($leads)
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
      $company;
      $lead = new Lead;
      //first create company
      $companyData = $request->input('company');
      try{
        $company = $this->companyBuilder->build($companyData);
      }
      catch(\Exception $e){
        $error = $e->getMessage();
        return $this->setStatusCode(500)->respondWithError($error);
      }

      //store other into table
      $lead->company_id = $company['id'];
      $lead->user_id = $user = $request->input('user.id');
      $lead->status = $request->input('status');
      $lead->source = $request->input('source');
      if($lead->save())
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
