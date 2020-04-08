import newChattConnection from '../services/chattService';
import { Store, Middleware } from 'redux';

let clientConnection: any;

export const socketReader = (store: Store) => (next: Middleware) => (action: any) => {
  if (action.type === 'ESTABLISH_CONNECTION') {
    const loginId = store.getState().chatt.login.userName;
    console.log(`loginId = ${loginId}`);
    clientConnection = newChattConnection(loginId);
    clientConnection.incomingStream.subscribe((val: { data: string }) => {
      const messageAction = {
        type: 'INCOMING_MESSAGE',
        ...JSON.parse(val.data)
      };
      store.dispatch(messageAction);
    });
  } else if (action.type === 'SEND_MESSAGE') {
    clientConnection.sendMessage({
      to: 'testuser1',
      message: action.message
    });
    store.dispatch({
      type: 'SEND_MESSAGE_DONE',
      status: 'success',
      message: action.message,
      from: action.from,
      to: action.to
    });
  }

  return next(action);
};
