import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule }  from "@angular/platform-browser";
import { RouterModule, Routes} from "@angular/router";
import { CommonModule } from '@angular/common';


import { PopupComponent } from './popup/popup.component';
import { PotentialComponent } from './potential.component';
import { AddPotentialComponent } from './add-potential/add-potential.component';
import { PotentialService } from './potential.service';

@NgModule({
  declarations: [
    PotentialComponent,
    AddPotentialComponent,
    PopupComponent,
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