import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LeadService {
  constructor(private http: Http) {}

  getLeadLists(): Observable<string[]>{
    return this.http.get('http://jsonplaceholder.typicode.com/posts/1/comments')
      .map((res:Response) => res.json())
    }
  }
