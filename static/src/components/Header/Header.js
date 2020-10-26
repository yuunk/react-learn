import React from 'react';
import { Link } from 'react-router-dom';


import './Header.scss';

const header = () => {
  return (
    <header className="Header">
      <nav className="Header__nav">
        <Link
          to="/"
        >Home</Link>
        <Link
          to="/signup"
        >signup</Link>
      </nav>      
    </header>
  );
}

export default header;
