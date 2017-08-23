import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LeadService {
  constructor(private http: Http) {}

  getLeadLists(): Observable<string[]>{
    return this.http.get('http://192.168.50.25/orcasmart/bips/api/lead/')
      .map((res:Response) => res.json())
    }
  }
