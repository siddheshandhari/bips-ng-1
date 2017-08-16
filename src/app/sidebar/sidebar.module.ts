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
import { CurrentUserInfo } from './sidebar-list/current-user/current-user.component';

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
<<<<<<< HEAD
    CurrentUserInfo

    // InMemoryWebApiModule.forRoot(SidebarAppMemoryData)
    // InMemoryWebApiModule,
    // SidebarAppMemoryData
=======
>>>>>>> 4cfd39065502fc9885493cbd316218c758be1def
  ],
  exports: [
    SidebarComponent
  ],
})
export class SidebarModule { }
