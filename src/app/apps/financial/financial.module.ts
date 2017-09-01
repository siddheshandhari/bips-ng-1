import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from '../shared/card/card.module';
import { AddButtonModule } from '../shared/add-button/add-button.module';

import { FinancialComponent } from './financial.component';

import { DialogService } from '../shared/add-button/dialog/dialog.service';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA, OVERLAY_PROVIDERS, ScrollStrategyOptions, ScrollDispatcher, Platform } from '@angular/material';
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
  providers: [
    DialogService,
    MdDialog,
    OVERLAY_PROVIDERS,
    ScrollStrategyOptions,
    ScrollDispatcher,
    Platform,
],
  exports: [
    FinancialComponent
  ]

})
export class FinancialModule { }
