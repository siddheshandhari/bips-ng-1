import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../../models/note';

@Component({
  selector: 'note-list',
  templateUrl: 'note-list.component.html',
  styleUrls: ['note-list.component.css']
})

export class NoteListComponent{

  @Input() noteList: Array<Note>;
  @Output() onNoteSelected: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() onNoteDeleted: EventEmitter<Note> = new EventEmitter<Note>();
  selectNote(note: Note): void{
    this.onNoteSelected.emit(note);
  }

  deleteNote(note: Note): void{
    this.onNoteDeleted.emit(note);
  }
}