import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import { useAuth } from '../AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a className="nav-logo" href="/#hero">SolHydra</a>
        <ul className="nav-links">
          <li><a href='/#hero'>Home</a></li>
          <li><a href='/#usage'>How it works</a></li>
          <li><a href='/#about'>About</a></li>
        </ul>
        <div className="nav-actions">
          {user ? (
            <>
              <Link className="nav-btn nav-btn--secondary" to="/cart">Cart</Link>
              <button className="nav-btn nav-btn--secondary" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link className="nav-btn nav-btn--secondary" to="/login">Login</Link>
          )}
          <Link className="nav-btn nav-btn--primary" to="/shop">Shop Now</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;