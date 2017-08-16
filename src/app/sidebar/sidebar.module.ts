import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Module
import { IconModule } from '../icon/icon.module';

//Component
import { SidebarComponent } from './sidebar.component';
import { SidebarListComponent } from './sidebar-list/sidebar-list.component';
import { SidebarItemComponent } from './sidebar-list/sidebar-item/sidebar-item.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SnackbarItemComponent } from './snackbar/snackbar-item/snackbar-item.component';

@NgModule({
  imports: [
    BrowserModule,
    IconModule
  ],
  declarations: [
    SidebarComponent,
    SnackbarComponent,
    SidebarListComponent,
    SidebarItemComponent,
    SnackbarItemComponent,
  ],
  exports: [
    SidebarComponent
  ],
})
export class SidebarModule { }
