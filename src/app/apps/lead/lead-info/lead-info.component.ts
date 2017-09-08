import { Component, OnInit } from '@angular/core';
import { LeadService }  from '../lead.service';
import { Lead } from '../lead';

@Component({
    selector:'lead-info',
    templateUrl:'./lead-info.component.html',
    styleUrls:['./lead-info.component.css']
    
})

export class LeadInfoComponent implements OnInit {
    leadlist : Lead[] = [];
    public totallead: number;
    constructor(private leadService: LeadService){}

     ngOnInit(){ 
         this.leadService.getLeadlist()
          .subscribe((leadlist)=>{
              this.leadlist = leadlist;
              this.totallead = this.leadlist.length;
              console.log(this.leadlist)
          })

    }



  
}


