import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// style
import './FollowDataItem.scss';

const FollowDataItem = (props) => {

  const [follow, setFollow] = useState(true);
  const [btnText, setBtnText] = useState('フォロー中');

  const updateFollow = () => {

    const token = localStorage.getItem('access_token');

    if (token === null) {
      // modalを出してログインを促す
    }

    axios.post('/api/follower/update', {
      profileUserId: props.userId
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(response => {
      // this.props.updateFollow(response.data.follow);
      if (follow) {
        setFollow(false);
        setBtnText('フォロー');
      } else {
        setFollow(true);
        setBtnText('フォロー中');
      }
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <li className="FollowDataItem">
      <Link
        to={'/profile/' + props.userId}
        className="FollowDataItem__name"
      >
        {props.userName}
      </Link>
      <span></span>
      <button
        className="FollowDataItem__btn"
        onClick={() => updateFollow()}
      >{btnText}</button>
    </li>
  );
}

export default FollowDataItem;