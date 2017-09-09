import { Component } from '@angular/core';
import { Contact } from '../../../../models/contact';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'add-company-form',
  templateUrl: 'add-company-form.component.html',
  styleUrls: ['add-company-form.component.css']
})

export class AddCompanyFormComponent{
  contacts: Array<Contact> = [];
  shippingAddressVisible: boolean = false;

  // constructor(public contact: Contact){
  //   this.contacts.push(contact);
  // }

  companyForm = new FormGroup({
    companyName: new FormControl(),
    website: new FormControl(),
    employees: new FormControl(),
    rating: new FormControl(),
    industry: new FormControl(),
    annualRevenue: new FormControl(),
    tier: new FormControl(),
    

  });

  showShippingAddress(){
    this.shippingAddressVisible = true;
  }

  hideShippingAddress(){
    this.shippingAddressVisible = false;
  }
}
