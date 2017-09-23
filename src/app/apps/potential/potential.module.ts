import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule }  from "@angular/platform-browser";
import { RouterModule, Routes} from "@angular/router";
import { CommonModule } from '@angular/common';

import { PotentialHeaderComponent } from  './potential-header/potential-header.component';
import { PotentialListComponent } from './potential-list/potential-list.component';
import { PotentialSidebarComponent } from './potential-sidebar/potential-sidebar.component';
import { PotentialComponent } from './potential.component';
import { AddPotentialComponent } from './add-potential/add-potential.component';
import { PotentialService } from './potential.service';

@NgModule({
  declarations: [
    PotentialComponent,
    AddPotentialComponent,
    PotentialHeaderComponent,
    PotentialListComponent,
    PotentialSidebarComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule,
    HttpModule,
    CommonModule,
  ],
  exports: [
    PotentialComponent,
    HttpClientModule,
  ], 
  providers: [
    PotentialService
  ]

})
export class PotentialModule { }