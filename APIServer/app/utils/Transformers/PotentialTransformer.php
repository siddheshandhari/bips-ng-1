<?php namespace App\utils\Transformers;

use App\utils\Transformers\CompanyTransformer;
use App\utils\Transformers\UserTransformer;

class PotentialTransformer extends Transformer {

  protected $companyTransformer;
  protected $userTransformer;

  function __construct(CompanyTransformer $companyTransformer, UserTransformer $userTransformer)
  {
    $this->companyTransformer = $companyTransformer;
    $this->userTransformer = $userTransformer;
  }

  public function transform($potential)
  {
    $company = $potential->company;
    $company = $this->companyTransformer->transform($company);
    $user = $potential->user;
    $user = $this->userTransformer->transform($user);

    return [
      'id' => $potential['id'],
      'company' => $company,
      'user' => $user,
      'status' => $potential['status'],
      'source' => $potential['source'],
    ];

  }

}
