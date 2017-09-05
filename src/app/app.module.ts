import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Module
import { StoreModule } from '@ngrx/store';
import { DesktopModule } from './desktop/desktop.module';
import { LoginModule } from './login/login.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DesktopComponent } from './desktop/desktop.component';
import { LoginService } from './login/login.service';
import { AuthGuard }  from './login/login.authguard';
import { WindowComponent } from './window/window.component';


//reducers
import { installedAppsReducer } from '../reducers/installedApps.reducer';
import { runningAppsReducer } from '../reducers/runningApps.reducer';
import { hideAppsReducer } from '../reducers/hideApps.reducer';
import { topWindowReducer } from '../reducers/topWindow.reducer';
import { currentUserReducer } from '../reducers/currentUser.reducer';
import 'rxjs/Rx';


const appRoutes: Routes = [
  { path: '', redirectTo:'/desktop', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'desktop', component: DesktopComponent},



  // { path: '', component: LoginComponent },
  // { path: 'desktop', component: DesktopComponent, canActivate:[AuthGuard]  },

  //otherwise redirect to home
  { path: '**', redirectTo: '' }


]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    DesktopModule,
    LoginModule,
    StoreModule.forRoot({
      installedApps: installedAppsReducer,
      runningApps: runningAppsReducer,
      hideApps: hideAppsReducer,
      topWindow: topWindowReducer,
      currentUser: currentUserReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [LoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
