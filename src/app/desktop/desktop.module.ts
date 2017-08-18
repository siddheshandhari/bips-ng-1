import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//customized module
import { SidebarModule } from '../sidebar/sidebar.module';
import { MenubarModule } from '../menubar/menubar.module';
import { CrmModule } from '../apps/crm/crm.module';
import { FinancialModule } from '../apps/financial/financial.module';
import { InventoryModule } from '../apps/inventory/inventory.module';
import { WindowModule } from '../window/window.module';

import { DesktopComponent } from './desktop.component';
import { MenubarComponent } from '../menubar/menubar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

//Directive
import { ToggleFullScreenDirective } from './toggleFullScreen.directive';

@NgModule({
  declarations: [
    DesktopComponent,
    ToggleFullScreenDirective,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    MenubarModule,
    CrmModule,
    FinancialModule,
    InventoryModule,
    WindowModule,
  ],
})
export class DesktopModule { }
