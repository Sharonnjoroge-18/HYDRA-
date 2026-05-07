import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a className="nav-logo" href="/#hero">SolHydra</a>
        <ul className="nav-links">
          <li>
            <a href="/#hero">Home</a>
          </li>
          <li><a href="/#usage">How it works</a></li>
          <li><a href="/#about">About</a></li>
        </ul>
        <div className="nav-actions">
            <Link className="nav-btn nav-btn--secondary" to="/login">Login</Link>
          <Link className="nav-btn nav-btn--primary" to="/shop">Shop Now</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
