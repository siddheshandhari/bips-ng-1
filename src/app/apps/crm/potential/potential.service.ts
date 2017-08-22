import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PotentialService {
  constructor(private http: Http) {}

  getPotentialList(): Observable<string[]>{
    return this.http.get('http://192.168.50.25/orcasmart/bips/api/potential/')
      .map((res:Response) => res.json())
    }
  }