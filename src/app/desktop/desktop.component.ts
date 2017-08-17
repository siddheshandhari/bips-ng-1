import { Component } from '@angular/core';
import * as screenfull from 'screenfull';
import { LoginService } from './../login/login.service';

@Component({
  selector: 'desktop',
  templateUrl: 'desktop.component.html',
  styleUrls: ['desktop.component.css'],
})

export class DesktopComponent {

  
  constructor(private login: LoginService){

  }

}
