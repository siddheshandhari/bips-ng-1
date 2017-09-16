const initState: object = {
  isOpen: true,
};

export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';
export const OPEN_SIDEBAR = 'OPEN_SIDEBAR';

export function SidebarReducer(state: object = initState, action){
  switch (action.type) {
    default:
      return state;
    case CLOSE_SIDEBAR:
      return Object.assign({}, state, {isOpen: false});
    case OPEN_SIDEBAR:
      return Object.assign({}, state, {isOpen: true});
  }
};
