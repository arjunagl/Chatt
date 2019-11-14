const initialState = {
  confirmedFriends: []
};

export default function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_FRIENDS_DONE':
      // Merge the friends
      return { ...state, confirmedFriends: [...state.confirmedFriends, ...action.friends] };
    default:
      return state;
  }
}
