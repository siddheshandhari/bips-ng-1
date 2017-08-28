<?php namespace App\utils\Builder;
use App\Company;
use Symfony\Component\HttpKernel\Exception\HttpException;

class CompanyBuilder {
  public function build($data)
  {
    $company = new Company;
    $company->name = $data['name'];
    $company->website = $data['website'];
    $company->employees = $data['employees'];
    $company->rating = $data['rating'];
    $company->industry = $data['industry'];
    $company->annual_revenue = $data['annual_revenue'];
    $company->tier = $data['tier'];
    if($company->save()){
      return $company;
    }
  }

  public function update($data, $id)
  {
    $company = Company::find($id);
    $company->name = $data['name'];
    $company->website = $data['website'];
    $company->employees = $data['employees'];
    $company->rating = $data['rating'];
    $company->industry = $data['industry'];
    $company->annual_revenue = $data['annual_revenue'];
    $company->tier = $data['tier'];
    if($company->save()){
      return $company;
    }
  }
}
