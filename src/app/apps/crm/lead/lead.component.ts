import { Component } from '@angular/core';
import { LeadService } from './lead.service';

@Component({
    selector: 'lead',
    templateUrl: 'lead.component.html',
    styleUrls: ['lead.component.css'],

})

export class LeadComponent {
    constructor(public leadService:LeadService){
        this.getLeadList();
    }
    public add_lead_value = false;
    public lead_list_value = true;

    add_lead(){
        this.add_lead_value = true;
    }
   save_lead(){
       this.add_lead_value = false;
   }
   cancel_lead(){
       this.add_lead_value = false;

   }

    getLeadList(){
        this.leadService.getLeadList()
        .subscribe(
            res => console.log(res)
        )
    }

}
