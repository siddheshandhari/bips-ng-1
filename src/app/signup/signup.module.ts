import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { HttpModule } from '@angular/http';
import { SignupService } from './signup.service';
import { RouterModule, Routes } from "@angular/router";
// import { AuthGuard }  from './login-authguard.component';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
  ],
  providers: [
    SignupService
  ]
})

export class SignupModule { }
