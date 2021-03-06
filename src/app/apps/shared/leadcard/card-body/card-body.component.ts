import { Component, HostBinding, Input, ElementRef, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'card-body',
  templateUrl: 'card-body.component.html',
  styleUrls: ['card-body.component.css'],
  host: {
    '(document: click)': 'closeActionPanel($event)'
  }
})

export class CardBodyComponent{


  constructor(private el: ElementRef){}

  private editMode: boolean = false;
  private actionPanelIsOpen: boolean = false;
  @Input() contacts: Array<object>;
  @Input() owner: string;
  @Output() deleteEvent = new EventEmitter();

  @HostBinding('class.card-body-open') isOpen: boolean = false;

  openBody(){
    this.isOpen = true;
  }

  closeBody(){
    this.isOpen = false;
  }

  openActionPanel(){
    this.actionPanelIsOpen = true;
  }

  closeActionPanel(){
    if(!this.el.nativeElement.contains(event.target) && this.actionPanelIsOpen){
      this.actionPanelIsOpen = false;
    }
  }

  onDelete(e){
    this.deleteEvent.emit(e);
  }

  onEdit(){
    this.editMode = true;
    this.actionPanelIsOpen = false;
  }
};
