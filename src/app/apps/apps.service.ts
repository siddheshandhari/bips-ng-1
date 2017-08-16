import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ADD_RUNNING_APPS, REMOVE_RUNNING_APPS } from '../../reducers/runningApps.reducer';

interface runningApps {
  runningApps: Array<number>;
}

@Injectable()
export class AppsService {
  runningApps: Observable<Array<number>>

  appsDict = [
    { id: 1, name: 'crm', path: './crm', imgUrl: '../../assets/imgs/crm.png' },
    { id: 2, name: 'note', path: './crm', imgUrl: '../../assets/imgs/note.png' },
    { id: 3, name: 'contact', path: './crm', imgUrl: '../../assets/imgs/contact.png' },
    { id: 4, name: 'folder', path: './crm', imgUrl: '../../assets/imgs/folder.png' },
    { id: 5, name: 'company', path: './crm', imgUrl: '../../assets/imgs/company.png' },
  ]

  constructor(private store: Store<runningApps>){
    this.runningApps = store.select('runningApps');
  }

  launchApp(appId) {
    this.store.dispatch({
      type: ADD_RUNNING_APPS,
      id: appId
    });
  }

  closeApps(appId) {
    this.store.dispatch({
      type: REMOVE_RUNNING_APPS,
      id: appId
    })
  }


}
