import { Component } from '@angular/core';
import { PotentialService } from './potential.service';

@Component({
  selector: 'potential',
  templateUrl: './potential.component.html',
  styleUrls: ['potential.component.css']
})

export class PotentialComponent{
  constructor(public potentialService: PotentialService){
    this.getPotentialList();
  }

  getPotentialList(){
    this.potentialService.getPotentialList()
      .subscribe(
        res => console.log(res)
      )
  }
}
