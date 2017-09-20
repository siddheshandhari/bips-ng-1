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

  selectNote(note){
    this.selectedNote = note;
  }

  deleteNote(note){
    this.notesService.deleteNote(note.id).subscribe(
      res => {
        this.noteList.splice(this.noteList.indexOf(note), 1);
        this.selectedNote = this.noteList[0];
      }
    );
  }


}
