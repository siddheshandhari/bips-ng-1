import { Injectable } from '@angular/core';
import { Http,Response } from  '@angular/http';

import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Lead } from './../lead';

@Injectable()
export class LeadSearchService {
    constructor(private http: Http){}

    searchLead(value:string): Observable<Lead[]>{
        return this.http.get('http://127.0.0.1:8000/api/v1/search/lead?q='+value)
       .map((res:Response) =>res.json())
    }
}
