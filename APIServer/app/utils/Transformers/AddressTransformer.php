<?php namespace App\utils\Transformers;

class AddressTransformer extends Transformer {

  public function transform($address)
  {
    return [
      'id' => $address['id'],
      'country' => $address['country'],
      'state' => $address['state'],
      'city' => $address['city'],
      'street' => $address['street'],
      'zipcode' => $address['zipcode'],
    ];

  }

}
