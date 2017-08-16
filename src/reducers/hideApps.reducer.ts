import { Action } from '@ngrx/store';

export const ADD_HIDE_APP = 'ADD_HIDE_APP';
export const REMOVE_HIDE_APP = 'REMOVE_HIDE_APP';

export const hideAppsReducer = (state = [], action: Action) => {
  switch (action.type) {
    case ADD_HIDE_APP:
      return
  }
};
