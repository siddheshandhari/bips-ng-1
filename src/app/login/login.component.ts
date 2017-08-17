import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';







@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})

export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private router: Router,private login:LoginService){ }

  ngOnInit(){

  }

  loginUser(e){
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    console.log(username,password);

    if (username == 'admin' && password =='admin'){
      this.login.setUserLoggedIn();
      this.router.navigate(['desktop'])
    }
  }



  

  // constructor(private loginService: LoginService){}

  // login() {
  //   this.loginService.login(this.model.username, this.model.password)
  //     .subscribe(
  //       data => {
  //         if(data){
  //           alert('login successful');
  //         } 
  //         else {
  //           alert('login failed');
  //         }


  //       },
  //       error => {
  //         alert('login failed, error: ' +  error);
  //       }
  //     )
  // }
  
}
