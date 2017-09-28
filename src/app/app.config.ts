import { InjectionToken } from '@angular/core';

export class AppConfig {
  apiEndPoint: string;
}

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const BIPS_CONFIG: AppConfig = {
  apiEndPoint: 'http://127.0.0.1:8000/api/v1/'
};
