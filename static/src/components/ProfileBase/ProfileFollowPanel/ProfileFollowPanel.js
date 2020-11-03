import React, { Component } from 'react';

// context
import ProfileBaseContext from '../../../context/ProfileBaseContext';

// component
import FollowDataItem from './FollowDataItem/FollowDataItem';

// style
import './ProfileFollowPanel.scss';

class ProfileFollowPanel extends Component {

  state = {
    panelClass: 'ProfileFollowPanel',
    followerClass: 'ProfileFollowPanel__tab',
    followClass: 'ProfileFollowPanel__tab',
    followerDataClass: 'ProfileFollowPanel__data',
    followDataClass: 'ProfileFollowPanel__data',
  }

  updateFollow = (followUsers) => {
    // return (
    //   {}
    // );
    // followUsers.map((user, index))
  }

  static getDerivedStateFromProps(props, state) {
    let panelClass;
    let active = props.active;
    if (active) {
      panelClass = 'ProfileFollowPanel -active';
    } else {
      panelClass = 'ProfileFollowPanel';
    }
    console.log('derived ' + props.activeDefaultTab);
    if (props.activeDefaultTab) {
      return {
        panelClass: panelClass,
        followerClass: 'ProfileFollowPanel__tab -active',
        followClass: 'ProfileFollowPanel__tab',
        followerDataClass: 'ProfileFollowPanel__data -active',
        followDataClass: 'ProfileFollowPanel__data',
      }
    } else {
      return {
        panelClass: panelClass,
        followerClass: 'ProfileFollowPanel__tab',
        followClass: 'ProfileFollowPanel__tab -active',
        followerDataClass: 'ProfileFollowPanel__data',
        followDataClass: 'ProfileFollowPanel__data -active',
      }
    }

  }

  toggleTab = () => {
    this.props.toggleActiveDefaultTab();
  }

  render() {
    return (
      <div className={this.state.panelClass}>
        <div className="ProfileFollowPanel__nav">
          <button
            onClick={() => this.toggleTab()}
            className={this.state.followerClass}>フォロワー</button>
          <button
            onClick={() => this.toggleTab()}
            className={this.state.followClass}>フォロー中</button>
        </div>

          <ProfileBaseContext.Consumer>
            {(context) => {
            const followerArray = Array.from(context.followPanel.data.followerUsers);
            const array = Array.from(context.followPanel.data.followUsers);
              return (
                <React.Fragment>
                  <ul className={this.state.followerDataClass}>
                    {followerArray.map((user, index) => (
                      <FollowDataItem
                        key={index}
                        userName={user.name}
                        userId={user.id}
                      />
                    ))}
                  </ul>
                  <ul className={this.state.followDataClass}>
                    {array.map((user, index) => (
                      <FollowDataItem
                        key={index}
                        userName={user.name}
                        userId={user.id}
                      />
                    ))}
                  </ul>
                </React.Fragment>
              );
            }}
          </ProfileBaseContext.Consumer>

      </div>
    );
  }
}

export default ProfileFollowPanel;