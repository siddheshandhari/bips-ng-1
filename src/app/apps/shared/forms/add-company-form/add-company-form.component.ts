import { Component } from '@angular/core';
import { Contact } from '../../../../models/contact';

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

  showShippingAddress(){
    this.shippingAddressVisible = true;
  }

  hideShippingAddress(){
    this.shippingAddressVisible = false;
  }
}
