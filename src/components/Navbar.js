import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import './Navbar.css';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogoutClick = () => {
    logout();
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <h1>FitnessApp</h1>
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <div className='close-btn' onClick={toggleMenu}>X</div>
          <Link to="/Measure" onClick={toggleMenu}>Measure</Link>
          <Link to="/History" onClick={toggleMenu}>History</Link>
          <Link to="/Explore" onClick={toggleMenu}>Explore</Link>
          {user ? (
            <Link to="/" onClick={handleLogoutClick}>Log out</Link>
          ) : (
            <>
              <Link to="/login" onClick={toggleMenu}>Login</Link>
              <Link to="/signup" onClick={toggleMenu}>Signup</Link>
            </>
            
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
