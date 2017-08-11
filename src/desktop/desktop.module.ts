import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from './sidebar/sidebar.module';
import { MenubarModule } from './menubar/menubar.module';
import { NgModule } from '@angular/core';

import { DesktopComponent } from './desktop.component';
import { MenubarComponent } from './menubar/menubar.component';
import { SnackbarComponent } from './sidebar/snackbar/snackbar.component';

@NgModule({
  declarations: [
    DesktopComponent,
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [DesktopComponent]
})
export class DesktopModule { }
