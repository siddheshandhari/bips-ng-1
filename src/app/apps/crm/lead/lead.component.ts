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

   delete_lead(e){
       console.log(e);
   }

   selectLead = [];

   pushlead(value){
        if ((<HTMLInputElement>document.getElementById(value)).checked) {
            this.selectLead.push(value);
            console.log(this.selectLead);
        } else {
            let indexx = this.selectLead.indexOf(value);
            this.selectLead.splice(indexx, 1);
            console.log(this.selectLead);
        }


   }



    // getLeadList(){
    //     this.leadService.getLeadList()
    //     .subscribe(
    //         datas =>{ this.results = datas['results'];
    //         console.log(datas);
    //         })
    // }



}
