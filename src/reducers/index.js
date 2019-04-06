import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { loginRedcuer } from '../components/login';
import { messageReducer } from '../components/messaging';

export default history => {
  return combineReducers({
    chatt: combineReducers({ login: loginRedcuer, messages: messageReducer }),
    router: connectRouter(history)
  });
};
