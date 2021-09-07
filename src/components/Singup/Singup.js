import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import withAuthRedirectHOC from '../../HOC/withAuthRedirect';
import { login } from '../../services/loginOperations';
import style from './Singup.module.css';

class Signup extends Component {
  state = {
    name: '',
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
    this.props.login(this.state);
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  render() {
    const { name, password, email } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className={style.form}>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              id="name"
            />
          </label>
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
          or <Link to="singup">Login</Link>
        </div>
      </div>
    );
  }
}

const mdtp = {
  login,
};

export default compose(connect(null, mdtp), withAuthRedirectHOC)(Signup);
