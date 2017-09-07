import { Component } from '@angular/core';

@Component({
    selector: 'lead',
    templateUrl: 'lead.component.html',
    styleUrls: ['lead.component.css'],

})

export class LeadComponent {
  modalOpen: boolean = true;
  add_lead_value: boolean = false;

  addLead(){
      this.add_lead_value = true;
  }

  openModal(){
    this.modalOpen = true;
  }

  closeModal(){
    this.modalOpen = false;
  }

  goLeadlist(){
    this.add_lead_value = false;
  }

}
