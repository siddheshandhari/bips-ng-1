// not used in this login version

import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

private isUserLoggedIn;
private username;

constructor(){
  this.isUserLoggedIn = false;

}

setUserLoggedIn(){
  this.isUserLoggedIn = true;
}

getUserLoggedIn(){
  return this.isUserLoggedIn;
}


}
