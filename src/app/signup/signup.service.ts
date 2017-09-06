import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SignupService {

private isUserSignedUp;
private username;

constructor(){
  this.isUserSignedUp = false;

}

setUserSignedUp(){
  this.isUserSignedUp = true;
}

getUserSignedUp(){
  return this.isUserSignedUp;
}


}