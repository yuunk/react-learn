import React, { useState } from 'react';

// style
import './FollowDataItem.scss';

const FollowDataItem = (props) => {

  const [follow, setFollow] = useState(true);
  const [btnText, setBtnText] = useState('フォロー中');

  return (
    <li className="FollowDataItem">
      <span className="FollowDataItem__name">{props.userName}</span>
      <button className="FollowDataItem__btn">{btnText}</button>
    </li>
  );
}

export default FollowDataItem;