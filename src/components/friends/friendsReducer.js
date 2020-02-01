const initialState = {
  confirmedFriends: []
};

export default function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_FRIENDS_DONE':
      return { ...state, confirmedFriends: [...state.confirmedFriends, ...action.friends] };
    case 'CLEAR_FRIENDS':
      return { ...state, confirmedFriends: [] };
    case 'FRIENDS_FILTER':
      return { ...state, filter: action.filterText, confirmedFriends: [] };
    default:
      return state;
  }
}
