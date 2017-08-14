import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from './sidebar/sidebar.module';
import { MenubarModule } from './menubar/menubar.module';

import { DesktopComponent } from './desktop.component';
import { MenubarComponent } from './menubar/menubar.component';
import { SnackbarComponent } from './sidebar/snackbar/snackbar.component';

@NgModule({
  declarations: [
    DesktopComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [DesktopComponent]
})
export class DesktopModule { }
