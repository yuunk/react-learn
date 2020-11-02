import React, { Component } from 'react';
import axios from 'axios';

// context
import ProfileBaseContext from '../../../context/ProfileBaseContext';

// style
import './ProfileRecord.scss';

class ProfileRecord extends Component {

  static contextType = ProfileBaseContext;

  // fetchData = () => {
  //   console.log(this.context.profileId);
  //   const token = localStorage.getItem('access_token');

  //   axios.get('/api/profile/record/' + this.context.profileId , {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     }
  //   }).then(response => {
  //     console.log(response);
  //     this.context.update(response.data.userPosts, response.data.follow, response.data.follower);
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // }

  // componentDidMount = () => {
  //   this.fetchData();
  // }

  render() {
    return (
      <ul className="ProfileRecord">
        <div className="ProfileRecord__item">
          <span className="ProfileRecord__number">{this.context.record.data.userPosts}</span>
          <span className="ProfileRecord__label">投稿</span>
        </div>
        <div className="ProfileRecord__item">
          <span className="ProfileRecord__number">{this.context.record.data.follow}</span>
          <span className="ProfileRecord__label">フォロワー</span>
        </div>
        <div className="ProfileRecord__item">
          <span className="ProfileRecord__number">{this.context.record.data.follower}</span>
          <span className="ProfileRecord__label">フォロー中</span>
        </div>
      </ul>
    );
  }
}

export default ProfileRecord;