import { NgModule } from '@angular/core';

//customized module
import { SidebarModule } from '../sidebar/sidebar.module';
import { MenubarModule } from '../menubar/menubar.module';
import { WindowModule } from '../window/window.module';

import { AddLeadComponent } from '../apps/crm/add-lead/add-lead.component';
import { DesktopComponent } from './desktop.component';
import { MenubarComponent } from '../menubar/menubar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

//Directive
import { ToggleFullScreenDirective } from './toggleFullScreen.directive';
import { DraggableDirective } from '../window/draggable.directive';

@NgModule({
  declarations: [
    AddLeadComponent,
    DesktopComponent,
    ToggleFullScreenDirective,
    DraggableDirective,
  ],
  imports: [
    SidebarModule,
    MenubarModule,
    WindowModule,
  ],
})
export class DesktopModule { }
