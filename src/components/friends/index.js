import FriendsComponent from './FriendsComponent';
import watchAndLoadFriends, {
  watchAndLoadMessagesForFriend,
  watchAndFilterFriends
} from './friendsSaga';
import FriendService from './friendsService';
import friendsReducer from './friendsReducer';

export default FriendsComponent;
export {
  watchAndLoadFriends,
  FriendService,
  friendsReducer,
  watchAndLoadMessagesForFriend,
  watchAndFilterFriends
};
