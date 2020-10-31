import React, { Component } from 'react';

// context
import ProfileContext from '../../context/ProfileContext';

// component
import ProfileBase from '../../components/ProfileBase/ProfileBase';

// style
import './Profile.scss';

class Profile extends Component {

  render() {
    return (
      <ProfileContext.Provider
        value={
          {
            profileId: this.props.match.params.id
          }
        }
      >
        <ProfileBase
          myprofile={false}
          userId={this.props.match.params.id}
        />
      </ProfileContext.Provider>
    );
  }
}

export default Profile;