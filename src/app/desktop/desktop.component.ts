import { Component } from '@angular/core';
import * as screenfull from 'screenfull';

//Service
import { LoginService } from './../login/login.service';

import { Store } from '@ngrx/store';

interface StoreState {
  runningApps: Array<number>;
  hideApps: Array<number>;
}

@Component({
  selector: 'desktop',
  templateUrl: 'desktop.component.html',
  styleUrls: ['desktop.component.css'],
})

export class DesktopComponent {

  runningApps: Array<number> = [];
  hideApps: Array<number> = [];
  apps: Array<object> = [];

  constructor(private store: Store<StoreState>, private login: LoginService){
    store.select('runningApps').subscribe(state => {this.runningApps = state;});
    store.select('hideApps').subscribe(state => {this.hideApps = state;});
  }

  showWindow(appId){
    return this.runningApps.includes(appId) && !this.hideApps.includes(appId) ? true : false;
  }

}
