import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CrmComponent } from './crm.component';
import { AddLeadComponent } from './add-lead/add-lead.component';


@NgModule({
  declarations: [
    CrmComponent,
    AddLeadComponent,
  ],
  imports: [
    FormsModule
  ],
  exports: [
    CrmComponent
  ]

})
export class CrmModule { }
