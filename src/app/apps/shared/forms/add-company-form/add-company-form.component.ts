import { Component } from '@angular/core';

@Component({
  selector: 'add-company-form',
  templateUrl: 'add-company-form.component.html',
  styleUrls: ['add-company-form.component.css']
})

export class AddCompanyFormComponent{
  extraContacts: number = 2;
  shippingAddressVisible: boolean = false;

  showShippingAddress(){
    this.shippingAddressVisible = true;
  }

  hideShippingAddress(){
    this.shippingAddressVisible = false;
  }
}
