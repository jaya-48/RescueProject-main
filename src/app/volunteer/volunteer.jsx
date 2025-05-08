import React from 'react';
import { useNavigate } from 'react-router-dom';
import './volunteer.css'; // optional, your CSS styles go here

const Volunteer = () => {
  const navigate = useNavigate();

  const navigateToHelperForm = () => {
    navigate('/helper-form');
  };

  const navigateToServiceProviderForm = () => {
    navigate('/register-service-provider');
  };

  return (
    <div className="volcontainer">
      <h1>Volunteer Service</h1>

      <div className="cards">
        <div className="card" onClick={navigateToServiceProviderForm}>
          <p className="card-title">Provide Shelter/Food</p>
        </div>

        <div className="card" onClick={navigateToHelperForm}>
          <p className="card-title">Provide Help</p>
        </div>
      </div>

      {/* "+" Button */}
      <button className="add-btn" onClick={() => navigate('/report')}>+</button>
    </div>
  );
};

export default Volunteer;
