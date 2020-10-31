import React, { Component } from 'react';

// component
import ProfileFollowBtn from '../ProfileFollowBtn/ProfileFollowBtn';

// style
import './ProfileAction.scss';

class ProfileAction extends Component {

  state = {
    follow: false,
  }

  updateFollow = (response) => {
    console.log(response);
    this.setState({ follow: response });
  }

  render() {
    // console.log(this.props.match.params.id);
    return (
      <div className="ProfileAction">
        <ProfileFollowBtn
          className="ProfileAction__btn"
          follow={this.state.follow}
          // profileUserId={this.props.match.params.id}
          updateFollow={(response) => { this.updateFollow(response) }}
        />
        <button className="ProfileAction__btn">メッセージ</button>
        <button></button>
      </div>
    );
  }

}

export default ProfileAction;