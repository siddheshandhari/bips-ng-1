import { Component } from '@angular/core';
import { LoginService } from './login.service';

import { User } from './login-user';



@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})

export class LoginComponent {
  model: any = {};

  // submitted = false;

  // onSubmit() {this.submitted = true}
 

  constructor(private loginService: LoginService){}

  login() {
    this.loginService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          if(data){
            alert('login successful');
          } 
          else {
            alert('login failed');
          }


        },
        // error => {
        //   alert('login failed, error: ' +  error);
        // }
      )
  }
  
}
