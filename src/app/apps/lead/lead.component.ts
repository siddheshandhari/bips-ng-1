import { Component , OnInit, Input } from '@angular/core';
import { LeadService } from './lead.service';

import { Lead } from './lead';



@Component({
    selector: 'lead',
    templateUrl: 'lead.component.html',
    styleUrls: ['lead.component.css'],

})

export class LeadComponent implements OnInit {
  searchlist:Lead[]=[];

  modalOpen: boolean =false;
  addLeadValue: boolean = false;

  constructor( ){}
  ngOnInit (){}


  addLead(){
      this.addLeadValue = true;
  }

  openModal(){
    this.modalOpen = true;
  }

  closeModal(){
    this.modalOpen = false;
  }

}
