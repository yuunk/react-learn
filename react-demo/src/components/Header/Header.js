import React from 'react';
import { Link } from 'react-router-dom'

// import './Header.scss';

const header = () => {
  return (
    <header className="Header">
      <Link
        to="/"
      >Home</Link>
      <Link
        to="/signup"
      >signup</Link>
    </header>
  );
}

export default header;
