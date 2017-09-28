<?php

namespace App\Http\Controllers;

use App\Potential;
use App\utils\Transformers\PotentialTransformer;
use App\utils\Builder\CompanyBuilder;
use Illuminate\Http\Request;

class PotentialController extends ApiController
{
    protected $potentialTransformer;
    protected $companyBuilder;
    function __construct(PotentialTransformer $potentialTransformer, CompanyBuilder $companyBuilder)
    {
      $this->potentialTransformer = $potentialTransformer;
      $this->companyBuilder = $companyBuilder;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function browse()
    {
      $potentials = Potential::all();
      return $this->respond(
        $this->potentialTransformer->transformCollection($potentials)
      );
    }

    
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function read($id)
    {
      $potential = Potential::find($id);

      if(!$potential)
      {
        return $this->respondNotFound('Potential does not exist');
      }

      return $this->respond(
        $this->potentialTransformer->transform($potential)
      );
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
        return $this->setStatusCode(400)->respondWithError("Please provide the Potential id to delete");
      }
      $potential = Potential::find($id);
      $potential->active = false;
      if($potential->save()){
        return $this->respondDeleted('Potential successfully deleted!');
      }
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
      $potential = new Potential;
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
      $potential->company_id = $company['id'];
      $potential->user_id = $user = $request->input('user.id');
      $potential->status = $request->input('status');
      $potential->source = $request->input('source');
      if($potential->save())
      {
        return $this->respondCreated('Potential successfully created!');
      }


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
        return $this->setStatusCode(400)->respondWithError("Please provide the Potential id to update");
      }
      $potential = Potential::find($id);

      $error = "";
      $company_id = $potential['company_id'];
      $companyData = $request->input('company');
      try{
        $company = $this->companyBuilder->update($companyData, $company_id);
      }
      catch(\Exception $e){
        $error = $e->getMessage();
        return $this->setStatusCode(500)->respondWithError($error);
      }

      //update other info
      $potential->user_id = $user = $request->input('user.id');
      if($request->input('status')){
      $potential->status = $request->input('status');}
      if($request->input('source')){
      $potential->source = $request->input('source');}
      if($potential->save())
      {
        return $this->respondUpdated('Potential successfully updated!');
      }
    }



}
