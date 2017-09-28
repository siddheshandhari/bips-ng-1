import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../../core/models/note';

@Component({
  selector: 'note-list',
  templateUrl: 'note-list.component.html',
  styleUrls: ['note-list.component.css']
})

export class NoteListComponent{

  selectedNote: Note;
  @Input() noteList: Array<Note>;
  @Output() onNoteSelected: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() onNoteDeleted: EventEmitter<Note> = new EventEmitter<Note>();
  selectNote(note: Note): void{
    this.onNoteSelected.emit(note);
    this.selectedNote = note;
  }

  deleteNote(note: Note): void{
    this.onNoteDeleted.emit(note);
  }
}
