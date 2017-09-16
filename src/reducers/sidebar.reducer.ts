const initState: object = {
  isOpen: false,
};

export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';
export const OPEN_SIDEBAR = 'OPEN_SIDEBAR';

export function SidebarReducer(state = initState, action){
  switch (action.type) {
    default:
      return state;
  }
};
