import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Company } from '../models/index';
import { AppConfig, APP_CONFIG } from '../../app.config';

@Injectable()
export class CompanyService {
  constructor(@Inject(APP_CONFIG) private config: AppConfig, private http: Http){ }

  getCompanies():Observable<Company[]>{
    return this.http.get(this.config.apiEndPoint + 'company').map(res => res.json());
  }

}
