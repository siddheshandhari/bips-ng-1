import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";
import { BrowserModule }  from "@angular/platform-browser";
import { RouterModule, Routes} from "@angular/router";



import { CrmComponent } from './crm.component';
import { AccountComponent } from './account/account.component';
import { AddLeadComponent } from './lead/add-lead/add-lead.component';
import { LeadComponent } from './lead/lead.component';
import { CrmNavbarComponent } from './navbar/navbar.component';
import { PotentialComponent } from './potential/potential.component';

import { LeadService } from './lead/lead.service';
import { AccountService } from './account/account.service';
import { PotentialService} from './potential/potential.service';


@NgModule({
  declarations: [
    CrmComponent,
    AccountComponent,
    PotentialComponent,
    AddLeadComponent,
    CrmNavbarComponent,
    LeadComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule,
  ],
  exports: [
    CrmComponent,
    HttpClientModule,
  ],
  providers: [
    AccountService,
    PotentialService,
    LeadService
  ]


})
export class CrmModule { }
