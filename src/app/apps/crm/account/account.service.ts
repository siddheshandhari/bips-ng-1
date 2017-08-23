import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Account } from './account.model';

@Injectable()
export class AccountService {
  public accountURL = "mock/account.mock.json";
  constructor(private http: Http) {}

  getAll(): Observable<Account[]>{
    return this.http.get(this.accountURL)
      .map((res:Response) => res.json())
    }
  }
