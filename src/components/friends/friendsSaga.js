import { put, takeEvery, call, select } from 'redux-saga/effects';

function* loadFriends(friendService, apolloClient) {
  // Read the number of friends already loaded in order to implement paging
  const getFriends = state => state.chatt.friends.confirmedFriends;
  const loadedFriends = yield select(getFriends);
  const friends = yield call(
    friendService.loadFriendsFor,
    '1',
    loadedFriends && loadedFriends.length > 0 ? loadedFriends.length : 0,
    apolloClient
  );
  yield put({ type: 'LOAD_FRIENDS_DONE', status: 'success', friends });
}

export default function* watchAndLoadFriends({ friendService, apolloClient }) {
  yield takeEvery('LOAD_FRIENDS', loadFriends, friendService, apolloClient);
}

function* loadMessages(messageService) {
  const messages = messageService.loadMessagesFor('');
  yield put({ type: 'SELECT_FRIEND_DONE', status: 'success' });
  yield put({ type: 'LOAD_MESSAGES_DONE', status: 'success', messages });
}

export function* watchAndLoadMessagesForFriend({ messageService }) {
  yield takeEvery('SELECT_FRIEND', loadMessages, messageService);
}
