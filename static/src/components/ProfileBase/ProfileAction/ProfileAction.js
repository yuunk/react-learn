import React, { Component } from 'react';

// context
import ProfileBaseContext from '../../../context/ProfileBaseContext';

// component
import ProfileFollowBtn from '../ProfileFollowBtn/ProfileFollowBtn';

// style
import './ProfileAction.scss';

class ProfileAction extends Component {

  static contextType = ProfileBaseContext;

  state = {
    follow: false,
  }

  updateFollow = (response) => {
    console.log(response);
    this.setState({ follow: response });
    this.context.record.update();
  }

  render() {
    return (
      <div className="ProfileAction">
        <ProfileFollowBtn
          className="ProfileAction__btn"
          follow={this.state.follow}
          updateFollow={(response) => { this.updateFollow(response) }}
        />
        <button className="ProfileAction__btn">メッセージ</button>
        <button></button>
      </div>
    );
  }

}

export default ProfileAction;