import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export default (injectedReducers, history) => {
  return combineReducers({
    router: connectRouter(history)
  });
};
