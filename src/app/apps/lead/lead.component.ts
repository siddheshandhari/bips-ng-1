import { Component , OnInit, Input } from '@angular/core';
import { LeadService } from './lead.service';
import { Lead } from './lead';



@Component({
    selector: 'lead',
    templateUrl: 'lead.component.html',
    styleUrls: ['lead.component.css'],

})

export class LeadComponent implements OnInit {
  @Input() searchlist:Lead[]=[];
  @Input() isSearching:Boolean;
  
  modalOpen: boolean =false;
  addLeadValue: boolean = false;
  // isSearch: boolean = false;

  constructor(private leadService: LeadService ){}
  ngOnInit (){}

  // searchLead(value:string):void{

  //   this.leadService.searchLead(value)
  //     .subscribe(
  //       searchlist => {
  //       this.searchlist = searchlist;
  //       console.log(searchlist);
  //     })
       

  //   this.isSearch = true;
  //   console.log(value);

  // }

  addLead(){
      this.addLeadValue = true;
  }

  openModal(){
    this.modalOpen = true;
  }

  closeModal(){
    this.modalOpen = false;
  }

  // goLeadlist(){
  //   this.addLeadValue = false;
  //   this.isSearch = false;
  // }

}
