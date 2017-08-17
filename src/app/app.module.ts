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
import { LoginService } from './login/login.service';
import { AuthGuard }  from './login/login.authguard';

//reducers
import { installedAppsReducer } from '../reducers/installedApps.reducer';
import { runningAppsReducer } from '../reducers/runningApps.reducer';
import { hideAppsReducer } from '../reducers/hideApps.reducer';
import { topWindowReducer } from '../reducers/topWindow.reducer';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'desktop', component: DesktopComponent, canActivate:[AuthGuard]  },
  //otherwise redirect to home
  { path: '**', redirectTo: '' }
  

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
      topWindow: topWindowReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [LoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
