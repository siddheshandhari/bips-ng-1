import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DesktopComponent } from './desktop.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    DesktopComponent,
    SidebarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DesktopComponent]
})
export class AppModule { }
