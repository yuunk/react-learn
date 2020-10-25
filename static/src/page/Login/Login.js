import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';

class Login extends Component {

  state = {
    loginToken: ''
  }

  setToken = (token) => {
    // this.setState({ loginToken: token });
    console.log(token.data, 'ok');
  }

  render() {
    return (

      <UserForm pageTitle="login" apiUrl="/api/login" setToken={(token) => this.props.setToken(token)} />

    )
  }

}

export default withRouter(Login);
