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
import { TaskComponent } from './task/task.component';
import { EventComponent } from './event/event.component'; 

import { LeadService } from './lead/lead.service';
import { AccountService } from './account/account.service';
import { PotentialService } from './potential/potential.service';
import { TaskService } from './task/task.service';
import { EventService } from './event/event.service';



@NgModule({
  declarations: [
    CrmComponent,
    AccountComponent,
    PotentialComponent,
    AddLeadComponent,
    CrmNavbarComponent,
    LeadComponent,
    TaskComponent,
    EventComponent
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
    LeadService,
    TaskService,
    EventService,

  ]

})
export class CrmModule { }
