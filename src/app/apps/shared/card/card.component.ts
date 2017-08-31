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
  @Input() company: object;
  // @Input() logo: string;
  // @Input() name: string;
  // @Input() industry: string;
  // @Input() address: string;
  @Input() companys: Array<object>;

  private cardHeaderIsOpen: boolean = false;
  private cardBodyIsOpen: boolean = false;
  private actionPanelIsOpen: boolean = false;

  constructor(private el: ElementRef){

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
