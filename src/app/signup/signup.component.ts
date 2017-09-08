import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  selector: 'signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})
export class SignupComponent implements OnInit {
  model: any = {};
  constructor(private route: ActivatedRoute,
              private router: Router,
              private signup: SignupService){ }

  ngOnInit(){

  }

  signupUser(e){
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    console.log(username,password);

    // if (username == 'admin' && password =='admin'){
    //   this.signup.setUserSignedUp();
    //   this.router.navigate(['desktop'])
    // }
  }
}
