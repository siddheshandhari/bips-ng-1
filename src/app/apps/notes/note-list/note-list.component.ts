import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../../../models/note';

@Component({
  selector: 'note-list',
  templateUrl: 'note-list.component.html',
  styleUrls: ['note-list.component.css']
})

export class NoteListComponent{

  @Input() noteList: Array<Note>;
  @Output() onNoteSelected: EventEmitter<Note> = new EventEmitter<Note>();
  constructor(private notesService: NotesService){}

  selectNote(note): void{
    this.onNoteSelected.emit(note);
  }
}
