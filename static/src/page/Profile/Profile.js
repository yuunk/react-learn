import React, { Component } from 'react';

// component
import ProfileEditForm from '../../components/ProfileEditForm/ProfileEditForm';

// style
import './Profile.scss';

class Profile extends Component {

  state = {
    editPanelClass: 'Profile__editPanel',
    editPanel: false
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

  render() {
    return (
      <div className="Profile">
        <button
          onClick={() => { this.togglePanel() }}
          className="Profile__editButton"
        >プロフィールを編集</button>

        <div className={this.state.editPanelClass}>
          <div className="Profile__panelHeader">
            <button className="Profile__closePanel" onClick={() => {this.togglePanel()}}>閉じる</button>
          </div>
          <ProfileEditForm />
        </div>
      </div>
    );
  }
}

export default Profile;