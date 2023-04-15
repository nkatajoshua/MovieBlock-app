import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to='/'> Home </Link>
        <Link to='/tvshows'> Tv shows </Link> 
      </div>
    </nav>
  );
};

export default Navbar;
