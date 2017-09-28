import { Component, OnInit } from '@angular/core';
import { PotentialService } from './potential.service';
import { Potential } from './potential';

@Component({
  selector: 'potential',
  templateUrl: 'potential.component.html',
  styleUrls: ['potential.component.css']
})
export class PotentialComponent implements OnInit {

  potentiallist : Potential[] = [];
  selectedPotential: Potential;

  constructor(public potentialService:PotentialService) { }

// get potential infomation
  getPotentiallist():void{

      this.potentialService.getPotentiallist()
      .subscribe(
        res => {
            this.potentiallist = res;
            // this.selectedPotential = this.potentiallist[0];
        });

  }

// delete potential
  ngOnInit():void{
      this.getPotentiallist();


  }

  selectPotential(potential){
      this.selectedPotential = potential;
      console.log(this.selectedPotential)
  }

}
