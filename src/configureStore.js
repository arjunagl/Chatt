import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createReducer from './reducers';
import history from './utils/history';

export default () => {
  const store = createStore(
    createReducer(null, history),
    {},
    compose(applyMiddleware(routerMiddleware(history)))
  );
  return store;
};
