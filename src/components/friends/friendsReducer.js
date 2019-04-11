const initialState = {
  confirmedFriends: []
};

export default function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_FRIENDS_DONE':
      return { ...state, confirmedFriends: action.friends };
    default:
      return state;
  }
}
