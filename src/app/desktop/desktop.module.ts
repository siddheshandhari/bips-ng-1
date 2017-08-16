import { NgModule } from '@angular/core';

//customized module
import { SidebarModule } from '../sidebar/sidebar.module';
import { MenubarModule } from '../menubar/menubar.module';
import { WindowModule } from '../window/window.module';

import { DesktopComponent } from './desktop.component';
import { MenubarComponent } from '../menubar/menubar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

//Directive
import { ToggleFullScreenDirective } from './toggleFullScreen.directive';
import { DraggableDirective } from '../window/draggable.directive';

@NgModule({
  declarations: [
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
