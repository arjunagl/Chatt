import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './utils/pwaHelper';
import App from './App';
import configureStore from './utils/configureStore';
import history from './utils/history';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// Just uncomment this line to register the service worker and get it working
(async function() {
  await registerServiceWorker();
})();
