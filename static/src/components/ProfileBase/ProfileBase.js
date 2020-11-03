import React, { Component } from 'react';
import axios from 'axios';

// context
import ProfileContext from '../../context/ProfileContext';
import ProfileBaseContext from '../../context/ProfileBaseContext';

// component
import ProfileHead from './ProfileHead/ProfileHead';
import ProfileEdit from './ProfileEdit/ProfileEdit';
import ProfileAction from './ProfileAction/ProfileAction';
import ProfileHeader from './ProfileHeader/ProfileHeader';

// style
import './ProfileBase.scss';

class ProfileBase extends Component {

  static contextType = ProfileContext;

  state = {
    isMounted: false,
    editPanelClass: 'Profile__editPanel',
    editPanel: false,
    data: {
      profile: {
        name: '',
        introduction: '',
      },
      record: {
        userPosts: 0,
        follow: 0,
        follower: 0,
      },
      followPanel: {
        followUsers: {},
        followerUsers: {},
      }
    },
    action: {
      updateFollow: false,
    },
    isMypage: false,
    userId: null,
    header: {
      active: false,
      type: ''
    }
  }

  initData = () => {
    const token = localStorage.getItem('access_token');

    let api = '';

    if (this.props.userId) {
      api = '/api/profile/init/' + this.props.userId;
    } else {
      api = '/api/profile/init';
    }

    axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(response => {
      if (this.state.isMounted) {
        console.log(response.data);

        this.setState({
          userId: response.data.userId,
          data: {
            profile: {
              name: response.data.profile.name,
              introduction: response.data.profile.text
            },
            record: {
              userPosts: response.data.record.userPosts,
              follow: response.data.record.follow,
              follower: response.data.record.follower
            },
            followPanel: {
              followerUsers: response.data.followPanel.followerUsers,
              followUsers: response.data.followPanel.followUsers
            }
          }
        });
        
      }
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
      if (this.state.isMounted) {
        this.updateRecord(
          response.data.userPosts,
          response.data.follow,
          response.data.follower
        );
      }
    }).catch(error => {
      console.log(error);
    });
  }

  updateProfile = (name, introduction) => {
    let data = { ...this.state.data };
    data.profile.name = name;
    data.profile.introduction = introduction;
    this.setState({ data: data });
  }

  // update state
  updateRecord = (userPosts, follow, follower) => {
    let data = { ...this.state.data };
    data.record.userPosts = userPosts;
    data.record.follow = follow;
    data.record.follower = follower;

    this.setState({ data: data });
  }

  updateHeader = (type, isActive) => {
    this.setState({
      header: {
        type: type,
        active: isActive
      }
    });
  }

  updateFollow = (isUpdate) => {
    this.setState({
      action: {
        updateFollow: isUpdate
      }
    });
  }

  myprofileContent = () => {
    return (
      <React.Fragment>
        <ProfileEdit
          name={this.state.data.profile.name}
          introduction={this.state.data.profile.introduction}
          updateProfile={(name, introduction) => { this.updateProfile(name, introduction) }}
        />
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.setState({ isMounted: true }, () => {
      this.initData();
    });
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
  }

  render() {
    return (
      <ProfileBaseContext.Provider
        value={{
          userId: this.state.userId,
          record: {
            data: {
              userPosts: this.state.data.record.userPosts,
              follow: this.state.data.record.follow,
              follower: this.state.data.record.follower
            },
            update: this.fetchRecord
          },
          header: {
            active: this.state.header.active,
            type: this.state.header.type,
            update: this.updateHeader
          },
          followPanel: {
            data: {
              followerUsers: this.state.data.followPanel.followerUsers,
              followUsers: this.state.data.followPanel.followUsers
            }
          }
        }}
      >
        <div className="ProfileBase">
          <ProfileHeader
            type={this.state.header.type}
          />
          <div className="ProfileBase__inner">
            <ProfileHead />
            <p className="Profile__profile">{this.state.data.profile.name}</p>
            <p className="Profile__profile">{this.state.data.profile.introduction}</p>
            {this.props.myprofile ? this.myprofileContent() : null}
            {this.props.myprofile ? null : <ProfileAction />}
          </div>
        </div>
      </ProfileBaseContext.Provider>
    );
  }
}

export default ProfileBase;