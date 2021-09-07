/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authorization } from '../services/LoginSelectors';

const withAuthRedirectHOC = BaseComponent => {
  class withAuthRedirect extends Component {
    componentDidMount() {
      const { isAuth, history } = this.props;
      if (!isAuth) return;
      history.replace('/');
    }

    componentDidUpdate() {
      const { isAuth, history } = this.props;
      if (!isAuth) return;

      if (history.location.state && history.location.state.from) {
        return history.replace(history.location.state.from);
      }

      history.replace('/');
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }

  const mstp = state => ({
    isAuth: authorization(state),
  });

  return connect(mstp)(withAuthRedirect);
};

export default withAuthRedirectHOC;
