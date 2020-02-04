import { put, takeEvery, call, select } from 'redux-saga/effects';

function* loadFriends(friendService, action) {
  const getFriends = state => state.chatt.friends.confirmedFriends;
  const getFilterString = state => state.chatt.friends.filter;
  const loadedFriends = yield select(getFriends);
  const filterString = yield select(getFilterString);
  const friends = yield call(
    friendService.loadFriendsFor,
    '1',
    loadedFriends && loadedFriends.length > 0 ? loadedFriends.length : 0,
    filterString
  );
  yield put({
    type: 'LOAD_FRIENDS_DONE',
    status: 'success',
    friends
  });
}

export default function* watchAndLoadFriends({ friendService }) {
  yield takeEvery('LOAD_FRIENDS', loadFriends, friendService, false);
}

function* loadMessages(messageService) {
  const messages = messageService.loadMessagesFor('');
  yield put({ type: 'SELECT_FRIEND_DONE', status: 'success' });
  yield put({ type: 'LOAD_MESSAGES_DONE', status: 'success', messages });
}

export function* watchAndLoadMessagesForFriend({ messageService }) {
  yield takeEvery('SELECT_FRIEND', loadMessages, messageService);
}
