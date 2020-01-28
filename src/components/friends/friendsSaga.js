import { put, takeEvery, call, select } from 'redux-saga/effects';

function* loadFriends(friendService, reset, action) {
  // Read the number of friends already loaded in order to implement paging
  const getFriends = state => state.chatt.friends.confirmedFriends;
  const getFilterString = state => state.chatt.friends.filter;
  const loadedFriends = yield select(getFriends);
  const filterString = yield select(getFilterString);
  const friends = yield call(
    friendService.loadFriendsFor,
    '1',
    loadedFriends && loadedFriends.length && !reset > 0 ? loadedFriends.length : 0,
    filterString
  );
  yield put({
    type: 'LOAD_FRIENDS_DONE',
    status: 'success',
    friends,
    start: action.start || reset
  });
}

export default function* watchAndLoadFriends({ friendService }) {
  yield takeEvery('LOAD_FRIENDS', loadFriends, friendService, false);
}

export function* watchAndFilterFriends({ friendService }, friendVal) {
  yield takeEvery('FRIENDS_FILTER', loadFriends, friendService, true);
}

function* loadMessages(messageService) {
  const messages = messageService.loadMessagesFor('');
  yield put({ type: 'SELECT_FRIEND_DONE', status: 'success' });
  yield put({ type: 'LOAD_MESSAGES_DONE', status: 'success', messages });
}

export function* watchAndLoadMessagesForFriend({ messageService }) {
  yield takeEvery('SELECT_FRIEND', loadMessages, messageService);
}
