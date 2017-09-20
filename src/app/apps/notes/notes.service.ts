import { Injectable } from '@angular/core';
import { Note } from '../../models/note';

@Injectable()
export class NotesService{
  public selectedNote: Note;
  public setSelectedNote(note: Note){
    this.selectedNote = note;
  }
}
