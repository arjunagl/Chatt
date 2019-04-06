import React from 'react';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import PrivateRouteComponent from './components/route';

const LoadableLoginComponent = Loadable({
  loader: () => import('./components/login'),
  loading: () => <div>Loading</div>
});

const LoadableLandingPageComponent = Loadable({
  loader: () => import('./components/landing'),
  loading: () => <div>Loading</div>
});

const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={LoadableLoginComponent} />
      <Route exact path="/settings" render={() => <div>Settings Page</div>} />
      <PrivateRouteComponent path="/" component={LoadableLandingPageComponent} />
    </Switch>
  </div>
);

export default hot(module)(App);
