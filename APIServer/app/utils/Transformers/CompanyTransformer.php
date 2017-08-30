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
    $billingAddress = $company->billingAddress;
    $shippingAddress = $company->shippingAddress;
    $billingAddress = $this->addressTransformer->transform($billingAddress);
    $shippingAddress = $this->addressTransformer->transform($shippingAddress);

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
      'shipping_address' => $shippingAddress,
      'billing_address' => $billingAddress
    ];

  }

}
