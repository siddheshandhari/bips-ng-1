import { Component, OnInit } from '@angular/core';
import { LeadService } from '../lead.service';
import { Lead } from '../lead';

@Component({
    selector: 'lead-list',
    templateUrl:'./lead-list.component.html',
    styleUrls: ['./lead-list.component.css'],
})

export class LeadListComponent implements OnInit{

    leadlist : Lead[] = [];
    selectedLead : Lead;
   
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

//get information from database
    ngOnInit():void{
        this.getLeadlist();
    }


    public isediting = false;

// edit the lead
    editLead(lead:Lead): void{

            this.selectedLead = lead;
            console.log(this.selectedLead);
            this.isediting = true;
    }


    cancel_lead(){
      
        this.getLeadlist()
    }
    
    save_lead(){
       
         this.getLeadlist()
    }

}