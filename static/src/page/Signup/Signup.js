import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import './Signup.scss';
import './SignupForm.scss';

class Signup extends Component {

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
    console.log(event.target.name);

    const formData = new FormData();

    formData.append('email', event.target.email.value);
    formData.append('name', event.target.name.value);
    formData.append('password', event.target.password.value);

    axios
      .post('/api/signup', formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      .then(response => {
        console.log(response.data);
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error.response);

        const errorText = error.response.data.errors;

        let errorMsg = { ...this.state.errorMsg};

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

  render() {
    return (
      <div className="Signup">
        <h2 className="Signup__ttl">Sign Up</h2>

        <form
          onSubmit={this.handleSubmit}
          action="/api/singup"
          method="post"
          className="SignupForm"
          name="signupForm"
          rel={this.form}
        >
          <div className="SignupForm__row">
            <label className="SignupForm__label">email</label>
            <input type="email" name="email" />
            <span className="SignupForm__error">{this.state.errorMsg.email}</span>
          </div>
          <div className="SignupForm__row">
            <label className="SignupForm__label">user-name</label>
            <input type="text" name="name" />
            <span className="SignupForm__error">{this.state.errorMsg.name}</span>
          </div>
          <div className="SignupForm__row">
            <label className="SignupForm__label">password</label>
            <input type="password" name="password" />
            <span className="SignupForm__error">{this.state.errorMsg.password}</span>
          </div>
          <div className="SignupForm__row">
            <button
              type="submit"
              className="SignupForm__button"
            >submit</button>
          </div>
        </form>
        
      </div>
    )
  }

}

export default withRouter(Signup);
