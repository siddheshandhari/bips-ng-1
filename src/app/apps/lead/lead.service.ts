import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Lead } from './lead';
 
@Injectable()
export class LeadService {

  constructor(private http: Http) {}


  getLeadlist(): Observable<Lead[]>{
    return this.http.get('http://192.168.50.179:8000/api/v1/lead')
    // return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=1')
      .map((res:Response) => res.json())
    }

  



  }
