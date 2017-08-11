import { NgModule } from '@angular/core';

import { SidebarComponent } from './sidebar.component';
import { SidebarListComponent } from './sidebarList/sidebarList.component';
import { SidebarItemComponent } from './sidebarList/sidebarItem/sidebarItem.component';
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
