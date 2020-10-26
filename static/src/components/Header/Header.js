import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CheckUser from '../CheckUser/CheckUser';

import './Header.scss';

class Header extends Component {

  loginNav = () => {
    return (
      <React.Fragment>
        <Link
          to="/"
        >Home</Link>
        <a onClick={(show, type) => this.props.updateModal(true, 'logout')}>logout</a>
      </React.Fragment>
    );
  }

  render() {
    return (
      <header className="Header">
        <nav className="Header__nav">
          <CheckUser
            contentLogin={this.loginNav()}
            contentReverse={false}
          >
            <Link
              to="/"
            >Home</Link>
            <Link
              to="/signup"
            >signup</Link>
          </CheckUser>
        </nav>
      </header>
    );
  }
}

export default Header;