<?php namespace App\utils\Transformers;

class UserTransformer extends Transformer {

  public function transform($user)
  {

    return [
      'id' => $user['id'],
      'email' => $user['email'],
      'first_name' => $user['first_name'],
      'last_name' => $user['last_name'],
      'nick_name' => $user['nick_name'],
      'gender' => $user['gender'],
      'ssn' => $user['ssn'],
      'country' => $user['country'],
      'time_zone' => $user['time_zone'],
      'phone' => $user['phone'],
      'level' => $user['level'],
      'group_id' => $user['group_id']
    ];

  }

}
