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

}
