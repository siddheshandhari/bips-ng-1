<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class AuthTokenController extends ApiController
{
  public function add(Request $request)
  {
    $error = "";
    $email = $request->input('email');
    $password = $request->input('password');
    try{
      $user = User::where('email', $email)->firstOrFail();
      if($password == $user->password){
        return $this->respond(
          [
            "success" => true,
            "user" => $user
          ]
        );
      }
      else{
        return $this->respond(
          [
            "success" => false,
          ]
        );
      }
    }
    catch(\Exception $e){
      return $this->respond(
        [
          "success" => false,
        ]
      );
    }
  }
}
