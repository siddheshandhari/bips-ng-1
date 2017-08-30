import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Lead } from './lead';

@Injectable()
export class LeadService {

  constructor(private http: Http) {}


  getLeadlist(): Observable<Lead[]>{
    return this.http.get('http://192.168.50.25/api/v1/lead')
    // return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=1')
      .map((res:Response) => res.json())
    }

  getLead(id: number): Observable<Lead>{
      return this.http.get('http://192.168.50.25/api/v1/lead/'+id)
      .map((res:Response) =>res.json())

  }

  deleteLead(id:number): Observable<void> {
    return this.http.delete('http://192.168.50.25/api/v1/lead/'+id)
    .map((res:Response) => res.json())

  }






  }
