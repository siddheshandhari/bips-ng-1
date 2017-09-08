import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginAuthentication } from './login.authentication';
import { LoginValidation } from './login.validation';
import { User } from './user';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading= false;
  returnUrl: string;

  // model = new User('yali@orcasmart.com', 'yali');
  // submitted= false;
  // onSubmit() { this.submitted = true;}

  //
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private login:LoginService,
    private authentication: LoginAuthentication,
    private validation: LoginValidation) { }

  ngOnInit(){
    // this.authentication.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/desktop';
  }

  login() {
    this.loading = true;
    this.authentication.login(this.model.email, this.model.password)
      .subscribe(
         data => {
           this.router.navigate([this.returnUrl]);
         },
         error => {
           this.validation.error(error);
           this.loading = false;
         });

  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  // loginUser(e){
  //   e.preventDefault();
  //   console.log(e);
  //   var email = e.target.elements[0].value;
  //   var password = e.target.elements[1].value;
  //   console.log(email,password);

  //   if (email == 'admin' && password =='admin'){
  //     this.login.setUserLoggedIn();
  //     this.router.navigate(['desktop'])
  //   }
  // }



  

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
