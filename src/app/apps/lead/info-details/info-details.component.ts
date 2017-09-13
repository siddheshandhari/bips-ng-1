import { Component,ElementRef, Input,Output, OnInit, EventEmitter,NgModule } from '@angular/core';
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
     isEditing: Boolean = false;
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

    onEdit(lead){
        this.isEditing = true;
    }

    onCancel(lead){
        this.isEditing = false;
    }

    onSave(lead:Lead){
    this.isEditing = false;
    console.log(lead);
    this.leadService.save(lead)
       .subscribe(
                    res =>{
                        console.log(JSON.stringify(res));
                        },
                    err =>{
                        console.log("error occored");
                    }
                 )
    }
  
}
