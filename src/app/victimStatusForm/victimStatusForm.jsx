import React, { useState } from 'react';
import './victimStatusForm.css'; // optional styling

const VictimStatusForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    damageSeverity: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    onClose(); // Just close the modal for now
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Victim Status Updates</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="patientName">Patient Name:</label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              placeholder="Enter patient's name"
              required
              value={formData.patientName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Enter age"
              required
              value={formData.age}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="damageSeverity">Damage Severity:</label>
            <select
              id="damageSeverity"
              name="damageSeverity"
              required
              value={formData.damageSeverity}
              onChange={handleChange}
            >
              <option value="">Select severity</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="details">Details:</label>
            <textarea
              id="details"
              name="details"
              placeholder="Provide additional details"
              value={formData.details}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VictimStatusForm;
