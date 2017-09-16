import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//customized module
import { SidebarModule } from '../sidebar/sidebar.module';
import { StatusbarModule } from '../statusbar/statusbar.module';
import { MenubarModule } from '../menubar/menubar.module';
import { CrmModule } from '../apps/crm/crm.module';
import { LeadModule } from '../apps/lead/lead.module';
import { AccountModule } from '../apps/account/account.module';
import { FinancialModule } from '../apps/financial/financial.module';
import { InventoryModule } from '../apps/inventory/inventory.module';
import { WindowModule } from '../window/window.module';
import { PotentialModule } from '../apps/potential/potential.module';
import { ShowcaseModule } from '../apps/showcase/showcase.module';
import { NotesModule } from '../apps/notes/notes.module';

import { DesktopComponent } from './desktop.component';

@NgModule({
  declarations: [
    DesktopComponent,
  ],
  imports: [
    CommonModule,
    StatusbarModule,
    SidebarModule,
    MenubarModule,
    CrmModule,
    LeadModule,
    AccountModule,
    FinancialModule,
    InventoryModule,
    WindowModule,
    PotentialModule,
    ShowcaseModule,
    NotesModule
  ],
})
export class DesktopModule { }
