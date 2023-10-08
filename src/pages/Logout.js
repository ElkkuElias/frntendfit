import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout'

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the session storage (or perform any other necessary logout actions)
    sessionStorage.removeItem('token');
    
    // Redirect to the login page or any other appropriate page
    navigate('/login');
  }, [navigate]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default Logout;