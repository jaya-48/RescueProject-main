import React, { useState } from 'react';
import axios from 'axios';
import './helperForm.css'; // Copy your existing CSS if needed

const HelperForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    availabilityStatus: 'Available'
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); // just for demo feedback
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.availabilityStatus) newErrors.availabilityStatus = 'Status is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post('/volunteer/register/helper', formData);
      console.log('Form submitted:', response.data); // Log the response from the backend

      setSubmitted(true); // Show basic confirmation
    } catch (error) {
      console.error('Error during form submission:', error);
      setErrorMessage('Failed to register helper. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <br /><br />
      <h1>Register Helper</h1><br /><br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="availabilityStatus">Availability Status:</label>
          <select 
            id="availabilityStatus" 
            name="availabilityStatus"
            value={formData.availabilityStatus}
            onChange={handleChange}
            required
          >
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
          {errors.availabilityStatus && <p className="error">{errors.availabilityStatus}</p>}
        </div>

        <button type="submit">Submit</button>
        {submitted && <p className="success">Form submitted successfully! ✅</p>}
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default HelperForm;

