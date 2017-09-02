<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\utils\Transformers\AccountTransformer;
use App\Account;

class AccountController extends ApiController
{
  protected $accountTransformer;
  function __construct(AccountTransformer $accountTransformer)
  {
    $this->accountTransformer = $accountTransformer;
  }

  public function browse()
  {
    $accounts = Account::all();
    return $this->respond(
      $this->accountTransformer->transformCollection($accounts)
    );
  }

  public function destroy($id)
  {
    if(!$id){
      return $this->setStatusCode(400)->respondWithError("Please provide the Account id to delete");
    }
    $lead = Account::find($id);
    $lead->active = false;
    if($lead->save()){
      return $this->respondDeleted('Account successfully deleted!');
    }
  }

}
