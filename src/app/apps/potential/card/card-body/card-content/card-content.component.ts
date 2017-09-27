import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Contact } from '../../../../../core/models/Contact';

@Component({
    selector: 'card-content',
    templateUrl: 'card-content.component.html',
    styleUrls: ['card-content.component.css']
})

export class CardContentComponent implements OnInit{
  

    constructor(){}
    ngOnInit(){}

    openCall(){
        
    }
    onDelete(){
      
        console.log();
        console.log("234");
    }

     onEdit(){
       
    }

    onCancel(){
       
    }

    onSave(){
  
    console.log();
  
    }

    callOwner(){
        console.log("callowner");
        alert("calling, pleasing waiting!")
    }

}