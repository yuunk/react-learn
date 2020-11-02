import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
  }

  activeFollowPanel = (type) => {
    this.setState({ followPanel: true });
    this.context.header.update('followPanel', true);
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
            onClick={() => { this.activeFollowPanel('follower') }}
          >
            <span className="ProfileRecord__number">{this.context.record.data.follow}</span>
            <span className="ProfileRecord__label">フォロワー</span>
          </div>

          <div
            className="ProfileRecord__item"
            onClick={() => { this.activeFollowPanel() }}
          >
            <span className="ProfileRecord__number">{this.context.record.data.follower}</span>
            <span className="ProfileRecord__label">フォロー中</span>
          </div>

        </ul>

        <ProfileFollowPanel active={this.context.header.active} />

      </React.Fragment>
    );
  }
}

export default ProfileRecord;