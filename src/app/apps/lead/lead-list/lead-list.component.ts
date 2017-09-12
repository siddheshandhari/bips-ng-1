import { Component, OnInit, Output,Input, EventEmitter,ElementRef } from '@angular/core';
import { LeadService } from '../lead.service';
import { Lead } from '../lead';


@Component({
    selector: 'lead-list',
    templateUrl:'./lead-list.component.html',
    styleUrls: ['./lead-list.component.css'],
})

export class LeadListComponent implements OnInit{
    // @Output() editRequest = new EventEmitter<Lead>();
    @Output() selectedLead : Lead;
    // isEditing : Boolean = false;

    leadlist : Lead[] = [];
    // selectedLead : Lead;
    // editlead= false;

//      private editMode: boolean = false;
//   private actionPanelIsOpen: boolean = false;

    constructor(public leadService:LeadService,private el: ElementRef){};

     ngOnInit():void{
        this.getLeadlist();
    }


// get lead infomation
    getLeadlist():void{
      this.leadService.getLeadlist()
      .subscribe(res => {
        this.leadlist = res;
      })
    }

    selectedCard(lead: Lead):void{
        this.selectedLead = lead;
        console.log("selected-----")
        console.log( this.selectedLead);
        console.log("----")
       
    }

     deleteLead(lead:Lead):void{
        console.log("123");
        console.log(lead.id);
        this.leadService.deleteLead(lead.id)
         .subscribe(()=>{
             this.leadlist = this.leadlist.filter (l => l !== lead);
             if(this.selectedLead === lead){this.selectedLead = null}
         })
    
    }

// delete lead
//     deleteLead(lead:Lead): void{

//         this.leadService.deleteLead(lead.id)
//          .subscribe(()=>{
//              this.leadlist = this.leadlist.filter (l => l !== lead);
//              if(this.selectedLead === lead){this.selectedLead = null}
//          })


//    }

//     deleteCard(id: number){
//     this.leadService.deleteLead(id);
//     this.leadlist = this.leadlist.filter(account => {
//       return account.id !== id;
//     })
//   }

//    totallead = this.leadlist.length;

//get information from database
   
    // save(lead:Lead): void{
    //    event.preventDefault();
    //    console.log(JSON.stringify(lead));

    //    this.leadService.save(lead)
    //    .subscribe(
    //                 res =>{
    //                     console.log(JSON.stringify(res));
    //                     },
    //                 err =>{
    //                     console.log("error occored");
    //                 }
    //              )
    //    console.log(lead.company.name)
    //  this.isEditing= false;
    // }

 

// edit the lead
    // editLead(lead:Lead): void{

    //         this.selectedLead = lead;
    //         console.log(this.selectedLead);
    //         this.isEditing = true;
    // }

    // saveLead(lead:Lead): void{
    //         console.log(this.selectedLead);
    //         this.isEditing= false;

    // }

//     cancel(lead:Lead): void {
//         console.log(this.selectedLead);
//             this.isEditing= false;
//     }

//     openActionPanel(){
//     this.actionPanelIsOpen = true;
//   }

//   closeActionPanel(){
//     if(!this.el.nativeElement.contains(event.target) && this.actionPanelIsOpen){
//       this.actionPanelIsOpen = false;
//     }
//   }
}
