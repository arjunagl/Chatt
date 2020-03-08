import { put, takeEvery } from 'redux-saga/effects';
import newChattConnection from '../../../services/chattService';
import { select } from 'redux-saga/effects';

let clientConnection;

function* sendMessage([messageService], { message, from, to }) {
  messageService.sendMessage(message, from, to);
  clientConnection.sendMessage();
  yield put({ type: 'SEND_MESSAGE_DONE', status: 'success', message, from, to });
}

export function* watchAndSendMessage({ messageService }) {
  yield takeEvery('SEND_MESSAGE', sendMessage, [messageService]);
}

export function* establishConnection() {
  const loginId = yield select(state => state.chatt.login.userName);
  console.log(loginId);
  yield takeEvery('ESTABLISH_CONNECTION', () => {
    clientConnection = newChattConnection(loginId);
  });
}
