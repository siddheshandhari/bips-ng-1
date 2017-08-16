import { Component, HostBinding } from '@angular/core';
import { NgClass } from '@angular/common';

//Rxjs Store
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
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

<<<<<<< HEAD
  isSidebarOpen = true;
=======
  installedApps: Array<number> = [];
  apps: Array<object> = [];
>>>>>>> 4cfd39065502fc9885493cbd316218c758be1def

  constructor(private store: Store<InstalledAppsState>, private appsService: AppsService) {
    store.select('installedApps').subscribe(state => this.installedApps = state);
    this.apps = this.appsService.appsDict.filter(app => {
      return app.id in this.installedApps;
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
