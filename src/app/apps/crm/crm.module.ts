import { NgModule } from '@angular/core';
import { WindowModule } from '../../window/window.module';

import { CrmComponent } from './crm.component';
import { AddLeadComponent } from './add-lead/add-lead.component';


@NgModule({
  declarations: [
    CrmComponent,
    AddLeadComponent,
  ],
  imports: [
    WindowModule
  ],
  exports: [
    CrmComponent
  ]

})
export class CrmModule { }
