import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import './UserForm.scss';

class UserForm extends Component {

  state = {
    email: '',
    name: '',
    password: '',
    errorMsg: {
      email: '',
      name: '',
      password: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: event.target.email.value });

    const formData = new FormData();

    formData.append('email', event.target.email.value);
    formData.append('name', event.target.name.value);
    formData.append('password', event.target.password.value);

    axios
      .post(this.props.apiUrl, formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      .then(response => {
        this.props.exeSuccessApi(response);
      })
      .catch(error => {

        console.log(error);
        const errorText = error.response.data.errors;

        let errorMsg = { ...this.state.errorMsg };

        if (errorText.email) {
          errorMsg.email = errorText.email;
        }
        if (errorText.name) {
          errorMsg.name = errorText.name;
        }
        if (errorText.password) {
          errorMsg.password = errorText.password;
        }

        this.setState({ errorMsg: errorMsg });
      });
  }

  getNameParts = () => {
    if (this.props.pageTitle === 'signup') {
      return (
        <div className="UserForm__row">
          <label className="UserForm__label">user-name</label>
          <input className="UserForm__input" type="text" name="name" />
          <span className="UserForm__error">{this.state.errorMsg.name}</span>
        </div>
      );
    }
  }

  render() {

    return (
      <div className="UserForm">
        <h2 className="UserForm__ttl">{this.props.pageTitle}</h2>

        <form
          onSubmit={this.handleSubmit}
          action=""
          method="post"
          className="UserForm__form"
          name="signupForm"
          rel={this.form}
        >
          <div className="UserForm__row">
            <label className="UserForm__label">email</label>
            <input className="UserForm__input" type="email" name="email" />
            <span className="UserForm__error">{this.state.errorMsg.email}</span>
          </div>

          {this.getNameParts()}
          
          <div className="UserForm__row">
            <label className="UserForm__label">password</label>
            <input className="UserForm__input" type="password" name="password" />
            <span className="UserForm__error">{this.state.errorMsg.password}</span>
          </div>
          <div className="UserForm__row">
            <button
              type="submit"
              className="UserForm__button"
            >submit</button>
          </div>
        </form>

      </div>
    )
  }

}

export default withRouter(UserForm);
