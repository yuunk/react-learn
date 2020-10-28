import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

// context
import AuthContext from '../../context/AuthContext';
import ModalContext from '../../context/ModalContext';

// function


import './Header.scss';

class Header extends Component {

  static contextType = AuthContext;

  logout = () => {
    const token = localStorage.getItem('access_token');

    if (token !== null) {
      axios.get('/api/auth/logout', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then(response => {
          if (response.status === 200 && response.data) {
            this.props.history.push('/');
            this.context.logout();
          }
        })
        .catch(error => {
          console.log(error);
          this.props.history.push('/');
        });
    } else {
      this.props.history.push('/');
    }
  }

  updateNav = () => {
    if (this.context.isLogin) {
      return (
        <React.Fragment>
          <Link
            to="/"
          >Home</Link>
          <ModalContext.Consumer>
            {
              (context) =>
                <button
                  onClick={(text, func) => context.open('ログアウトしますか', this.logout)}
                >logout
                </button>
            }
          </ModalContext.Consumer>
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

export default withRouter(Header);