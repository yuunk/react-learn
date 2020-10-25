import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import UserForm from '../../components/UserForm/UserForm';


class Signup extends Component {

  render() {
    return (

      <UserForm pageTitle="signup" apiUrl="/api/signup" />

    )
  }

}

export default withRouter(Signup);
