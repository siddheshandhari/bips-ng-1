export const ADD_RUNNING_APPS = 'ADDED_RUNNING_APP';
export const REMOVE_RUNNING_APPS = 'REMOVE_RUNNING_APP';


//Lead = 12; Account = 1; Note = 14; Potential = 15;

<<<<<<< HEAD:src/reducers/runningApps.reducer.ts
const initialState = [17];
=======
const initialState = [15];
>>>>>>> 68095719ae54d0f4db1db45b88344ee3bff00eb8:src/app/reducers/runningApps.reducer.ts


export function RunningAppsReducer(state = initialState, action){
  switch (action.type) {
    default:
      return state;
    case ADD_RUNNING_APPS:
      return state.includes(action.id) ? state : state.concat([action.appId]);
    case REMOVE_RUNNING_APPS:
      const index = state.indexOf(action.appId);
      return state.slice(0, index).concat(state.slice(index + 1));
  }
};
