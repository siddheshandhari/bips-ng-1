import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})

export class SignupComponent {

  signupForm: FormGroup;

  constructor(private signupService: SignupService, private fb: FormBuilder){
    this.createForm();
  }

  createForm(){
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    });
  }

  onSubmit(){
    console.log(this.signupForm.valid);
  }

  isValid(control){
    return this.signupForm.controls[control].valid;
  }

}
