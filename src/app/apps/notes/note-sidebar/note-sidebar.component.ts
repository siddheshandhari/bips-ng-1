import { Component, OnInit } from '@angular/core';
import { Note } from '../../../models/note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'note-sidebar',
  templateUrl: 'note-sidebar.component.html',
  styleUrls: ['note-sidebar.component.css']
})

export class NoteSidebarComponent implements OnInit{
  private selectedNote: Note;
  constructor(private notesService: NotesService){}

  ngOnInit(){
    this.selectedNote = this.notesService.selectedNote;
    console.log(this.selectedNote);
  }

}
