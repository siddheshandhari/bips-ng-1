import { Injectable } from '@angular/core';
import { Http,Response } from  '@angular/http';

import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Lead } from './../lead';

@Injectable()
export class LeadSearchService {
    constructor(private http: Http){}

    searchLead(value:string): Observable<Lead[]>{
        return this.http.get('http://192.168.50.25/api/v1/search/lead?w=company&f=name&q='+value)
       .map((res:Response) =>res.json())
    }
}
