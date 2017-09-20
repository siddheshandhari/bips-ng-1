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
deletePotential(potential:Potential): void{

this.potentialService.deletePotential(potential.id)
 .subscribe(()=>{
     this.potentiallist = this.potentiallist.filter (l => l !== potential);
     if(this.selectedPotential === potential){this.selectedPotential = null}
 })

}

ngOnInit():void{
this.getPotentiallist();
}

public masonry = false;
public add_potential_value = false;
public potential_list_value = true;
public isediting = false;

editPotential(potential:Potential): void{

    this.selectedPotential = potential;
    console.log(this.selectedPotential);
    this.isediting = true;
}

// jump to add potential page
add_potential(){
this.add_potential_value = true;
}
// go back to potential page
cancel_potential(){
this.add_potential_value = false;
this.getPotentiallist()
}
// submit form
save_potential(){
this.add_potential_value = false;
 this.getPotentiallist()
}

}
