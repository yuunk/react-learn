import React, { Component } from 'react';

// style
import './ProfileFollowPanel.scss';

class ProfileFollowPanel extends Component {

  state = {
    panelClass: 'ProfileFollowPanel',
    followerClass: 'ProfileFollowPanel__tab',
    followClass: 'ProfileFollowPanel__tab'
  }

  componentDidMount = () => {

  }

  static getDerivedStateFromProps(props, state) {
    let panelClass;
    let active = props.active;
    if (active) {
      panelClass = 'ProfileFollowPanel -active';
    } else {
      panelClass = 'ProfileFollowPanel';
    }

    if (props.activeDefaultTab) {
      return {
        panelClass: panelClass,
        followerClass: 'ProfileFollowPanel__tab -active',
        followClass: 'ProfileFollowPanel__tab'
      }
    } else {
      return {
        panelClass: panelClass,
        followerClass: 'ProfileFollowPanel__tab',
        followClass: 'ProfileFollowPanel__tab -active'
      }
    }

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextporsp: ' + nextProps.active + 'this props: ' + this.props.active);
    if (nextProps.active === this.props.active) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className={this.state.panelClass}>
        <div className="ProfileFollowPanel__nav">
          <button className={this.state.followerClass}>フォロワー</button>
          <button className={this.state.followClass}>フォロー中</button>
        </div>
      </div>
    );
  }
}

export default ProfileFollowPanel;