import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';

//customized module
import { SidebarModule } from './sidebar/sidebar.module';
import { MenubarModule } from './menubar/menubar.module';

//components
import { DesktopComponent } from './desktop.component';
import { MenubarComponent } from './menubar/menubar.component';
import { SnackbarComponent } from './sidebar/snackbar/snackbar.component';

//reducers
import { appsReducer } from '../reducers/apps.reducer';
import { sidebarReducer } from '../reducers/sidebar.reducer';
import { topWindowReducer } from '../reducers/topWindow.reducer';

@NgModule({
  declarations: [
    DesktopComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    MenubarModule,
    StoreModule.forRoot({
      sidebar: sidebarReducer,
      apps: appsReducer,
      topWindow: topWindowReducer
    })
  ],
  providers: [],
  bootstrap: [DesktopComponent]
})
export class DesktopModule { }
