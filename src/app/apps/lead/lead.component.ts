import { Component } from '@angular/core';

@Component({
    selector: 'lead',
    templateUrl: 'lead.component.html',
    styleUrls: ['lead.component.css'],

})

export class LeadComponent {
  modalOpen: boolean = true;

  openModal(){
    this.modalOpen = true;
  }

  closeModal(){
    this.modalOpen = false;
  }
}
