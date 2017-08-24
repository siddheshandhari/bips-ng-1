import { Component } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
})

export class CardComponent{
  private cardHeaderIsOpen: boolean = false;
  private cardBodyIsOpen: boolean = false;

  openHeader(){
    this.cardHeaderIsOpen = true;
  }

  closeHeader(){
    this.cardHeaderIsOpen = false;
  }

  openBody(){
    this.cardBodyIsOpen = true;
  }

  closeBody(){
    this.cardBodyIsOpen = false;
  }

}
