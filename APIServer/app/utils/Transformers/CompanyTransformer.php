<?php namespace App\utils\Transformers;

class CompanyTransformer extends Transformer {

  public function transform($company)
  {
    $contacts = $company->contacts;
    $addresses = $company->addresses;

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
