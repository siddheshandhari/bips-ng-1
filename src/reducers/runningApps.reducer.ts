export const ADD_RUNNING_APPS = 'ADDED_RUNNING_APP';
export const REMOVE_RUNNING_APPS = 'REMOVE_RUNNING_APP';

export function runningAppsReducer(state = [], action){
  switch (action.type) {
    default:
      return state;
    case ADD_RUNNING_APPS:
      return state.concat([action.id])
  }
};
