import { all } from 'redux-saga/effects';
import { watchAndLoadMessages, MessageService } from 'Components/messaging';

export default function* rootSaga(services) {
  yield all([watchAndLoadMessages(services)]);
}

export function configureServices() {
  return {
    messageService: MessageService
  };
}
