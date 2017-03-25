import React, { Component } from 'react';
import { Link } from 'react-router'


class App extends Component {
  render() {
    return (
      <div>
        <div className="marg-b-10">
          <Link to="/" className="marg-r-5">Главная</Link>
          <Link to="/login">Вход</Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default App
