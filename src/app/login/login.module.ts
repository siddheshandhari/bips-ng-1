import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpModule } from '@angular/http';
import { LoginService } from './login.service';
// import { AuthGuard }  from './login-authguard.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
  ],
  providers: [
    LoginService
  ]
})

export class LoginModule { }