import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class CompanyService {
  constructor(private http: Http){}

  // getCompanies():Observable<Company>
}
