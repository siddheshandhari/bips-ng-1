import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountService {
  constructor(private http: Http) {}

  getAccountList(){
    return this.http.get('http://192.168.50.25/orcasmart/bips/api/account/').subscribe(res => {
      console.log(JSON.stringify(res))
    })
  }

  }
