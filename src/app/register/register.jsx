import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

function Register() {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [roles, setRoles] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple log, replace with axios/fetch call to backend
    console.log('Registering:', { fullName, password, roles });

    // TODO: call your backend API (using fetch or axios)
    // Example:
    // axios.post('http://localhost:8080/api/auth/register', { fullName, password, roles })

    // Reset form
    setFullName('');
    setPassword('');
    setRoles('');
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form className="register-form1" onSubmit={handleSubmit}>
        <div className="register-form-group">
          <input
            id="fullName"
            name="fullName"
            placeholder="Enter your name"
            type="text"
            className="register-input-field"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="register-form-group">
          <input
            id="password"
            name="password"
            placeholder="Enter your password"
            type="text"
            className="register-input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="register-form-group">
          <select
            id="roles"
            name="roles"
            className="register-input-field"
            value={roles}
            onChange={(e) => setRoles(e.target.value)}
            required
          >
            <option value="" disabled>Select a role</option>
            <option value="RescueTeam">Rescue Team</option>
            <option value="Hospital">Hospital</option>
            <option value="Volunteer">Volunteer Service</option>
          </select>
        </div>

        <div className="register-form-group">
          <button type="submit" className="register-submit-btn">Submit</button>
        </div>
      </form>

      <div className="registers-link">
        <Link to="/" className="register-link">Existing User? Login Here</Link>
      </div>
    </div>
  );
}

export default Register;
