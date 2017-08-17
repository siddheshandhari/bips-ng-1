import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

//Module
import { StoreModule } from '@ngrx/store';
import { DesktopModule } from './desktop/desktop.module';
import { LoginModule } from './login/login.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DesktopComponent } from './desktop/desktop.component';
// import { AuthGuard }  from './login/login-authguard.component';

//reducers
import { installedAppsReducer } from '../reducers/installedApps.reducer';
import { runningAppsReducer } from '../reducers/runningApps.reducer';
import { hideAppsReducer } from '../reducers/hideApps.reducer';
import { topWindowReducer } from '../reducers/topWindow.reducer';
import { currentUserReducer } from '../reducers/currentUser.reducer';

const appRoutes: Routes = [
  { path: 'auth', component: LoginComponent },
  { path: '**', component: DesktopComponent, canActivate:[] },
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
