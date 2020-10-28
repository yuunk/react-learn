import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// context
import AuthContext from '../../context/AuthContext';


import './Header.scss';

class Header extends Component {

  static contextType = AuthContext;

  state = {
    navigation: ''
  }

  loginNav = () => {

  }

  updateNav = () => {
    if (this.context.isLogin) {
      return (
        <React.Fragment>
          <Link
            to="/"
          >Home</Link>
          <a onClick={(show, type) => this.props.updateModal(true, 'logout')}>logout</a>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Link
            to="/"
          >Home</Link>
          <Link
            to="/signup"
          >signup</Link>
        </React.Fragment>
      )
    }
  }
  
  componentDidMount = () => {
  }


  render() {

    return (
      <header className="Header">
        <nav className="Header__nav">
          {this.updateNav()}
        </nav>
      </header>
    );
  }
}

export default Header;