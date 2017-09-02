import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Account } from './account';

@Injectable()
export class AccountService{
  constructor(public http: Http){}
  public getAccountList(): Observable<Account[]>{
    return this.http.get("http://192.168.50.179:8000/api/v1/account")
    .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error || 'Server error'));
  }
}
