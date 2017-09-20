import { Component } from '@angular/core';
import { Note } from '../../../models/note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'note-sidebar',
  templateUrl: 'note-sidebar.component.html',
  styleUrls: ['note-sidebar.component.css']
})

export class NoteSidebarComponent{
  private selectedNote: Note;
  constructor(private notesService: NotesService){
    this.notesService.selectedNote$.subscribe(
      note => {
        this.selectedNote = note;
      });
  }

  deleteNote(note){
    this.notesService.deleteNote(note.id).subscribe();
  }

}
