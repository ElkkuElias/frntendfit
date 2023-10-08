import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

import './Navbar.css';

const Navbar = () => {
  // const isAuthenticated = sessionStorage.getItem('token') !== null;
  // const navigate = useNavigate();
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()

  }

  // const handleLogout = () => {
  //   // Clear the session storage (or perform any other necessary logout actions)
  //   sessionStorage.removeItem('token');
  //   // Redirect to the login page or any other appropriate page
  //   navigate('/login');
  // };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>FitnessApp</h1>
        </Link>
        <nav>
          <div>




            <Link className="links" to="/Measure">
              Measure
            </Link>
            <Link className="links" to="/History">
              History
            </Link>
            <Link className="links" to="/Explore">
              Explore
            </Link>
            {user && (
              <>
                <Link className="links" onClick={handleClick} to="/">Log out</Link>
              </>
            )}
            {!user && (
              <>
                <Link className="links" to="/login">Login</Link>
                <Link className="links" to="/signup">Signup</Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
