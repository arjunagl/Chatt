import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { loginRedcuer } from '../components/login';
import { messageReducer } from '../components/messaging';
import { friendsReducer } from '../components/friends';

export default history => {
  return combineReducers({
    chatt: combineReducers({
      login: loginRedcuer,
      messages: messageReducer,
      friends: friendsReducer
    }),
    router: connectRouter(history)
  });
};
