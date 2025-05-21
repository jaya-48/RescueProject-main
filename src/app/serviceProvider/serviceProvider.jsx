import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './serviceProvider.css'; // Optional: your styling

const ServiceProvider = () => {
  const [name, setName] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [available, setAvailable] = useState('');
  const [location, setLocation] = useState(''); // ✅ New state
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    const serviceProviderData = {
      name,
      serviceType,
      available: available === 'true',
      location, // ✅ Send location
    };

    setLoading(true);
    try {
      const response = await axios.post('/volunteer/register/service-provider', serviceProviderData);
      setMessage(`Registered successfully! ID: ${response.data.id}`);
      setTimeout(() => navigate('/vol'), 2000); // Redirect to /vol after 2 seconds
    } catch (error) {
      console.error(error);
      setMessage('Error registering service provider.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="serviceform-container">
      <h2 className="serviceform-heading">Register for Service Provider</h2>

      <form onSubmit={onSubmit} className="service-provider-form">
        <div className="serviceform-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            required
            className="serviceform-control"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="serviceform-group">
          <label htmlFor="serviceType">Service Type</label>
          <select
            id="serviceType"
            required
            className="serviceform-control"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="food">Food</option>
            <option value="shelter">Shelter</option>
            <option value="logistics">Logistics</option>
            <option value="medical">Medical</option>
          </select>
        </div>

        <div className="serviceform-group">
          <label htmlFor="available">Availability</label>
          <select
            id="available"
            required
            className="serviceform-control"
            value={available}
            onChange={(e) => setAvailable(e.target.value)}
          >
            <option value="">Select</option>
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>
        </div>

        <div className="serviceform-group"> {/* ✅ Location field */}
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            required
            className="serviceform-control"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <button type="submit" className="servicebtn btn-primary" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>

        {message && <p className="status-message">{message}</p>}
      </form>
    </div>
  );
};

export default ServiceProvider;

