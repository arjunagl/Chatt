import { put, takeEvery, all } from 'redux-saga/effects';

export function* login(userName, password) {
  yield put({ type: 'CHATT_LOGIN' });
  console.log('Hello Sagas!');
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchLoginAsync() {
  yield takeEvery('CHATT_LOGIN', login);
}

export default function* rootSaga() {
  yield all([watchLoginAsync()]);
}

export function* helloSaga() {
  console.log('Hello Sagas!');
}
