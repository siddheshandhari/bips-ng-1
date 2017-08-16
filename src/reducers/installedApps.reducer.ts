import { Action } from '@ngrx/store';

const preInstalledApps = [1, 2, 3, 4, 5];

export const ADD_INSTALLED_APP = 'ADD_INSTALLED_APP';
export const REMOVE_INSTALLED_APP = 'REMOVE_INSTALLED_APP';

export const installedAppsReducer = (state = preInstalledApps, action: Action) => {
  switch (action.type) {
    case ADD_INSTALLED_APP:
      return
  }
};
