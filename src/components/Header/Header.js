import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import style from './Header.module.css';
import { logout } from '../../services/loginOperations';
import { authorization, getUser } from '../../services/LoginSelectors';

class Header extends Component {
  state = {};

  handleLogout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    const { user, isAuth } = this.props;
    return (
      <div className={style.header}>
        <ul className={style.list}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {!isAuth && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/singup">Singup</Link>
            </>
          )}
        </ul>
        {isAuth && (
          <div className={style.infoUser}>
            <h3>User name: {user.name}</h3>
            <button
              type="button"
              onClick={this.handleLogout}
              className={style.button}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mstp = state => ({
  user: getUser(state),
  isAuth: authorization(state),
});

const mdtp = {
  logout,
};

export default connect(mstp, mdtp)(Header);
