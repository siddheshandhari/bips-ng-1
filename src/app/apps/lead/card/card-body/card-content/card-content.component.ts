import { Component, OnInit, Input,  } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Lead } from "../../../lead";



@Component({
    selector: 'card-content',
    templateUrl: 'card-content.component.html',
    styleUrls: ['card-content.component.css']
})

export class CardContentComponent implements OnInit{
    @Input() lead = [];
    @Input() selectedLead= []

    constructor(){}
    ngOnInit(){}

    openCall(){
        
    }

}