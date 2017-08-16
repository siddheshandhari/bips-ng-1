import { Action } from '@ngrx/store';

const preInstalledApps = [1, 2, 3, 4, 5];

export const ADD_INSTALLED_APPS = 'ADD_INSTALLED_APPS';
export const REMOVE_INSTALLED_APPS = 'REMOVE_INSTALLED_APPS';

export const installedAppsReducer = (state = preInstalledApps, action) => {
  switch (action.type) {
    default:
      return state;
    case ADD_INSTALLED_APPS:
      return
  }
};
