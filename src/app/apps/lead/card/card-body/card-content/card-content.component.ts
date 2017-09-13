import { Component, OnInit, Input } from '@angular/core';
import { Lead } from "../../../lead";



@Component({
    selector: 'card-content',
    templateUrl: 'card-content.component.html',
    styleUrls: ['card-content.component.css']
})

export class CardContentComponent implements OnInit{
    @Input() lead = [];

    constructor(){}
    ngOnInit(){}

}