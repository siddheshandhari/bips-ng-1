import { NgModule } from '@angular/core';

import { CardModule } from '../shared/card/card.module';

import { FinancialComponent } from './financial.component';


@NgModule({
  declarations: [
    FinancialComponent,
  ],
  imports: [
    CardModule
  ],
  exports: [
    FinancialComponent
  ]

})
export class FinancialModule { }
