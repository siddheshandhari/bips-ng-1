import { NgModule } from '@angular/core';

import { SidebarComponent } from './sidebar.component';
import { SidebarListComponent } from './sidebar-list/sidebar-list.component';
import { SidebarItemComponent } from './sidebar-list/sidebar-item/sidebar-item.component';
import { SnackbarComponent } from './snackbar/snackbar.component';


@NgModule({
  declarations: [
    SidebarComponent,
    SnackbarComponent,
    SidebarListComponent,
    SidebarItemComponent
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
