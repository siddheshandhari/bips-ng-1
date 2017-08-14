import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { SidebarComponent } from './sidebar.component';
import { SidebarListComponent } from './sidebar-list/sidebar-list.component';
import { SidebarItemComponent } from './sidebar-list/sidebar-item/sidebar-item.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { IconComponent } from './../icon/icon.component';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
 // import { SidebarAppMemoryData } from './sidebar-app-memory-data.service';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    SidebarComponent,
    SnackbarComponent,
    SidebarListComponent,
    SidebarItemComponent,
    IconComponent
    // InMemoryWebApiModule.forRoot(SidebarAppMemoryData)
    // InMemoryWebApiModule,
    // SidebarAppMemoryData
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
