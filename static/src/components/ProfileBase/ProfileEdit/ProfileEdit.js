import React, { Component } from 'react';

// component
import ProfileEditForm from '../ProfileEditForm/ProfileEditForm';

// style
import './ProfileEdit.scss';

class ProfileEdit extends Component {

  state = {
    editPanelClass: 'ProfileEdit__panel',
    editPanel: false,
  }

  togglePanel = () => {
    if (this.state.editPanel) {
      this.setState({ editPanel: false });
      this.setState({ editPanelClass: 'ProfileEdit__panel' });
    } else {
      this.setState({ editPanel: true });
      this.setState({ editPanelClass: 'ProfileEdit__panel -active' });
    }
  }

  updateProfile = (name, introduction) => {
    this.setState({
      profile: {
        name: name,
        introduction: introduction
      }
    });
  }

  render() {
    return (
      <React.Fragment>

        <button
          onClick={() => { this.togglePanel() }}
          className="ProfileEdit__button"
        >プロフィールを編集
        </button>

        <div className={this.state.editPanelClass}>
          <div className="ProfileEdit__panelHeader">
            <button className="ProfileEdit__closePanel" onClick={() => { this.togglePanel() }}>閉じる</button>
          </div>
          <ProfileEditForm
            name={this.props.name}
            introduction={this.props.introduction}
            updateProfile={(name, introduction) => { this.props.updateProfile(name, introduction) }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileEdit;