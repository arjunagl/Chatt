const initialState = {
  confirmedFriends: []
};

export default function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_FRIENDS_DONE':
      // Merge the friends, there is a possibility that there could be duplicates, so need to remove the duplicates before merging
      // return action.start
      //   ? { ...state, confirmedFriends: [...action.friends] }
      //   : { ...state, confirmedFriends: [...state.confirmedFriends, ...action.friends] };
      return { ...state, confirmedFriends: [...state.confirmedFriends, ...action.friends] };
    // case 'SEARCH_FRIENDS_DONE':
    //   return { ...state, confirmedFriends: action.friends };
    case 'CLEAR_FRIENDS':
      return { ...state, confirmedFriends: [] };
    case 'FRIENDS_FILTER':
      return { ...state, filter: action.filterText, confirmedFriends: [] };
    default:
      return state;
  }
}
