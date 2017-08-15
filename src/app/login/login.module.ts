import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpModule } from '@angular/http';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    HttpModule
  ],
  providers: [
    LoginService
  ]
})

export class LoginModule { }
