export const ADD_RUNNING_APPS = 'ADDED_RUNNING_APP';
export const REMOVE_RUNNING_APPS = 'REMOVE_RUNNING_APP';

const initialState = [22];

export function runningAppsReducer(state = initialState, action){
  switch (action.type) {
    default:
      return state;
    case ADD_RUNNING_APPS:
      return state.concat([action.id]);
    case REMOVE_RUNNING_APPS:
      const index = state.indexOf(action.id);
      return state.slice(0, index).concat(state.slice(index + 1));
  }
};
