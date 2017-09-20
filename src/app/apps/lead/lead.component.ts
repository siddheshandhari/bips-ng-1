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
  // isSearch: boolean = false;

  constructor( ){}
  ngOnInit (){}

  // searchLead(value){
  //       console.log(value);
  //       this.leadSearchService.searchLead(value)
  //     .subscribe(res => {
  //       this.searchlist = res;
  //     })

  //     console.log(this.searchlist);
  //     this.isSearching = true;
  //     console.log(this.isSearching);
  // }
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
