export const ADD_HIDE_APPS = 'ADD_HIDE_APPS';
export const REMOVE_HIDE_APPS = 'REMOVE_HIDE_APPS';

export function HideAppsReducer(state = [], action){
  switch (action.type) {
    default:
      return state;
    case ADD_HIDE_APPS:
      if(state.includes(action.appId)){
        return state
      } else {
        return state.concat([action.appId]);
      }
    case REMOVE_HIDE_APPS:
      const index = state.indexOf(action.appId);
      return state.slice(0, index).concat(state.slice(index + 1));
  }
};
