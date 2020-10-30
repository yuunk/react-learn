import React, { Component } from 'react';

// component
import ProfileBase from '../../components/ProfileBase/ProfileBase';

// style
import './Profile.scss';

class Profile extends Component {

  render() {
    return (
      <ProfileBase
        myprofile={false}
        userId={this.props.match.params.id}
      />
    );
  }
}

export default Profile;