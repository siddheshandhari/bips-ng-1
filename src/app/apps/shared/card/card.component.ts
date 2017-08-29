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
  
  company = {
    logoUrl:"assets/imgs/card-logo/orcasmart.png",
    name: "Glopak",
    address: "35 Engel St",
    industry: "technology"
  };
  
  private cardHeaderIsOpen: boolean = false;
  private cardBodyIsOpen: boolean = false;
  private actionPanelIsOpen: boolean = false;
  public arrayOfKeys;

  constructor(private el: ElementRef){
    console.log(this.headerColor);
    this.arrayOfKeys = Object.keys(this.company);
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
