import { eventChannel } from 'redux-saga';
import { call, take, put } from 'redux-saga/effects';

const messageChannel = new MessageChannel();
navigator?.serviceWorker?.controller?.postMessage(
  {
    type: 'INIT_PORT'
  },
  [messageChannel.port2]
);

const createWebPushChannel = () => {
  return eventChannel(emit => {
    messageChannel.port1.onmessage = event => {
      emit({ a: 'b' });
    };

    return () => {};
  });
};

export function* watchOnPushMessages() {
  const webPushChannel = yield call(createWebPushChannel);
  try {
    // An error from socketChannel will cause the saga jump to the catch block
    const payload = yield take(webPushChannel);
    // tslint:disable-next-line: object-shorthand-properties-first
    yield put({ type: 'INCOMING_PUSH_MESSAGE', payload });
  } catch (err) {
    console.error('socket error:', err);
  }
}
