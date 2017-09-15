import { Component,HostBinding } from '@angular/core';

@Component ({
    selector: 'note',
    templateUrl: 'note.component.html',
    styleUrls:['note.component.css']
})

export class NoteComponent {
    constructor(){}
      @HostBinding('class.note-open') isOpen: boolean = false;

     openHeader(){
    this.isOpen = true;
  }

  closeHeader(){
    this.isOpen = false;
  }
}