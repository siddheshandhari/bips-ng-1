import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'card-body',
  templateUrl: 'card-body.component.html',
  styleUrls: ['card-body.component.css']
})

export class CardBodyComponent{
  name: string = "Jack"
  position: string = "CTO"
  @HostBinding('class.card-body-open') isOpen: boolean = false;

  openBody(){
    this.isOpen = true;
  }

  closeBody(){
    this.isOpen = false;
  }
};
