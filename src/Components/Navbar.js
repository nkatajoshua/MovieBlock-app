import React from 'react';
import './Navbar.css';
import { Link } from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to='/'> Home </Link>
        <Link to='/tvshows'> Tv shows </Link> 
      </div>
    </nav>
  );
};

export default Navbar;
