import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import style from './Login.module.css';
import withAuthRedirectHOC from '../../HOC/withAuthRedirect';
import { singup } from '../../services/loginOperations';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.singup(this.state);
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { password, email } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className={style.form}>
          <label htmlFor="password">
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              id="email"
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              id="password"
            />
          </label>
          <button type="submit" className={style.button}>
            Submit
          </button>
        </form>
        <div className={style.link}>
          or <Link to="singup">SingUp</Link>
        </div>
      </div>
    );
  }
}

const mdtp = {
  singup,
};

export default compose(connect(null, mdtp), withAuthRedirectHOC)(Login);
