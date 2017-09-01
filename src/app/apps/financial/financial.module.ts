import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from '../shared/card/card.module';
import { AddButtonModule } from '../shared/add-button/add-button.module';

import { FinancialComponent } from './financial.component';

import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    FinancialComponent,
  ],
  imports: [
    CardModule,
    CommonModule,
    AddButtonModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],

  exports: [
    FinancialComponent
  ]

})
export class FinancialModule { }
