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
              console.log(this.leadlists)
          })


    }

    public add_lead_value = false;

    public lead_list_value = true;

    add_lead(){
        this.add_lead_value = true;
        console.log('oh');
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
   public box_selected = false;
   selectLead = [];

   pushlead(value){
        if ((<HTMLInputElement>document.getElementById(value)).checked) {
            this.selectLead.push(value);
            this.box_selected = true;
            console.log(this.selectLead);
   
        } 
         else  {
            let indexx = this.selectLead.indexOf(value);
            this.selectLead.splice(indexx, 1);
            console.log(this.selectLead);

                if(this.selectLead.length=0){

                        this.box_selected= false;
                     }

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
