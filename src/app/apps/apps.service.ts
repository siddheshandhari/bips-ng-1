import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ADD_RUNNING_APPS, REMOVE_RUNNING_APPS } from './../reducers/runningApps.reducer';
import { SET_TOP_WINDOW } from './../reducers/topWindow.reducer';
import { REMOVE_HIDE_APPS } from './../reducers/hideApps.reducer';

interface storeState {
  hideApps: Array<number>;
  runningApps: Array<number>;
}

@Injectable()
export class AppsService {
  runningApps: Array<number>;
  hideApps: Array<number>;

  appsDict = [
    { id: 1, name: 'account', path: './account', iconUrl: 'assets/imgs/app-icons/account.png' },
    { id: 2, name: 'business', path: './business', iconUrl: 'assets/imgs/app-icons/business.png' },
    { id: 3, name: 'contacts', path: './contacts', iconUrl: 'assets/imgs/app-icons/contacts.png' },
    { id: 4, name: 'customer', path: './customer', iconUrl: 'assets/imgs/app-icons/customer.png' },
    { id: 5, name: 'design', path: './design', iconUrl: 'assets/imgs/app-icons/design.png' },
    { id: 6, name: 'email', path: './email', iconUrl: 'assets/imgs/app-icons/email.png' },
    { id: 7, name: 'employees', path: './employees', iconUrl: 'assets/imgs/app-icons/employees.png' },
    { id: 8, name: 'engineering', path: './engineering', iconUrl: 'assets/imgs/app-icons/engineering.png' },
    { id: 9, name: 'financial', path: './financial', iconUrl: 'assets/imgs/app-icons/financial.png' },
    { id: 10, name: 'hr', path: './hr', iconUrl: 'assets/imgs/app-icons/hr.png' },
    { id: 11, name: 'inventory', path: './inventory', iconUrl: 'assets/imgs/app-icons/inventory.png' },
    { id: 12, name: 'lead', path: './lead', iconUrl: 'assets/imgs/app-icons/lead.png' },
    { id: 13, name: 'logistics', path: './logistics', iconUrl: 'assets/imgs/app-icons/logistics.png' },
    { id: 14, name: 'notes', path: './notes', iconUrl: 'assets/imgs/app-icons/notes.png' },
    { id: 15, name: 'potential', path: './potential', iconUrl: 'assets/imgs/app-icons/potential.png' },
    { id: 16, name: 'presentation', path: './presentation', iconUrl: 'assets/imgs/app-icons/presentation.png' },
    { id: 17, name: 'showcase', path: './showcase', iconUrl: 'assets/imgs/app-icons/product.png' },
    { id: 18, name: 'projects', path: './projects', iconUrl: 'assets/imgs/app-icons/projects.png' },
    { id: 19, name: 'purchasing', path: './purchasing', iconUrl: 'assets/imgs/app-icons/purchasing.png' },
    { id: 20, name: 'qa', path: './qa', iconUrl: 'assets/imgs/app-icons/qa.png' },
    { id: 21, name: 'reports', path: './reports', iconUrl: 'assets/imgs/app-icons/reports.png' },
    { id: 22, name: 'crm', path: './crm', iconUrl: 'assets/imgs/app-icons/crm.png' },
    { id: 23, name: 'security', path: './security', iconUrl: 'assets/imgs/app-icons/security.png' },
    { id: 24, name: 'tasks', path: './tasks', iconUrl: 'assets/imgs/app-icons/tasks.png' },
    { id: 25, name: 'trucking', path: './trucking', iconUrl: 'assets/imgs/app-icons/trucking.png' },


  ]

  constructor(private store: Store<storeState>){
    store.select('runningApps').subscribe(state => this.runningApps = state);
    store.select('hideApps').subscribe(state => this.hideApps = state);
  }

  launchApp(appId) {
    if(!this.runningApps.includes(appId)){
      this.store.dispatch({
        type: ADD_RUNNING_APPS,
        appId: appId
      });
      this.store.dispatch({
        type: SET_TOP_WINDOW,
        window: {
          appId: appId
        }
      });
    } else if(this.hideApps.includes(appId)){
      this.store.dispatch({
        type: REMOVE_HIDE_APPS,
        appId: appId
      });
      this.store.dispatch({
        type: SET_TOP_WINDOW,
        window: {
          appId: appId
        }
      });
    } else {
      this.store.dispatch({
        type: SET_TOP_WINDOW,
        window: {
          appId: appId
        }
      });
    }
  }

  closeApp(appId) {
    this.store.dispatch({
      type: REMOVE_RUNNING_APPS,
      appId: appId
    })
  }


}
