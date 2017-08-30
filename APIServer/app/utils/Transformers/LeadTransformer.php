<?php namespace App\utils\Transformers;

use App\utils\Transformers\CompanyTransformer;
use App\utils\Transformers\UserTransformer;

class LeadTransformer extends Transformer {

  protected $companyTransformer;
  protected $userTransformer;

  function __construct(CompanyTransformer $companyTransformer, UserTransformer $userTransformer)
  {
    $this->companyTransformer = $companyTransformer;
    $this->userTransformer = $userTransformer;
  }

  public function transform($lead)
  {
    $company = $lead->company;
    $company = $this->companyTransformer->transform($company);
    $user = $lead->user;
    $user = $this->userTransformer->transform($user);

    return [
      'id' => $lead['id'],
      'company' => $company,
      'user' => $user,
      'status' => $lead['status'],
      'source' => $lead['source']
    ];

  }

}
