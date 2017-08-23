import { Component } from '@angular/core';
import { LeadService } from './lead.service';


@Component({
    selector: 'lead',
    templateUrl: 'lead.component.html',
    styleUrls: ['lead.component.css'],

})

export class LeadComponent {

    leadlists: any =[];
    constructor(public leadService:LeadService){
    
    }

    ngOnInit():void{
          this.leadService.getLeadLists()
          .subscribe(resLeadList =>{
              this.leadlists = resLeadList;
              
          console.log(this.leadlists);
          })
          
       
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
   
   

    // getLeadList(){
    //     this.leadService.getLeadList()
    //     .subscribe(
    //         datas =>{ this.results = datas['results'];
    //         console.log(datas);
    //         })
    // }

  

}
