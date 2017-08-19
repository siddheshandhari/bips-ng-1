import { Component, HostBinding } from '@angular/core';
import { NgClass } from '@angular/common';

//Rxjs Store
import { Store } from '@ngrx/store';
import { ADD_INSTALLED_APPS, REMOVE_INSTALLED_APPS } from '../../reducers/installedApps.reducer';

//Service
import { AppsService } from '../apps/apps.service';

interface InstalledAppsState {
  installedApps: Array<number>;
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

  installedApps: Array<number> = [];
  apps: Array<object> = [];

  constructor(private store: Store<InstalledAppsState>, private appsService: AppsService) {
    store.select('installedApps').subscribe(state => this.installedApps = state);
    this.apps = this.appsService.appsDict.filter(app => {
      return this.installedApps.includes(app.id);
    })
  }

  @HostBinding('class.isSidebarOpen') isSidebarOpen: boolean = true;

  //control the sidebar toggle
  sidebarOpen(){ this.isSidebarOpen = true; }
  sidebarClose(){ this.isSidebarOpen= false; }

  installApp(appId){
    this.store.dispatch({
      type: ADD_INSTALLED_APPS,
      appId: appId
    })
  }

}
