import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { loginRedcuer } from 'Components/login';
import { messageReducer } from 'Components/messaging';

export default history => {
  return combineReducers({
    chatt: combineReducers({ login: loginRedcuer, messages: messageReducer }),
    router: connectRouter(history)
  });
};
