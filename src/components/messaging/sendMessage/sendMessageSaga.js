import { put, takeEvery } from 'redux-saga/effects';

function* sendMessage([messageService], { message, from, to }) {
  messageService.sendMessage(message, from, to);
  yield put({ type: 'SEND_MESSAGE_DONE', status: 'success', message, from, to });
}

export default function* watchAndSendMessage({ messageService }) {
  yield takeEvery('SEND_MESSAGE', sendMessage, [messageService]);
}
