import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Product } from './product';

@Injectable()
export class ShowcaseService {
    private heroesUrl = 'http://127.0.0.1:8000/api/v1/product';  // URL to web api
    
  constructor(private http: Http) {}
  getHeroes(): Promise<Product[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Product[])
               .catch(this.handleError);
  }
   
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  getLeadlist(): Observable<Product[]>{
    return this.http.get('http://127.0.0.1:8000/api/v1/lead')
    // return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=1')
      .map((res:Response) => res.json())
    }

  getLead(id: number): Observable<Product>{
      return this.http.get('http://127.0.0.1:8000/api/v1/lead/'+id)
      .map((res:Response) =>res.json())

  }

  deleteLead(id:number): Observable<void> {
    return this.http.delete('http://127.0.0.1:8000/api/v1/lead/'+id)
    .map((res:Response) => res.json())

  }

  save(lead: Product): Observable<Product>{
      return this.http.put('http://127.0.0.1:8000/api/v1/lead/'+lead.id, lead)
      .map((res:Response) =>res.json())

  }

  createLead(value): Observable<Product>{
    return this.http.post('http://127.0.0.1:8000/api/v1/lead',value)
    .map((res:Response) => res.json())
  }

  }
