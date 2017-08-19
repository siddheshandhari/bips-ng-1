import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule }  from "@angular/platform-browser";

import { CrmComponent } from './crm.component';
import { AddLeadComponent } from './add-lead/add-lead.component';


@NgModule({
  declarations: [
    CrmComponent,
    AddLeadComponent,
  ],
  exports: [
    CrmComponent,
    HttpClientModule,
    BrowserModule
  ],
  imports: [
    FormsModule
  ]

})
export class CrmModule { }
