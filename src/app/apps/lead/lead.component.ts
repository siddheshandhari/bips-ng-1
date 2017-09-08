import { Component , OnInit } from '@angular/core';
import { LeadService } from './lead.service';
import { Lead } from './lead';



@Component({
    selector: 'lead',
    templateUrl: 'lead.component.html',
    styleUrls: ['lead.component.css'],

})

export class LeadComponent implements OnInit {
  private searchlist;
  modalOpen: boolean = true;
  add_lead_value: boolean = false;
  isSearch: boolean = false;

  constructor(private leadService: LeadService ){}
  ngOnInit (){}

  searchLead(value:string):void{

    this.leadService.searchLead(value)
      .subscribe(
        searchlist => {
        this.searchlist = searchlist;
        console.log(searchlist);
      })
       

    this.isSearch = true;
    console.log(value);

  }

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
    this.isSearch = false;
  }

}
