import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { loginRedcuer } from 'Components/login';

export default history => {
  return combineReducers({
    login: loginRedcuer,
    router: connectRouter(history)
  });
};
