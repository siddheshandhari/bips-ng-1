import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Account } from './model/account';

@Injectable()
export class AccountService {
  public accountURL = "app/apps/crm/account/account.mock.json";
  constructor(private http: Http) {}

  getAccountList(): Observable<Account[]>{
    return this.http.get(this.accountURL)
      .map((res:Response) => res.json())
    }
  }
