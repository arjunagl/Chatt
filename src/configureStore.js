import { rootLoginSaga } from 'Components/login';
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import history from './utils/history';

// Setup redux-devtools-extension
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

// Setup redux saga
const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    createReducer(null, history),
    {},
    composeEnhancers(compose(applyMiddleware(routerMiddleware(history), sagaMiddleware)))
  );

  sagaMiddleware.run(rootLoginSaga);
  return store;
};
