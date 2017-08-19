import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";
import { BrowserModule }  from "@angular/platform-browser";
import { RouterModule, Routes} from "@angular/router";



import { CrmComponent } from './crm.component';
import { AddLeadComponent } from './add-lead/add-lead.component';
import { CrmNavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    CrmComponent,
    AddLeadComponent,
    CrmNavbarComponent
  ],
  imports: [
    FormsModule,
  ],
  exports: [
    CrmComponent,
    HttpClientModule,
    BrowserModule
  ]

})
export class CrmModule { }
