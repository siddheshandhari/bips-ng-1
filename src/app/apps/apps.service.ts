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
    1: { name: 'crm', path: './crm', imgUrl: '../../assets/imgs/crm.png' },
    2: { name: 'note', path: './crm', imgUrl: '../../assets/imgs/note.png' },
    3: { name: 'contact', path: './crm', imgUrl: '../../assets/imgs/contact.png' },
    4: { name: 'folder', path: './crm', imgUrl: '../../assets/imgs/folder.png' },
    5: { name: 'company', path: './crm', imgUrl: '../../assets/imgs/company.png' },
  }

  constructor(private store: Store<runningApps>){
    this.runningApps = store.select('runningApps');
  }

  launchApp(appId) {
    this.store.dispatch({
      type: ADD_RUNNING_APP
    });
  }


}
