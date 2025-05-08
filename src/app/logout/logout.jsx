import React, { useEffect } from 'react';
import './logout.css';

function Logout() {
  useEffect(() => {
    // Clear any saved token/localStorage (optional)
    localStorage.removeItem('token');
    localStorage.removeItem('role');

    // Simulate logout delay (optional)
    setTimeout(() => {
      window.location.href = '/';
    }, 2000); // Redirect to login page after 2 sec
  }, []);

  return (
    <div className="logout-container">
      Logging Out &nbsp;
      <i className="fa fa-spinner fa-spin" style={{ fontSize: '24px' }}></i>
    </div>
  );
}

export default Logout;
