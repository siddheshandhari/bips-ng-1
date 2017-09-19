import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from '../shared/card2/card.module';

import { FinancialComponent } from './financial.component';

import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    FinancialComponent,
  ],
  imports: [
    CardModule,
    CommonModule,
    BrowserModule
  ],

  exports: [
    FinancialComponent
  ]

})
export class FinancialModule { }
