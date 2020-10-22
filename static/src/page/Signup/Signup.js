import React, { Component } from 'react';

import './Signup.scss';
import './SignupForm.scss';

class Signup extends Component {

  render() {
    return (
      <div className="Signup">
        <h2 className="Signup__ttl">Sign Up</h2>

        <form action="/api/singup" method="post" className="SignupForm" name="signupForm">
          <div className="SignupForm__row">
            <label className="SignupForm__label">email</label>
            <input type="email" name="email" />
          </div>
          <div className="SignupForm__row">
            <label className="SignupForm__label">user-name</label>
            <input type="text" name="name" />
          </div>
          <div className="SignupForm__row">
            <label className="SignupForm__label">password</label>
            <input type="password" name="password" />
          </div>
          <div className="SignupForm__row">
            <button className="SignupForm__button">submit</button>
          </div>
        </form>
        
      </div>
    )
  }

}

export default Signup;
