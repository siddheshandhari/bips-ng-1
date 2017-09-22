import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Note } from '../../core/models/index';
import { AppConfig, APP_CONFIG } from '../../app.config';

@Injectable()
export class NotesService{
  constructor(@Inject(APP_CONFIG) private config: AppConfig, public http: Http) {}

  getNoteList(): Observable<Note[]>{
    return this.http.get(this.config.apiEndPoint + 'note')
    .map((res:Response) => {
      return res.json();
    })
    .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  deleteNote(id): Observable<any> {
    return this.http.delete(this.config.apiEndPoint + 'note/' + id)
    .map((res:Response) => {
      return res.json();
    })
  }

  addNote(note): Observable<any> {
    return this.http.post(this.config.apiEndPoint + 'note', JSON.stringify(note));
  }

}
