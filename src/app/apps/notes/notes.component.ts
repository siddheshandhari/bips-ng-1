import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from '../../models/note';

@Component({
  selector: 'notes',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css']
})

export class NotesComponent implements OnInit {
  modalOpen: boolean = false;
  noteList: Array<Note>;
  selectedNote: Note;

  constructor(private notesService: NotesService){}

  ngOnInit(){
    this.notesService.getNoteList().subscribe(
      res => {
        this.noteList = res;
        this.selectedNote = this.noteList[0];
      }
    )
  }

  openModal(){
    this.modalOpen = true;
  }

  closeModal(){
    this.modalOpen = false;
  }

  setSelectedNote(note){
    this.selectedNote = note;
  }


}
