import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})

export class SignupComponent implements OnInit{
  signupForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]);
  passwordConfirm = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]);

  validationMessages = {
    'email': {
      'required': 'This field is required',
      'email': 'Email address must be valid'
    },
    'password': {
      'required': 'This field is required',
      'minlength': 'Password must contains at least 6 characters',
      'maxlength': 'Password must contains at most 100 characters'
    },
    'passwordConfirm': {
      'required': 'This field is required',
      'minlength': 'Password must contains at least 6 characters',
      'maxlength': 'Password must contains at most 100 characters'
    },
  };

  constructor(private signupService: SignupService, private fb: FormBuilder){}

  ngOnInit(){
    this.createForm();
  }

  createForm(): void {
    this.signupForm = this.fb.group({
      email: this.email,
      password: this.password,
      passwordConfirm: this.passwordConfirm
    },
    //cross form validation
    {validator: this.matchingPasswords('password', 'passwordConfirm')}
    );
    this.signupForm.valueChanges.subscribe(
      form => this.onFormChange(form)
    );
  }

  onFormChange(form?: any){
    if (!this.signupForm){
      return;
    }
    this.checkFormError();
  }

  checkFormError(){
    //if the form is valid, do nothing
    if (this.signupForm.valid){
      return;
    }
    //else get all form controls in the form
    const keys = Object.keys(this.signupForm.value);
    keys.forEach(key => {
      const control = this.signupForm.controls[key];
      //if control was touched and has errors
      if(control.errors){
        const messages = this.validationMessages[key];
        if('required' in control.errors){
          control.setErrors({'message': messages['required']});
        } else {
          for(const error in control.errors){
            control.setErrors({'message': messages[error]});
          }
        }
      }
    });
  }

  onSubmit(){
    console.log(this.signupForm.valid);
  }

  matchingPasswords(passwordKey: string, passwordConfirmKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
      const password = group.controls[passwordKey];
      const passwordConfirm = group.controls[passwordConfirmKey];
      if(password.value !== passwordConfirm.value) {
        return {
          mismatchedPassword: true
        };
      }
    }
  }
}
