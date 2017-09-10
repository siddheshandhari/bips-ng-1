import { Component, Input, HostBinding,NgModule } from '@angular/core';
import { Lead } from '../../../lead/lead';


@Component({
  selector: 'card-header',
  templateUrl: 'card-header.component.html',
  styleUrls: ['card-header.component.css']
})

export class CardHeaderComponent{
  @Input() logoUrl: string;
  @Input() title: string;
  @Input() lead : any;
  @Input() selectedLead : Lead;

  @Input() address: {
    country: string,
    state: string,
    city: string,
    zipcode: number,
    street: string
  };
  @Input() industry: string;
  @Input() website: string;
  @Input() facebook: string;
  @Input() twitter: string;
  @Input() phone: string;
  @Input() expense: string;
  @Input() employees: string;
  @Input() contact: string;
  @Input() isEditing : Boolean;

  @HostBinding('class.card-header-open') isOpen: boolean = false;

  openHeader(){
    this.isOpen = true;
  }

  closeHeader(){
    this.isOpen = false;
  }
};
