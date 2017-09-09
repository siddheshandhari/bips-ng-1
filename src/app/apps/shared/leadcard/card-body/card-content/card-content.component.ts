import { Component, Input, HostBinding, NgModule } from '@angular/core';
import { Lead } from '../../../../lead/lead';


@Component({
  selector: 'card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})

export class CardContentComponent{
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

  
};
