import React, { Component } from 'react';
import axios from 'axios';

// component
import ProfileEditForm from '../../components/ProfileEditForm/ProfileEditForm';
import ProfileRecord from '../../components/ProfileRecord/ProfileRecord';

// style
import './Profile.scss';

class Profile extends Component {

  state = {
    editPanelClass: 'Profile__editPanel',
    editPanel: false,
    profile: {
      name: '',
      introduction: '',
    }
  }

  activePanel = () => {
  }

  togglePanel = () => {
    if (this.state.editPanel) {
      this.setState({ editPanel: false });
      this.setState({ editPanelClass: 'Profile__editPanel' });
    } else {
      this.setState({ editPanel: true });
      this.setState({ editPanelClass: 'Profile__editPanel -active' });
    }
  }

  fetchProfile = () => {
    const token = localStorage.getItem('access_token');

    axios.get('api/profile/fetch', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(response => {
      console.log(response);
      this.setState({
        profile: {
          name: response.data.name,
          introduction: response.data.text
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

  componentDidMount = () => {
    this.fetchProfile();
  }

  render() {
    return (
      <div className="Profile">

        <div className="Profile__head">
          <div className="Profile__avator">
            <img />
          </div>
          <ProfileRecord />
        </div>
        <p className="Profile__profile">{this.state.profile.name}</p>
        <p className="Profile__profile">{this.state.profile.introduction}</p>
        <button
          onClick={() => { this.togglePanel() }}
          className="Profile__editButton"
        >プロフィールを編集</button>

        <div className={this.state.editPanelClass}>
          <div className="Profile__panelHeader">
            <button className="Profile__closePanel" onClick={() => {this.togglePanel()}}>閉じる</button>
          </div>
          <ProfileEditForm
            name={this.state.profile.name}
            introduction={this.state.profile.introduction}
            updateProfile={(name, introduction) => {this.updateProfile(name, introduction)}}
          />
        </div>
      </div>
    );
  }
}

export default Profile;