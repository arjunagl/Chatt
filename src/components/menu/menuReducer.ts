const initialState = {
  menuDisplayed: false
};

interface ActionType {
  type: string;
}

export default function menuReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, menuDisplayed: !state.menuDisplayed };
    default:
      return state;
  }
}
