import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRouteComponent = React.memo(({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
});

const mapStateToProps = () => ({
  isLoggedIn: false
});

export default connect(
  mapStateToProps,
  null
)(PrivateRouteComponent);
