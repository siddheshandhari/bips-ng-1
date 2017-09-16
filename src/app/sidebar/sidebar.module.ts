import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Module
import { IconModule } from '../icon/icon.module';

//Component
import { SidebarComponent } from './sidebar.component';
import { ToolsComponent } from './tools/tools.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SnackbarItemComponent } from './snackbar/snackbar-item/snackbar-item.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    BrowserModule,
    IconModule
  ],
  declarations: [
    SidebarComponent,
    SnackbarComponent,
    ToolsComponent,
    SnackbarItemComponent,
    UserComponent
  ],
  exports: [
    SidebarComponent
  ],
})
export class SidebarModule { }
