import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
  host: {
    '(document: click)': 'closeActionPanel($event)'
  }
})

export class CardComponent{
  @Input() headerColor: string;
  private cardHeaderIsOpen: boolean = false;
  private cardBodyIsOpen: boolean = false;
  private actionPanelIsOpen: boolean = false;

  constructor(private el: ElementRef){
    console.log(this.headerColor);
  }

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

  openActionPanel(){
    this.actionPanelIsOpen = true;
  }

  closeActionPanel(){
    if(!this.el.nativeElement.contains(event.target) && this.actionPanelIsOpen){
      this.actionPanelIsOpen = false;
    }
  }

}