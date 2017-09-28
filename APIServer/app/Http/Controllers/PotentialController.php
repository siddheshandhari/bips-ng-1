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


}
