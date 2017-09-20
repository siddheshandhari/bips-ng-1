import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Note } from '../../models/note';

@Injectable()
export class NotesService{
  constructor(public http: Http) {}

  getNoteList(): Observable<Note[]>{
    return this.http.get('http://127.0.0.1:8000/api/v1/note')
    .map((res:Response) => {
      return res.json();
    })
    .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  deleteNote(id){
    return this.http.delete('http://127.0.0.1:8000/api/v1/note/' + id)
    .map((res:Response) => {
      return res.json();
    })
  }

}
