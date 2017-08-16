import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  constructor(private http: Http) { }

  login(username: string, password: string) {
    return this.http.post('http://192.168.50.25/orcasmart/bips/api/session/', JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        let user = response.json();
        return user;
      })
  }

  logut(){
    alert('logout');
  }


}
