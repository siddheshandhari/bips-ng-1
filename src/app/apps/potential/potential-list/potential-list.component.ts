import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Potential } from '../potential';
import { PotentialService } from '../potential.service';

@Component ({
    selector: 'potential-list',
    templateUrl: './potential-list.component.html',
    styleUrls:['./potential-list.component.css']
})

export class PotentialListComponent implements OnInit{

    @Input() potentiallist: Potential[];
    @Input() selectedPotential: Potential;
    @Output() onPotentialSelected: EventEmitter<Potential> = new EventEmitter<Potential>();

    constructor(private potentialService: PotentialService){}
    ngOnInit(){ }



    selectPotential(potential:Potential):void{
           
            this.onPotentialSelected.emit(potential)
    }

    deletePotential(potential){

            this.potentialService.deletePotential(potential.id).subscribe(
            res => {this.potentiallist.splice(this.potentiallist.indexOf(potential), 1);
                // this.selectedPotential = this.potentiallist[0];
            }
          
        );

    }

}