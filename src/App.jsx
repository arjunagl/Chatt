import React from 'react';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';
import { Link, Route, Switch } from 'react-router-dom';

const LoadableLoginComponent = Loadable({
  loader: () => import('./components/login'),
  loading: () => <div>Loading</div>
});

const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/login" component={LoadableLoginComponent} />
      <Route exact path="/settings" render={() => <div>Settings Page</div>} />
    </Switch>
  </div>
);

export default hot(module)(App);
