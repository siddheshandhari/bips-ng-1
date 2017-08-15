import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

//Module
import { StoreModule } from '@ngrx/store';
import { DesktopModule } from './desktop/desktop.module';
import { LoginModule } from './login/login.module';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DesktopComponent } from './desktop/desktop.component';

//reducers
import { appsReducer } from '../reducers/apps.reducer';
import { sidebarReducer } from '../reducers/sidebar.reducer';
import { topWindowReducer } from '../reducers/topWindow.reducer';

const appRoutes: Routes = [
  { path: 'auth', component: LoginComponent },
  { path: '**', component: DesktopComponent }
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    DesktopModule,
    LoginModule,
    StoreModule.forRoot({
      sidebar: sidebarReducer,
      apps: appsReducer,
      topWindow: topWindowReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
