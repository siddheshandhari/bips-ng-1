import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Leadlist } from './leadlist';
 
@Injectable()
export class LeadService {
  public leadlistUrl = 'mock/lead.mock.json';
  constructor(private http: Http) {}


  getLeadLists(): Observable<string[]>{
    // return this.http.get('http://192.168.50.179:8000/api/v1/lead')
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=1')
      .map((res:Response) => res.json())
    }



  }
