import React, { useState } from 'react';
import './login.css';
//import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
 // const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    // Simulated login action (replace with actual auth call)
    console.log('Logging in with:', { username, password, role });

    // Example: navigate to a dashboard or homepage
    // navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form1" onSubmit={onLogin}>
        <div className="login-form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            placeholder="Enter your name"
            type="text"
            className="login-input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="login-form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            placeholder="Enter your password"
            type="password"
            className="login-input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="login-form-group">
          <label htmlFor="role">Select a Role</label>
          <select
            id="role"
            name="role"
            className="login-input-field"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="" disabled>Select your role</option>
            <option value="RescueTeam">Rescue Team</option>
            <option value="Hospital">Hospital</option>
            <option value="Volunteer">Volunteer Service</option>
          </select>
        </div>

        <div className="login-form-group">
          <button type="submit" className="login-submit-btn">Submit</button>
        </div>
      </form>

      <div className="login-link">
        <a href="/register" className="login-register-link">New User? Register Here</a>
      </div>
    </div>
  );
};

export default Login;
