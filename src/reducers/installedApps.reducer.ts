const preInstalledApps = [22, 9, 11, 12, 1, 15, 17, 14];

export const ADD_INSTALLED_APPS = 'ADD_INSTALLED_APPS';
export const REMOVE_INSTALLED_APPS = 'REMOVE_INSTALLED_APPS';

export function InstalledAppsReducer(state = preInstalledApps, action){
  switch (action.type) {
    default:
      return state;
    case ADD_INSTALLED_APPS:
      return
  }
};
