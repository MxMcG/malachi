import React, { Component } from 'react';
import { Link } from 'react-router';
import LoginLinks from '../../common/containers/LoginContainer.js';

export default class Login extends Component {

  constructor(props) {
    super(props);
  }

  handleLogin(e) {
    const login = this.props.loginData;
    e.preventDefault();
    this.props.dispatchSubmitLoginForm(login);
  }

  mergeWithCurrentState(change) {
    return Object.assign(this.props.loginData, change);
  }

  handleUsername(event) {
    const newState = this.mergeWithCurrentState({
      username: event.target.value
    });
    this.emitChange(newState);
  }

  handlePassword(event) {
    const newState = this.mergeWithCurrentState({
      password: event.target.value
    });
    this.emitChange(newState);
  }

  emitChange(newState) {
    this.props.dispatchChangeLoginForm(newState);
  }

  render() {
    const { headline, cattleImg, testImg } = this.props.componentContent;
    const cdnImageBase = this.props.cdnImageBase;
    console.log('PROPS', this.props)
    return (
      <div className="login" >
        <h1>Login</h1>
        <div className="login">
          <form className="loginForm" onSubmit={this.handleLogin.bind(this)}>
            <label>Email</label>
            <input type="text" onChange={this.handleUsername.bind(this)}></input>
            <br></br>
            <label>Password</label>
            <input type="password" onChange={this.handlePassword.bind(this)}></input>
            <input type="submit"/>
          </form>
        </div>
      </div>
    );
  }
}
