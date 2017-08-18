import { Component } from '@angular/core';
import * as screenfull from 'screenfull';

//Service
import { LoginService } from './../login/login.service';

import { Store } from '@ngrx/store';

interface RunningAppsState {
  runningApps: Array<number>;
}

@Component({
  selector: 'desktop',
  templateUrl: 'desktop.component.html',
  styleUrls: ['desktop.component.css'],
})

export class DesktopComponent {

  runningApps: Array<number> = [];
  apps: Array<object> = [];

  constructor(private store: Store<RunningAppsState>, private login: LoginService){
    store.select('runningApps').subscribe(state => {this.runningApps = state;});
  }

}
