import React from 'react';

// component
import ProfileRecord from './ProfileRecord/ProfileRecord';

// style
import './ProfileHead.scss';

const profileHead = () => {
  return (
    <div className="ProfileHead">
      <div className="ProfileHead__avator">
        <img />
      </div>
      <ProfileRecord />
    </div>
  );
}

export default profileHead;