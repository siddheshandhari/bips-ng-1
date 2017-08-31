import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from '../shared/card/card.module';
import { AddButtonModule } from '../shared/add-button/add-button.module';

import { FinancialComponent } from './financial.component';


@NgModule({
  declarations: [
    FinancialComponent,
  ],
  imports: [
    CardModule,
    CommonModule,
    AddButtonModule,
  ],
  exports: [
    FinancialComponent
  ]

})
export class FinancialModule { }
