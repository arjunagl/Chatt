import { all } from 'redux-saga/effects';
import { watchAndLoadMessages, MessageService } from '../components/messaging';
import { watchOnPushMessages } from '../sagas/webPushSaga.ts';
import {
  watchAndLoadFriends,
  watchAndLoadMessagesForFriend,
  FriendService
} from '../components/friends';

export default function* rootSaga(services) {
  yield all([
    watchAndLoadMessages(services),
    watchAndLoadFriends(services),
    watchAndLoadMessagesForFriend(services),
    watchOnPushMessages()
  ]);
}

export function configureServices() {
  return {
    messageService: MessageService,
    friendService: FriendService
  };
}
