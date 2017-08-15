import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

//Module
import { StoreModule } from '@ngrx/store';
import { DesktopModule } from './desktop/desktop.module';

//components
import { AppComponent } from './app.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { DesktopComponent } from './desktop/desktop.component';

//reducers
import { appsReducer } from '../reducers/apps.reducer';
import { sidebarReducer } from '../reducers/sidebar.reducer';
import { topWindowReducer } from '../reducers/topWindow.reducer';

const appRoutes: Routes = [
  { path: 'auth', component: AuthPageComponent },
  { path: '**', component: DesktopComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    DesktopModule,
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
