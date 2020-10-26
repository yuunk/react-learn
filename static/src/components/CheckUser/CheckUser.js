import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class CheckUser extends Component {

  state = {
    hasToken: false,
    isLogin: false
  }

  checkLogin = () => {

    const loginToken = localStorage.getItem('loginToken');
    const email = localStorage.getItem('email');

    if (loginToken !== null) {

      axios
        .post('/api/user/check', {
          'loginToken': loginToken,
          'email': email
        },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then(response => {

          if (response.data === true) {
            this.setState({ isLogin: true });
          } else {
            this.setState({ isLogin: false });
          }

        })
        .catch(error => {
          console.log(error);
        })

    }
  }

  componentDidMount = () => {
    this.checkLogin();
  }

  render() {

    let content;

    if (this.state.isLogin && !this.props.contentReverse) {
      content = this.props.contentLogin;
    }

    if (!this.state.isLogin) {
      content = this.props.children;
    }

    return (
      <React.Fragment>
        {content}
      </React.Fragment>
    )
  }

}

export default withRouter(CheckUser);