import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga, { configureServices } from './sagaHelper';
import createReducer from '../reducers';
import history from './history';
import { socketReader } from '../middlewares/socketConnectionMiddleWare';

// Setup redux-devtools-extension
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

// Setup redux saga
const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    createReducer(history),
    {},
    composeEnhancers(
      compose(applyMiddleware(routerMiddleware(history), sagaMiddleware, socketReader))
    )
  );

  sagaMiddleware.run(rootSaga, configureServices());
  return store;
};
