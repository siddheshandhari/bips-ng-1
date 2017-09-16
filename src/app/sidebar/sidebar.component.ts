import { Component, HostBinding } from '@angular/core';
import { NgClass } from '@angular/common';

//Rxjs Store
import { Store } from '@ngrx/store';
import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from '../../reducers/sidebar.reducer';
import { ADD_INSTALLED_APPS, REMOVE_INSTALLED_APPS } from '../../reducers/installedApps.reducer';

//Service
import { AppsService } from '../apps/apps.service';

interface StoreState {
  sidebar: object,
  installedApps: Array<number>
}

@Component({
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
  providers: [
    AppsService
  ]
})

export class SidebarComponent {

  @HostBinding('class.isSidebarOpen') isSidebarOpen: boolean;
  installedApps: Array<number> = [];
  apps: Array<object> = [];

  constructor(private store: Store<StoreState>, private appsService: AppsService) {
    store.select('installedApps').subscribe(state => this.installedApps = state);
    store.select('sidebar').subscribe((state: any) => this.isSidebarOpen = state.isOpen);
    this.apps = this.appsService.appsDict.filter(app => {
      return this.installedApps.includes(app.id);
    })
  }

  //control the sidebar toggle
  sidebarOpen(){
    this.store.dispatch({
      type: OPEN_SIDEBAR
    });
  }

  sidebarClose(){
    this.store.dispatch({
      type: CLOSE_SIDEBAR
    });
  }

  installApp(appId){
    this.store.dispatch({
      type: ADD_INSTALLED_APPS,
      appId: appId
    })
  }

}
