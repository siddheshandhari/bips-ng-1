import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from '../shared/card/card.module';

import { FinancialComponent } from './financial.component';


@NgModule({
  declarations: [
    FinancialComponent,
  ],
  imports: [
    CardModule,
    CommonModule
  ],
  exports: [
    FinancialComponent
  ]

})
export class FinancialModule { }
