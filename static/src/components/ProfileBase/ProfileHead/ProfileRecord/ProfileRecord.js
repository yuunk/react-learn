import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// context
import ProfileBaseContext from '../../../../context/ProfileBaseContext';

// style
import './ProfileRecord.scss';

class ProfileRecord extends Component {

  static contextType = ProfileBaseContext;

  render() {
    return (
      <ul className="ProfileRecord">
        <Link
          className="ProfileRecord__item"
          to={'/posts/' + this.context.userId}
        >
          <span className="ProfileRecord__number">{this.context.record.data.userPosts}</span>
          <span className="ProfileRecord__label">投稿</span>
        </Link>
        <Link
          className="ProfileRecord__item"
          to="/"
        >
          <span className="ProfileRecord__number">{this.context.record.data.follow}</span>
          <span className="ProfileRecord__label">フォロワー</span>
        </Link>
        <Link
          className="ProfileRecord__item"
          to="/"
        >
          <span className="ProfileRecord__number">{this.context.record.data.follower}</span>
          <span className="ProfileRecord__label">フォロー中</span>
        </Link>
      </ul>
    );
  }
}

export default ProfileRecord;