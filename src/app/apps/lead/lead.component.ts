import { Component, OnInit  } from '@angular/core';

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
   
    // companies: Array<object> = this.leadlist.map(function(lead){
    //     return {
             
    //   name: lead.company.name,
    //   address: lead.company.billing_address.street,
    //   industry: lead.company.industry,

    //   contacts:  [
    //     {
    //       phone: lead.company.contacts.phone,
    //       email: lead.company.contacts.email,
    //       skype: lead.company.contacts.skype,
    //       contactName: lead.company.contacts.first_name,
    //       position: lead.company.contacts
    //     }
    //   ]
    
    // }
    // })

      companies: Array<object> = [
    {
      name: "Glopak",
      address: "Hicksville",
      industry: "technology",
      contacts:  [
        {
          phone: "",
          email: "",
          skype: "",
          contactName: "Jack",
          position: "CTO"
        }
      ]
    },
    {
      name: "OrcaSmart",
      address: "35 Engel St",
      industry: "technology",
      contacts:  [
        {
          phone: "",
          email: "",
          skype: "",
          name: "Keni",
          position: "CEO"
        },
        {
          phone: "",
          email: "",
          skype: "",
          name: "wang",
          position: "Employee"
        }
      ]

    }

  ]


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

    ngOnInit():void{
        this.getLeadlist();
    }

    public masonry = false;
    public add_lead_value = false;
    public lead_list_value = true;
    public isediting = false;

    editLead(lead:Lead): void{
   
            this.selectedLead = lead;
            console.log(this.selectedLead);
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

   


}

 