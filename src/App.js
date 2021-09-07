import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from './components/About/About';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Singup from './components/Singup/Singup';
import { refresh } from './services/loginOperations';

class App extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.refresh();
  }

  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <ProtectedRoute path="/about" component={About} redirectTo="/login" />
          <Route path="/login" component={Login} />
          <Route path="/singup" component={Singup} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

const mdtp = {
  refresh,
};

export default connect(null, mdtp)(App);
