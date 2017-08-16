import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ADD_RUNNING_APP } from '../../reducers/runningApps.reducer';

interface runningApps {
  runningApps: Array<number>;
}

@Injectable()
export class AppsService {
  runningApps: Observable<Array<number>>

  appsDict = {
    '1': 'crm',
    '2': 'contact',
    '3': 'something'
  };

  constructor(private store: Store<runningApps>){
    this.runningApps = store.select('runningApps');
  }

  launchApp(appId) {
    this.store.dispatch({
      type: ADD_RUNNING_APP
    });
  }


}
