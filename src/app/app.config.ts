import { InjectionToken } from '@angular/core';

export class AppConfig {
  apiEndPoint: string;
}

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const BIPS_CONFIG: AppConfig = {
  apiEndPoint: 'http://192.168.50.25/api/v1/'
};
