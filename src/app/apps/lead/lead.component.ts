import { Component, OnInit, Output  } from '@angular/core';

import { LeadService } from './lead.service';
import { Lead } from './lead';


@Component({
    selector: 'lead',
    templateUrl: 'lead.component.html',
    styleUrls: ['lead.component.css'],

})

export class LeadComponent implements OnInit {

    leadlist : Lead[] = [];
    selectedLead : Lead;
    add_lead_value = false;
    modalOpen: boolean = true;

    constructor(public leadService:LeadService){}

// get lead infomation
    getLeadlist():void{
          this.leadService.getLeadlist()
          .subscribe(leadlist => this.leadlist = leadlist)
    }

// delete lead
    deleteLead(lead:Lead): void{

        this.leadService.deleteLead(lead.id)
         .subscribe(()=>{
             this.leadlist = this.leadlist.filter (l => l !== lead);
             if(this.selectedLead === lead){this.selectedLead = null}
         })

   }

    deleteCard(id: number){
    this.leadService.deleteLead(id);
    this.leadlist = this.leadlist.filter(lead => {
      return lead.id !== id;
    })
  }

    ngOnInit():void{
        this.getLeadlist();
    }



    editLead(lead:Lead): void{

            this.selectedLead = lead;
            console.log(this.selectedLead);
    }

// jump to add lead page

// go back to lead page
    cancel_lead(){

        this.getLeadlist()
    }
// submit form
    save_lead(){
        // this.add_lead_value = false;
         this.getLeadlist()
    }

    openModal(){
      this.modalOpen = true;
    }

    closeModal(){
      this.modalOpen = false;
    }

}
