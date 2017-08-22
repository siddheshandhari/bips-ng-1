import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";
import { BrowserModule }  from "@angular/platform-browser";
import { RouterModule, Routes} from "@angular/router";



import { CrmComponent } from './crm.component';
import { AccountComponent } from './account/account.component';
import { AddLeadComponent } from './lead-list/add-lead/add-lead.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { CrmNavbarComponent } from './navbar/navbar.component';

import { AccountService } from './account/account.service';


@NgModule({
  declarations: [
    CrmComponent,
    AccountComponent,
    AddLeadComponent,
    CrmNavbarComponent,
    LeadListComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule

  ],
  exports: [
    CrmComponent,
    HttpClientModule,
  ],
  providers: [
    AccountService
  ]

})
export class CrmModule { }
