import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'card-header',
  templateUrl: 'card-header.component.html',
  styleUrls: ['card-header.component.css']
})

export class CardHeaderComponent{
  @Input() logoUrl: string;
  @Input() title: string;
  @Input() address: {
    country: string,
    state: string,
    city: string,
    zipcode: number,
    street: string
  };
  @Input() industry: string;
  @Input() facebook: string;
  @Input() twitter: string;
  @Input() phone: string;

  @HostBinding('class.card-header-open') isOpen: boolean = false;

  openHeader(){
    this.isOpen = true;
  }

  closeHeader(){
    this.isOpen = false;
  }
};
