import React, { Component } from 'react';

// component
import ProfileBase from '../../components/ProfileBase/ProfileBase';

class MyProfile extends Component {

  render() {
    return (
      <ProfileBase myprofile={true} />
    );
  }
}

export default MyProfile;