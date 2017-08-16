import { Action } from '@ngrx/store';

export const ADD_RUNNING_APP = 'ADDED_RUNNING_APP';
export const REMOVE_RUNNING_APP = 'REMOVE_RUNNING_APP';

export const runningAppsReducer = (state = [], action: Action) => {
  switch (action.type) {
    default:
      return state;
    case ADD_RUNNING_APP:
      return
  }
};
