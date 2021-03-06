//module
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule }  from "@angular/platform-browser";
import { RouterModule, Routes} from "@angular/router";

//
import { CardModule } from '../shared/card/card.module';

//
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './lead/in-memory-data.service';

//component

import { CrmComponent } from './crm.component';
import { AccountComponent } from './account/account.component';


import { CrmNavbarComponent } from './navbar/navbar.component';
import { PotentialComponent } from './potential/potential.component';
import { TaskComponent } from './task/task.component';
import { EventComponent } from './event/event.component';
import { PageHeader } from '../shared/page-header/page-header.component';


//service

import { AccountService } from './account/account.service';
import { PotentialService } from './potential/potential.service';
import { TaskService } from './task/task.service';
import { EventService } from './event/event.service';


@NgModule({
  declarations: [
    CrmComponent,
    AccountComponent,
    PotentialComponent,

    CrmNavbarComponent,
 
    TaskComponent,
    EventComponent,
    PageHeader,

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule,
    HttpModule,
    CardModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  exports: [
    CrmComponent,
    HttpClientModule,
  ],
  providers: [
    AccountService,
    PotentialService,


    TaskService,
    EventService,

  ]


})
export class CrmModule { }
