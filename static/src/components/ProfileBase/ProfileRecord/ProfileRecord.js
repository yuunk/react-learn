import React, { Component } from 'react';

// style
import './ProfileRecord.scss';

class ProfileRecord extends Component {

  render() {
    return (
      <ul className="ProfileRecord">
        <div className="ProfileRecord__item">
          <span className="ProfileRecord__number">0</span>
          <span className="ProfileRecord__label">投稿</span>
        </div>
        <div className="ProfileRecord__item">
          <span className="ProfileRecord__number">0</span>
          <span className="ProfileRecord__label">フォロワー</span>
        </div>
        <div className="ProfileRecord__item">
          <span className="ProfileRecord__number">0</span>
          <span className="ProfileRecord__label">フォロー中</span>
        </div>
      </ul>
    );
  }
}

export default ProfileRecord;