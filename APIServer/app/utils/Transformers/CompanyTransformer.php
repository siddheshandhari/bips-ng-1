<?php namespace App\utils\Transformers;

use App\utils\Transformers\AddressTransformer;
use App\utils\Transformers\ContactTransformer;

class CompanyTransformer extends Transformer {

  protected $addressTransformer;
  protected $contactTransformer;

  function __construct(AddressTransformer $addressTransformer, ContactTransformer $contactTransformer)
  {
    $this->addressTransformer = $addressTransformer;
    $this->contactTransformer = $contactTransformer;
  }

  public function transform($company)
  {
    $contacts = $company->contacts;
    $contacts = $this->contactTransformer->transformCollection($contacts);
    $addresses = $company->addresses;
    $addresses = $this->addressTransformer->transformCollection($addresses);

    return [
      'id' => $company['id'],
      'name' => $company['name'],
      'website' => $company['website'],
      'employees' => $company['employees'],
      'rating' => $company['rating'],
      'industry' => $company['industry'],
      'annual_revenue' => $company['annual_revenue'],
      'tier' => $company['tier'],
      'contacts' => $contacts,
      'addresses' => $addresses,
    ];

  }

}
