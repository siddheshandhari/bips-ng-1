import { Component,ElementRef, Input,Output, OnInit, EventEmitter } from '@angular/core';
import { LeadService } from '../lead.service';
import { Lead } from '../lead';

@Component({
    selector: 'info-details',
    templateUrl: 'info-details.component.html',
    styleUrls:['info-details.component.css']
})

export class InfoDetailsComponent{
     @Input() lead:Lead;
     @Output() deleteEvent = new EventEmitter<Lead>();
     leadlist : Lead[]= [];

    constructor(private el: ElementRef, private leadService: LeadService){}



    // deleteLead(lead:Lead){
    //     console.log(lead);
    //     this.leadService.deleteLead(this.lead.id)
    //      .subscribe(()=>{
    //          this.leadlist = this.leadlist.filter(lead =>{
    //              return lead.id !==this.lead.id
    //          })
    //      })

    // }



    detailClick(lead:Lead){
        console.log(lead);
        console.log('ss');
    }

    onDelete(lead){
        this.deleteEvent.emit(lead);
        console.log(lead);
        console.log("234");
    }


}
