import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Account } from './model/account';

@Injectable()
export class AccountService {
  constructor(private http: Http) {}

  getAccountList(): Observable<string[]>{
    return this.http.get('http://192.168.50.25/orcasmart/bips/api/account/')
      .map((res:Response) => res.json())
    }
  }
