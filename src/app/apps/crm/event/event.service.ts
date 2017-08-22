import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventService {
  constructor(private http: Http) {}

  getEventList(): Observable<string[]>{
    return this.http.get('http://192.168.50.25/orcasmart/bips/api/event/')
      .map((res:Response) => res.json())
    }
  }
