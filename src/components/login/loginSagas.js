import { put, takeEvery, all } from 'redux-saga/effects';

export function* login(userName, password) {
  // For the moment I'm just hard coding everything, will call the actual backend later
  yield put({ type: 'CHATT_LOGIN_DONE', status: 'success', userName: 'Andy' });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchLoginAsync() {
  yield takeEvery('CHATT_LOGIN', login);
}

export default function* rootSaga() {
  yield all([watchLoginAsync()]);
}
