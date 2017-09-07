import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginAuthentication {
    constructor(private http: Http) { }

    login(email: string, password: string) {
        return this.http.post('http://192.168.50.25/api/v1/authtoken', {email: email, password: password})
            .map((response: Response) => response.json());

    }
}