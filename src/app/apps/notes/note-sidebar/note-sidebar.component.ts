import { Component, Input } from '@angular/core';
import { Note } from '../../../models/note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'note-sidebar',
  templateUrl: 'note-sidebar.component.html',
  styleUrls: ['note-sidebar.component.css']
})

export class NoteSidebarComponent{
  @Input() selectedNote: Note;
  constructor(private notesService: NotesService){

  }

  deleteNote(note){
    this.notesService.deleteNote(note.id).subscribe();
  }

}
