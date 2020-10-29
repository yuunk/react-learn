import React from 'react';
import { Link } from 'react-router-dom';

import './PostChild.scss';

const postChild = (props) => {

  return (
    <li className="PostChild">
      <Link to={'/post/' + props.id}>
        <div className="PostChild__title">{props.title}</div>
        <div className="PostChild__name">{props.name}</div>
        <div className="PostChild__date">{props.date}</div>
      </Link>
    </li>
  );
}

export default postChild;