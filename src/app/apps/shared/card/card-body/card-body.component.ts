import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'card-body',
  templateUrl: 'card-body.component.html',
  styleUrls: ['card-body.component.css']
})

export class CardBodyComponent{
  
  @Input() contacts: Array<object>;
  @Input() owner: string;
  
  @HostBinding('class.card-body-open') isOpen: boolean = false;

  openBody(){
    this.isOpen = true;
  }

  closeBody(){
    this.isOpen = false;
  }
};
