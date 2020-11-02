import React, { Component } from 'react';
import axios from 'axios';

// context
import ProfileBaseContext from '../../context/ProfileBaseContext';

// component
import ProfileHead from './ProfileHead/ProfileHead';
import ProfileEdit from './ProfileEdit/ProfileEdit';
import ProfileAction from './ProfileAction/ProfileAction';

// style
import './ProfileBase.scss';

class ProfileBase extends Component {

  state = {
    editPanelClass: 'Profile__editPanel',
    editPanel: false,
    profile: {
      name: '',
      introduction: '',
    },
    isMypage: false,
    record: {
      userPosts: 0,
      follow: 0,
      follower: 0,
    },
  }

  fetchProfile = () => {
    const token = localStorage.getItem('access_token');

    let api = '';

    if (this.props.userId) {
      api = '/api/profile/fetch/' + this.props.userId;
    } else {
      api = '/api/profile/fetch';
    }

    axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(response => {
      console.log(response);
      this.updateProfile(response.data.name, response.data.text)
    }).catch(error => {
      console.log(error);
    });
  }

  fetchRecord = () => {
    const token = localStorage.getItem('access_token');
    let api = '';

    if (this.props.userId) {
      api = '/api/profile/record/' + this.props.userId;
    } else {
      api = '/api/profile/record';
    }

    axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(response => {
      console.log(response.data);
      this.setState({
        record: {
          userPosts: response.data.userPosts,
          follow: response.data.follow,
          follower: response.data.follower
        }
      });
    }).catch(error => {
      console.log(error);
    });
  }

  updateProfile = (name, introduction) => {
    this.setState({
      profile: {
        name: name,
        introduction: introduction
      }
    });
  }

  myprofileContent = () => {
    return (
      <React.Fragment>
        <ProfileEdit
          name={this.state.profile.name}
          introduction={this.state.profile.introduction}
          updateProfile={(name, introduction) => { this.updateProfile(name, introduction) }}
        />
      </React.Fragment>
    );
  }

  componentDidMount = () => {
    this.fetchProfile();
    this.fetchRecord();
  }

  render() {
    return (
      <ProfileBaseContext.Provider
        value={{
          record: {
            data: {
              userPosts: this.state.record.userPosts,
              follow: this.state.record.follow,
              follower: this.state.record.follower
            },
            update: this.fetchRecord
          },
        }}
      >
        <div className="ProfileBase">
          <ProfileHead />
          <p className="Profile__profile">{this.state.profile.name}</p>
          <p className="Profile__profile">{this.state.profile.introduction}</p>
          {this.props.myprofile ? this.myprofileContent() : null}
          {this.props.myprofile ? null : <ProfileAction />}
        </div>
      </ProfileBaseContext.Provider>
    );
  }
}

export default ProfileBase;