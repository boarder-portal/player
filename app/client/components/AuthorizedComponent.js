import React, { Component } from 'react';
import { connect } from 'react-redux';
import { redirect } from '../actions';

export default (Component) => {
  class Wrapped extends React.Component {
    componentWillMount() {
      const { user, dispatch } = this.props;

      if (!user.authorized) {
        dispatch(redirect('/login'));
      }
    }

    render() {
      const { user, ...rest } = this.props;

      if (!user) {
        return false;
      }

      return (
        <Component {...rest}/>
      );
    }
  }

  return connect(({ user }) => ({
    user
  }))(Wrapped);
};
