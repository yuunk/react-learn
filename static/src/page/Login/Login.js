import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// context
import AuthContext from  '../../context/AuthContext';

// components
import UserForm from '../../components/UserForm/UserForm';

class Login extends Component {

  state = {
    loginToken: ''
  }

  static contextType = AuthContext;

  exeSuccessApi = (response) => {
    console.log(response.data.access_token);
    localStorage.setItem('access_token', response.data.access_token);
    this.context.login();
    this.props.history.push('/');
  }

  render() {
    return (

      <UserForm pageTitle="login" apiUrl="/api/auth/login"
        exeSuccessApi={(token) => this.exeSuccessApi(token)} />

    )
  }

}

export default withRouter(Login);
