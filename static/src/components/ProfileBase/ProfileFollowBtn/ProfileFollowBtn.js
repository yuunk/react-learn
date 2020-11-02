import React, { Component } from 'react';
import axios from 'axios';

// context
import ProfileContext from '../../../context/ProfileContext';


class ProfileFollowBtn extends Component {

  static contextType = ProfileContext;

  updateFollow = (api) => {
    const token = localStorage.getItem('access_token');

    if (token === null) {
      // modalを出してログインを促す
    }

    const profileUserId = this.context.profileId;

    axios.post(api, {
      profileUserId: profileUserId
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(response => {
      this.props.updateFollow(response.data.follow);
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }

  componentDidMount = () => {
    this.updateFollow('/api/follower/fetch');
  }

  render() {
    return (
      <button
        className={this.props.className}
        onClick={() => { this.updateFollow('/api/follower/update') }}
      >
        {this.props.follow ? 'フォロー中' : 'フォロー'}
      </button>
    );
  }
  
}

export default ProfileFollowBtn;