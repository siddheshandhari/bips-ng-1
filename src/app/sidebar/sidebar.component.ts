import { Component, HostBinding } from '@angular/core';
import { NgClass } from '@angular/common';

//Rxjs Store
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ADD_INSTALLED_APPS, REMOVE_INSTALLED_APPS } from '../../reducers/installedApps.reducer';

interface InstalledAppsState {
  installedApps: Array<number>;
}

@Component({
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})

export class SidebarComponent {

  installedApps: Observable<Array<number>>
  apps: Array<object>;

  constructor(private store: Store<InstalledAppsState>) {
    this.installedApps = store.select('installedApps');
  }

  @HostBinding('class.isSidebarOpen') isSidebarOpen: boolean = false;

  //control the sidebar toggle
  sidebarOpen(){ this.isSidebarOpen = true; }
  sidebarClose(){ this.isSidebarOpen= false; }

  installApp(){
    this.store.dispatch({
      type: ADD_INSTALLED_APPS
    })
  }

}
