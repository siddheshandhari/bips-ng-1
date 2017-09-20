import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Note } from '../../models/note';

@Injectable()
export class NotesService{
  private selectedNote = new Subject<Note>();

  selectedNote$ = this.selectedNote.asObservable();

  setSelectedNote(note: Note){
    this.selectedNote.next(note)
  }
}
