import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCompanyFormComponent } from './add-company-form.component';
import { AddAddressFormComponent } from '../add-address-form/add-address-form.component';
import { AddContactFormComponent } from '../add-contact-form/add-contact-form.component';

@NgModule({
  declarations: [
    AddAddressFormComponent,
    AddCompanyFormComponent,
    AddContactFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddAddressFormComponent,
    AddCompanyFormComponent,
    AddContactFormComponent
  ]
})

export class AddCompanyFormModule {

}
