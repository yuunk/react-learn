import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import UserForm from '../../components/UserForm/UserForm';


class Signup extends Component {

  execSuccessApi = () => {
    this.props.history.push('/');
  }

  render() {
    return (

      <UserForm
        pageTitle="signup"
        apiUrl="/api/signup"
        exeSuccessApi={this.execSuccessApi}
      />

    )
  }

}

export default withRouter(Signup);
