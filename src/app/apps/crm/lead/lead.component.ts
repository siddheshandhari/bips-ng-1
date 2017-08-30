import { Component, Input } from '@angular/core';
import { LeadService } from './lead.service';
// import { Company } from './lead.company';

 export class Leadlist{
        name:string;
        id: number 
    }
 const LWADLISTS : Leadlist[]=[
     
 ]

@Component({
    selector: 'lead',
    templateUrl: 'lead.component.html',
    styleUrls: ['lead.component.css'],

})

export class LeadComponent {

    leadlists: any =[];
    companys: Array<object> = [
    //     new Company('assets/imgs/card-logo/orcasmart.png', 'Glopak', '35 Engel St', 'technology'),
    //     new Company('assets/imgs/card-logo/orcasmart.png', 'orca', 'Hicksville', 'technology')
    // ];
        {   
            logo:"assets/imgs/card-logo/orcasmart.png",
            name: "Glopak",
            address: "35 Engel St",
            industry: "technology"
        },
        {   
            logo:"assets/imgs/card-logo/orcasmart.png",
            name: "orca",
            address: "35 Engel St",
            industry: "technology"
        }    
    ];    
    

    constructor(public leadService:LeadService){

    }
// init data from database
    ngOnInit(): void{
          this.leadService.getLeadLists()
          .subscribe(resLeadList =>{
              this.leadlists = resLeadList;
              console.log(this.leadlists)
          })


    }

    public masonry = false;
    public add_lead_value = false;
    public lead_list_value = true;
    
//toggle to change style
    toggleMasonry(){
            if (this.masonry == false){
                this.masonry = true;
            }else{
                this.masonry = false;
            }
    }
    selectedLead = Leadlist;

    editLead(leadlist){
            console.log(leadlist);
            this.selectedLead = leadlist;
            console.log(this.selectedLead.name);
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
       this.leadlists.splice(value, 1)

   }



}
