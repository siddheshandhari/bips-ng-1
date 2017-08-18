import { NgModule } from '@angular/core';

import { CrmComponent } from './crm.component';
import { AddLeadComponent } from './add-lead/add-lead.component';


@NgModule({
  declarations: [
    CrmComponent,
    AddLeadComponent,
  ],
  exports: [
    CrmComponent
  ]

})
export class CrmModule { }
