<?php

namespace App\Http\Controllers;

use App\Company;
use App\utils\Transformers\CompanyTransformer;
use Illuminate\Http\Request;

class CompanyController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    protected $companyTransformer;

    function __construct(CompanyTransformer $companyTransformer)
    {
        $this->companyTransformer = $companyTransformer;
    }

    public function browse()
    {
        $companies = Company::all();
        return $this->respond(
          $this->companyTransformer->transformCollection($companies)
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
      return $this->respondCreated('Lesson successfully created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function read($id)
    {
        $company = Company::find($id);

        if(!$company)
        {
          return $this->respondNotFound('Company does not exist');
        }

        return $this->setStatusCode(200)->respond([
          'data' => $this->companyTransformer->transform($company)
        ]);
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

}
