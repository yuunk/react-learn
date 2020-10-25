import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';


class Login extends Component {

  render() {
    return (

      <UserForm pageTitle="Login" apiUrl="/api/login" />

    )
  }

}

export default withRouter(Login);
