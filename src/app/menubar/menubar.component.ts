import { Component, OnInit } from '@angular/core';

//Rxjs Store
import { Store } from '@ngrx/store';

//Service
import { AppsService } from '../apps/apps.service';

interface StoreState {
  hideApps: Array<number>;
}

@Component({
  selector: 'menubar',
  templateUrl: 'menubar.component.html',
  styleUrls: ['menubar.component.css'],
})
export class MenubarComponent implements OnInit {
  menuHide = false;
  hideApps: Array<number> = [];
  apps: Array<object> = [];

  constructor(private store: Store<StoreState>, private appsService: AppsService){
    store.select('hideApps').subscribe(state => {
      this.hideApps = state;
      this.apps = this.appsService.appsDict.filter(app => {
        return this.hideApps.includes(app.id);
      });
    });
  }

  ngOnInit(){
    this.hideMenu();
  }

  hideMenu(){
    setTimeout(() => {
      this.menuHide = true;
    }, 5000)
  }

  showMenu(){
    this.menuHide = false;
  }
}
