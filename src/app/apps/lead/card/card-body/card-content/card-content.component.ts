import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Lead } from "../../../lead";
import { Contact } from '../../../../../core/models/contact';
import { LeadService } from './../../../lead.service';



@Component({
    selector: 'card-content',
    templateUrl: 'card-content.component.html',
    styleUrls: ['card-content.component.css']
})

export class CardContentComponent implements OnInit{
    @Output() deleteEvent = new EventEmitter<Lead>();
    @Input() lead = [];
    @Input() selectedLead= [];
    @Input() contacts: Contact[] =[];

    isEditing :Boolean = false;

    constructor(private leadService:LeadService){}
    ngOnInit(){}

    openCall(){
        
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

    callOwner(){
        console.log("callowner");
        alert("calling, pleasing waiting!")
    }

}