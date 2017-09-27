import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Contact } from '../../../../../core/models/Contact';
import { Potential } from '../../../potential';

@Component({
    selector: 'card-content',
    templateUrl: 'card-content.component.html',
    styleUrls: ['card-content.component.css']
})

export class CardContentComponent implements OnInit{
    @Input() potential:Potential;
    @Output() onPotentialDelete: EventEmitter<Potential> = new EventEmitter<Potential>();

    constructor(){}
    ngOnInit(){}

    showPotential(){
        console.log(this.potential)
    }

    deletePotential(potential:Potential){
            console.log('card-delete');
            this.onPotentialDelete.emit(potential);
            console.log(this.potential.id)
    }


}