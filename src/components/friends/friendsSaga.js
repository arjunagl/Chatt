import { put, takeEvery, call } from 'redux-saga/effects';

function* loadFriends(friendService, apolloClient) {
  const friends = yield call(friendService.loadFriendsFor, '1', apolloClient);
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
