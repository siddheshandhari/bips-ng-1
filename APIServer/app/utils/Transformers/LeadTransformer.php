<?php namespace App\utils\Transformers;

use App\Company;
use App\utils\Transformers\CompanyTransformer;

class LeadTransformer extends Transformer {

  protected $companyTransformer;

  function __construct(CompanyTransformer $companyTransformer)
  {
    $this->companyTransformer = $companyTransformer;
  }

  public function transform($lead)
  {
    $company = Company::find($lead['company_id']);
    $company = $this->companyTransformer->transform($company);
    $user = Company::find($lead['user_id']);

    return [
      'id' => $lead['id'],
      'company' => $company,
      'user' => $user,
      'status' => $lead['status'],
      'source' => $lead['source'],
      'active' => (boolean) $lead['active']
    ];

  }

}
