import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, redirect } from '../actions';

class Auth extends Component {
  login() {
    this.props.dispatch(login(this.nameInput.value, '/'));
  }

  render() {
    return (
      <div>
        <input ref={(elem) => this.nameInput = elem}/>
        <button onClick={::this.login}>Login</button>
      </div>
    )
  }
}

export default connect()(Auth);
