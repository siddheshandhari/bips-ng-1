export const SET_TOP_WINDOW = 'SET_TOP_WINDOW';

export class Window {
  constructor(
    public zIndex: number,
    public left: number,
    public top: number
  ){}
}

export function topWindowReducer(state: Window = new Window(4, 300, 0), action){
  switch (action.type) {
    default:
      return state;
    case SET_TOP_WINDOW:
      return new Window(action.window.zIndex, action.window.left, action.window.top);
  }
};
