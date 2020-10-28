import React from 'react';

import './PostChild.scss';

const postChild = (props) => {

  return (
    <li className="PostChild">
      <div className="PostChild__title">{props.title}</div>
      <div className="PostChild__name">{props.name}</div>
      <div className="PostChild__date">{props.date}</div>
    </li>
  );
}

export default postChild;