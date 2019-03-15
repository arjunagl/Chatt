import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { rootLoginSaga, helloSaga } from 'Components/login';
import createReducer from './reducers';
import history from './utils/history';

// Setup redux saga
const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    createReducer(null, history),
    {},
    compose(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );

  sagaMiddleware.run(helloSaga);
  return store;
};
