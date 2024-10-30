import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px', textAlign: 'center' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', margin: '10px' }}>Home</Link>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', margin: '10px' }}>About the App</Link>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', margin: '10px' }}>Catalog</Link>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', margin: '10px' }}>Search</Link>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', margin: '10px' }}>Contact Us</Link>
    </nav>
  );
};

export default Navbar;
