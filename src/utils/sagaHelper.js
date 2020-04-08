import { all } from 'redux-saga/effects';
import { watchAndLoadMessages, MessageService } from '../components/messaging';
import { watchAndSendMessage, establishConnection } from '../components/messaging/sendMessage';
import {
  watchAndLoadFriends,
  watchAndLoadMessagesForFriend,
  FriendService
} from '../components/friends';

export default function* rootSaga(services) {
  yield all([
    watchAndLoadMessages(services),
    // watchAndSendMessage(services),
    // establishConnection(),
    watchAndLoadFriends(services),
    watchAndLoadMessagesForFriend(services)
  ]);
}

export function configureServices() {
  return {
    messageService: MessageService,
    friendService: FriendService
  };
}
