import { Component } from '@angular/core';

@Component({
  selector: 'notes',
  templateUrl: 'notes.component.html',
  styleUrls: ['notes.component.css']
})

export class NotesComponent {
  modalOpen: boolean = false;

  openModal(){
    this.modalOpen = true;
  }
  closeModal(){
    this.modalOpen = false;
  }
}
