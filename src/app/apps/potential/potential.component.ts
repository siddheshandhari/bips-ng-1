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
  selectedPotential : Potential;

  constructor(public potentialService:PotentialService) { }

// get potential infomation
getPotentiallist():void{
  this.potentialService.getPotentiallist()
  .subscribe(potentiallist => this.potentiallist = potentiallist)
}

// delete potential

ngOnInit():void{
this.getPotentiallist();
}

}
