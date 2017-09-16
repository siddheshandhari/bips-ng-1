import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Module
import { IconModule } from '../icon/icon.module';

//Component
import { SidebarComponent } from './sidebar.component';
import { ToolsComponent } from './tools/tools.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertComponent } from './alert/alert.component';
import { NewsComponent } from './news/news.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SnackbarItemComponent } from './snackbar/snackbar-item/snackbar-item.component';
import { UserComponent } from './user/user.component';
import { SectionHeaderComponent } from './section-header/section-header.component';

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
    UserComponent,
    SectionHeaderComponent,
    DashboardComponent,
    AlertComponent,
    NewsComponent
  ],
  exports: [
    SidebarComponent
  ],
})
export class SidebarModule { }
