import { NgModule } from '@angular/core';

//customized module
import { SidebarModule } from '../sidebar/sidebar.module';
import { MenubarModule } from '../menubar/menubar.module';

import { DesktopComponent } from './desktop.component';
import { windowComponent } from '../window/window.component';
import { MenubarComponent } from '../menubar/menubar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

//Directive
import { ToggleFullScreenDirective } from './toggleFullScreen.directive'

@NgModule({
  declarations: [
    DesktopComponent,
    windowComponent,
    ToggleFullScreenDirective,
  ],
  imports: [
    SidebarModule,
    MenubarModule,
  ],
})
export class DesktopModule { }
