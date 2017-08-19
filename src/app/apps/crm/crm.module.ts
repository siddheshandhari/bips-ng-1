import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";
import { BrowserModule }  from "@angular/platform-browser";



import { CrmComponent } from './crm.component';
import { AddLeadComponent } from './add-lead/add-lead.component';


@NgModule({
  declarations: [
    CrmComponent,
    AddLeadComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule
  ],
  exports: [
    CrmComponent,
    HttpClientModule,
    
  ]

})
export class CrmModule { }
