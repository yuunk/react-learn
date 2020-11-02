import React, { Component } from 'react';

// style
import './ProfileFollowPanel.scss';

class ProfileFollowPanel extends Component {

  state = {
    panelClass: 'ProfileFollowPanel'
  }

  componentDidMount = () => {

  }

  static getDerivedStateFromProps(props, state) {
    console.log(props.active);
    if (props.active) {
      return {
        panelClass: 'ProfileFollowPanel -active'
      }
    }
    return {panelClass: 'ProfileFollowPanel'};
  }

  render() {
    return (
      <div className={this.state.panelClass}>
        <div className="ProfileFollowPanel__nav">
          <button className="ProfileFollowPanel__tab">フォロワー</button>
          <button className="ProfileFollowPanel__tab">フォロー中</button>
        </div>
      </div>
    );
  }
}

export default ProfileFollowPanel;