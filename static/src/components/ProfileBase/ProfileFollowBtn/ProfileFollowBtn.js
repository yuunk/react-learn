import React, { Component } from 'react';
import axios from 'axios';

// context
import ProfileContext from '../../../context/ProfileContext';


class ProfileFollowBtn extends Component {

  updateFollow = (profileId) => {
    const token = localStorage.getItem('access_token');

    if (token === null) {
      // modalを出してログインを促す
    }

    const profileUserId = profileId;
    // console.log(props.location.search);
    axios.post('/api/follower/update', {
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

  render() {
    return (
      <ProfileContext.Consumer>
        {
          (context) => {
            return (
              <button
                className={this.props.className}
                onClick={() => { this.updateFollow(context.profileId) }}
              >
                {this.props.follow ? 'フォロー中' : 'フォロー'}
              </button>
            );
          }
        }
      </ProfileContext.Consumer>
    );
  }
  
}

export default ProfileFollowBtn;