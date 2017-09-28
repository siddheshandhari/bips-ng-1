import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { HttpModule } from '@angular/http';
import { SignupService } from './signup.service';
import { RouterModule, Routes } from "@angular/router";

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
  ],
  declarations: [
    SignupComponent
  ],
  providers: [
    SignupService
  ],
  exports: [
    SignupComponent
  ]
})

export class SignupModule { }
