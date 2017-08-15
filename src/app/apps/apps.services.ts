import { Injectable } from '@angular/core';

@Injectable()
export class appsServices {

  apps = {
    '1': 'crm',
    '2': 'contact',
    '3': 'something'
  };

  constructor(){}

  launchApp(appId) {

  }


}
