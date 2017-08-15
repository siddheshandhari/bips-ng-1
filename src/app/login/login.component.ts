import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})

export class LoginComponent {
  model: any = {};

  constructor(private loginService: LoginService){}

  login() {
    this.loginService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          alert('login successful');
        },
        error => {
          alert('login failed, error: ' +  error);
        }
      )
  }
}
