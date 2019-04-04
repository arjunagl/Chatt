import { put, takeEvery } from 'redux-saga/effects';

function* loadMessages(messageService) {
  const messages = messageService.loadMessages();
  yield put({ type: 'LOAD_MESSAGES_DONE', status: 'success', messages });
}

export default function* watchAndLoadMessages({ messageService }) {
  yield takeEvery('LOAD_MESSAGES', loadMessages, messageService);
}
