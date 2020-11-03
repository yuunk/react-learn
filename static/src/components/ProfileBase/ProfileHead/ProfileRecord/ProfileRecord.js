import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// context
import ProfileBaseContext from '../../../../context/ProfileBaseContext';

// component
import ProfileFollowPanel from '../../ProfileFollowPanel/ProfileFollowPanel';

// style
import './ProfileRecord.scss';

class ProfileRecord extends Component {

  static contextType = ProfileBaseContext;

  state = {
    followPanel: false,
    activeDefaultTab: true,
  }

  activeFollowPanel = (activeDefaultTab) => {
    this.setState({
      followPanel: true,
      activeDefaultTab: activeDefaultTab
    });
    this.context.header.update('followPanel', true);
  }

  toggleActiveDefaultTab = () => {
    if (this.state.activeDefaultTab) {
      this.setState({ activeDefaultTab: false });
    } else {
      this.setState({ activeDefaultTab: true });
    }
  }

  componentDidMount = () => {
    if (this.context.header.active) {

    } else {
      this.setState({ followPanel: false });
    }
  }

  render() {
    return (
      <React.Fragment>

        <ul className="ProfileRecord">
          <Link
            className="ProfileRecord__item"
            to={'/posts/' + this.context.userId}
          >
            <span className="ProfileRecord__number">{this.context.record.data.userPosts}</span>
            <span className="ProfileRecord__label">投稿</span>
          </Link>

          <div
            className="ProfileRecord__item"
            onClick={() => { this.activeFollowPanel(true) }}
          >
            <span className="ProfileRecord__number">{this.context.record.data.follower}</span>
            <span className="ProfileRecord__label">フォロワー</span>
          </div>

          <div
            className="ProfileRecord__item"
            onClick={() => { this.activeFollowPanel(false) }}
          >
            <span className="ProfileRecord__number">{this.context.record.data.follow}</span>
            <span className="ProfileRecord__label">フォロー中</span>
          </div>

        </ul>

        <ProfileFollowPanel
          active={this.context.header.active}
          activeDefaultTab={this.state.activeDefaultTab}
          toggleActiveDefaultTab={() => {this.toggleActiveDefaultTab()}}
        />

      </React.Fragment>
    );
  }
}

export default ProfileRecord;