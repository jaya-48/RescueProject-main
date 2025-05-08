import React from 'react';
import { Link } from 'react-router-dom';
import { sendSosMessage } from './sosService';
import './sos.css';

const SosPage = () => {
  const sendMsg = async () => {
    console.log("I'm a Victim");

    try {
      const data = await sendSosMessage();
      Object.keys(data).forEach(key => {
        console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${data[key]}`);
      });
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className="sos-container">
      <div className="top-right">
        <Link to="/homePage" className="auth-link">Home</Link>
        <Link to="/register" className="auth-link">Register</Link>
        <Link to="/login" className="auth-link">Login</Link>
      </div>

      <button onClick={sendMsg} className="sos">SOS</button>
    </div>
  );
};

export default SosPage;
