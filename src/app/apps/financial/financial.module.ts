import { NgModule } from '@angular/core';

import { FinancialComponent } from './financial.component';


@NgModule({
  declarations: [
    FinancialComponent,
  ],
  exports: [
    FinancialComponent
  ]

})
export class FinancialModule { }
