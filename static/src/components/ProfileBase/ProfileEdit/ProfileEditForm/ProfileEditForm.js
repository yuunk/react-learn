import React, { Component } from 'react';
import axios from 'axios';

// style
import './ProfileEditForm.scss';

class ProfileEditFrom extends Component {

  state = {
    name: '',
    introduction: '',
  }

  updateProfile = (event) => {
    event.preventDefault();

    const token = localStorage.getItem('access_token');
    const formData = new FormData();

    formData.append('name', event.target.name.value);
    formData.append('text', event.target.introduction.value);

    axios.post('/api/profile/update', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'content-type': 'multipart/form-data',
      }
    }).then(response => {
      this.props.updateProfile(response.data.name, response.data.text);
    }).catch(error => {
      console.log(error);
    });

  }


  render() {
    return (
      <form
        onSubmit={this.updateProfile}
        className="ProfileEditForm"
      >
        <div className="ProfileEditForm__row">
          <label className="ProfileEditForm__label">Name</label>
          <input
            className="ProfileEditForm__input"
            name="name"
            defaultValue={this.props.name}></input>
        </div>
        <div className="ProfileEditForm__row">
          <label className="ProfileEditForm__label">自己紹介</label>
          <textarea
            name="introduction"
            defaultValue={this.props.introduction}
          ></textarea>
        </div>
        <button
          className="ProfileEditForm__button"
          type="submit"
          >save</button>
      </form>
    );
  }
}

export default ProfileEditFrom;