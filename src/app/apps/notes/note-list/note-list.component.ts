import { Component, OnInit } from '@angular/core';
import { NoteListService } from './note-list.service';
import { NotesService } from '../notes.service';
import { Note } from '../../../models/note';

@Component({
  selector: 'note-list',
  templateUrl: 'note-list.component.html',
  styleUrls: ['note-list.component.css']
})

export class NoteListComponent implements OnInit {

  public noteList: Array<Note>;
  constructor(private noteListService: NoteListService, private notesService: NotesService){}

  ngOnInit(){
    this.noteListService.getNoteList().subscribe(
      res => {
        this.noteList = res;
        this.notesService.setSelectedNote(this.noteList[0]);
      }
    )
  }

  selectNote(note){
    this.notesService.setSelectedNote(note);
  }
}
