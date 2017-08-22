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

    ngOnInit():void{
          
       
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
    public results:string[];
   

    getLeadList(){
        this.leadService.getLeadList()
        .subscribe(
            datas =>{ this.results = datas['results'];
            console.log(datas);
            })
    }

  

}
