import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Module
import { StoreModule } from '@ngrx/store';
import { DesktopModule } from './desktop/desktop.module';
import { LoginModule } from './login/login.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SignupModule } from './signup/signup.module';
import { LoginAuthentication } from './login/login.authentication';
import { LoginValidation } from './login/login.validation';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DesktopComponent } from './desktop/desktop.component';
import { LoginService } from './login/login.service';
import { LoginAuthGuard }  from './login/login.authguard';
import { WindowComponent } from './window/window.component';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';

//reducers
import { InstalledAppsReducer } from './reducers/installedApps.reducer';
import { RunningAppsReducer } from './reducers/runningApps.reducer';
import { HideAppsReducer } from './reducers/hideApps.reducer';
import { TopWindowReducer } from './reducers/topWindow.reducer';
import { CurrentUserReducer } from './reducers/currentUser.reducer';
import { SidebarReducer } from './reducers/sidebar.reducer';
import 'rxjs/Rx';
import { ClockComponent } from './clock/clock.component';


const appRoutes: Routes = [
  { path: '', redirectTo:'/desktop', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'desktop', component: DesktopComponent},
  { path: 'signup', component: SignupComponent},



  // { path: '', component: LoginComponent },
  // { path: 'desktop', component: DesktopComponent, canActivate:[AuthGuard]  },

  //otherwise redirect to home
  { path: '**', redirectTo: '' }


]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ClockComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    DesktopModule,
    LoginModule,

    StoreModule.forRoot({
      installedApps: InstalledAppsReducer,
      runningApps: RunningAppsReducer,
      hideApps: HideAppsReducer,
      topWindow: TopWindowReducer,
      currentUser: CurrentUserReducer,
      sidebar: SidebarReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [
    LoginService,
    LoginAuthGuard,
    SignupService,
    LoginAuthentication,
    LoginValidation,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
