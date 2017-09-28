import { Component, OnInit, Output,Input, EventEmitter,ElementRef,HostBinding,Pipe, PipeTransform  } from '@angular/core';
import { LeadService } from '../lead.service';
import { Lead } from '../lead';
import { LeadSearchService } from './leadsearch.service';


@Component({
    selector: 'lead-list',
    templateUrl:'./lead-list.component.html',
    styleUrls: ['./lead-list.component.css'],
    
})



export class LeadListComponent implements OnInit{
    
    @Output() selectedLead : Lead;
    @Output() contacts :any[] =[];
    public value='';
    isSearching :Boolean=false;
    leadlist : Lead[] = [];
    searchlist:Lead[]= [];


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
        if(!value){
            alert("Should not be Empty!")
            return;
            // this.getLeadlist();
            // this.isSearching = false;
            // console.log("2");
            // alert("Should not be Empty!")
        }else{
            
            this.leadSearchService.searchLead(value).subscribe(res => {
            this.searchlist = res;
            this.isSearching = true;
        })

            // if(this.searchlist.length>0){
               
                

            // }else{
            //     alert("No Match Information!");
            //     this.isSearching = false;
            // }
        
        
        }

  }

//     searchLead(value){
//         console.log(value);
//         this.leadSearchService.searchLead(value)
//       .subscribe(res => {
//         this.searchlist = res;
//       })

//       console.log(this.searchlist);
//       this.isSearching = true;
//       console.log(this.isSearching);
//   }

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

}
