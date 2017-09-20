import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Note } from '../../models/note';

@Injectable()
export class NotesService{
  private selectedNote = new Subject<Note>();
  selectedNote$ = this.selectedNote.asObservable();

  constructor(public http: Http) {}

  deleteNote(id){
    return this.http.delete('http://127.0.0.1:8000/api/v1/note/' + id)
    .map((res:Response) => {
      return res.json();
    })
  }

  setSelectedNote(note: Note){
    this.selectedNote.next(note)
  }


}
