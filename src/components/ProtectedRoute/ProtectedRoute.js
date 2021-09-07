import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authorization } from '../../services/LoginSelectors';

const ProtectedRoute = ({
  redirectTo = '/',
  isAuth,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: redirectTo,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const mstp = state => ({
  isAuth: authorization(state),
});

export default connect(mstp)(ProtectedRoute);
