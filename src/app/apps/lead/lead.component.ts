import { Component, OnInit  } from '@angular/core';
// import { Router } from './angualr/router';

import { LeadService } from './lead.service';
import { Lead } from './lead';


//  export class Leadlist{
//         name:string;
//         id: number 
//     }


@Component({
    selector: 'lead',
    templateUrl: 'lead.component.html',
    styleUrls: ['lead.component.css'],

})

export class LeadComponent implements OnInit {

    leadlist : Lead[] = [];
    selectedLead : Lead;

    constructor(public leadService:LeadService){}


    getLeadlist():void{
          this.leadService.getLeadlist()
          .subscribe(leadlist => this.leadlist = leadlist
          )


    }

    ngOnInit():void{
        this.getLeadlist();
        console.log();
    }

    public masonry = false;
    public add_lead_value = false;
    public lead_list_value = true;

    editLead(lead:Lead): void{

            this.selectedLead = lead;
            console.log(this.selectedLead.company.id);
    }

   
// jump to add lead page
    add_lead(){
        this.add_lead_value = true;
    }
// go back to lead page
    cancel_lead(){
        this.add_lead_value = false;
    }
// submit form
    save_lead(){
        this.add_lead_value = false;
    }

//delete one row
    deleteLead(value){
       console.log(value)
       this.leadlist.splice(value, 1)

   }



}
