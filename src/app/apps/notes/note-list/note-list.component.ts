import { Component, OnInit } from '@angular/core';
import { NoteListService } from './note-list.service';
import { Note } from '../../../models/note';

@Component({
  selector: 'note-list',
  templateUrl: 'note-list.component.html',
  styleUrls: ['note-list.component.css']
})

export class NoteListComponent implements OnInit {

  public noteList: Array<Note>;
  constructor(public noteListService: NoteListService){}
  ngOnInit(){
    this.noteListService.getNoteList().subscribe(
      res => {
        console.log(res);
        this.noteList = res;
      }
    )
  }
}
