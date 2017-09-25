import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Potential } from './potential';

@Injectable()
export class PotentialService {

  constructor(private http: Http) {}


  getPotentiallist(): Observable<Potential[]>{
    return this.http.get('http://127.0.0.0:8000/api/v1/potential')
      .map((res:Response) => res.json())
    }

  getPotential(id: number): Observable<Potential>{
      return this.http.get('http://192.168.50.25/api/v1/potential/'+id)
      .map((res:Response) =>res.json())

  }

  deletePotential(id:number): Observable<void> {
    return this.http.delete('http://192.168.50.25/api/v1/potential/'+id)
    .map((res:Response) => res.json())

  }


  save(potential: Potential): Observable<Potential>{
      return this.http.put('http://192.168.50.25/api/v1/potential'+potential.id, potential)
      .map((res:Response) =>res.json())

  }

  createPotential(value): Observable<Potential>{
    return this.http.post('http://192.168.50.25/api/v1/potential',value)
    .map((res:Response) => res.json())
  }

  }