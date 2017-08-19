export const SET_TOP_WINDOW = 'SET_TOP_WINDOW';

const initialState: object = {
  appId: 0,
  zIndex: 4,
  left: 300,
  top: 0
}

export function topWindowReducer(state = initialState, action){
  switch (action.type) {
    default:
      return state;
    case SET_TOP_WINDOW:
      return Object.assign(
        {},
        state,
        (<any>Object).entries({appId: action.window.appId, zIndex: action.window.zIndex, top: action.window.top, left: action.window.left})
          .filter(([key, value]) => value !== undefined)
          .reduce((obj, [key, value]) => (obj[key] = value, obj), {})
      )
  }
};
