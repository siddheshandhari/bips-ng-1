import { Component, OnInit, Output,Input, EventEmitter,ElementRef,HostBinding,Pipe, PipeTransform  } from '@angular/core';
import { LeadService } from '../lead.service';
import { Lead } from '../lead';
import { LeadSearchService } from './leadsearch.service';


@Component({
    selector: 'lead-list',
    templateUrl:'./lead-list.component.html',
    styleUrls: ['./lead-list.component.css'],
    
})

// @Pipe({
//   name: 'sortBy'
// })
// export class SortByPipe implements PipeTransform {
//   transform(arr: Array<any>, prop: any, reverse: boolean = false): any {
//     if (arr === undefined) return
//     const m = reverse ? -1 : 1
//     return arr.sort((a: any, b: any): number => {
//       const x = a[prop]
//       const y = b[prop]
//       return (x === y) ? 0 : (x < y) ? -1*m : 1*m
//     })
//   }
// }


export class LeadListComponent implements OnInit{
    // @Output() editRequest = new EventEmitter<Lead>();
    @Output() selectedLead : Lead;
    // isEditing : Boolean = false;
    @Output() contacts :any[] =[];
    isSearching :Boolean=false;
    leadlist : Lead[] = [];
    searchlist:Lead[]= [];
    // selectedLead : Lead;
    // editlead= false;

//   private editMode: boolean = false;
//   private actionPanelIsOpen: boolean = false;

    constructor(public leadService:LeadService,
                private el: ElementRef,
                private leadSearchService: LeadSearchService){};

    ngOnInit():void{
        this.getLeadlist();
        this.leadService.getLeadlist().subscribe(
                res => {
                    this.leadlist = res;
                    this.selectedLead = this.leadlist[0];
                }
            );
    }

    searchLead(value){
        console.log(value);
        this.leadSearchService.searchLead(value)
      .subscribe(res => {
        this.searchlist = res;
      })

      console.log(this.searchlist);
      this.isSearching = true;
      console.log(this.isSearching);
  }

     allLeadList(){
       this.isSearching = false;
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
        this.contacts = lead.company.contacts;

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
             if(this.selectedLead === lead){this.selectedLead = null};
                this.selectedLead = this.leadlist[0];
         });
         this.leadService.deleteLead(lead.id)
         .subscribe(()=>{
             this.searchlist = this.searchlist.filter (l => l !== lead);
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
