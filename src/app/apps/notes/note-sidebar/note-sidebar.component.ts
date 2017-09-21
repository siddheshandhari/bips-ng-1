import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../../core/models/note';

@Component({
  selector: 'note-sidebar',
  templateUrl: 'note-sidebar.component.html',
  styleUrls: ['note-sidebar.component.css']
})

export class NoteSidebarComponent{
  @Input() selectedNote: Note;
  @Output() onNoteDeleted: EventEmitter<Note> = new EventEmitter<Note>();

  deleteNote(note: Note): void{
    this.onNoteDeleted.emit(note);
  }

}
